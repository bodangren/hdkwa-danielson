import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sourcePath = path.join(root, 'src/data/techniques.ts');
const outputDir = path.join(root, 'public/technique-images');

const domainThemes = {
  1: {
    label: 'Planning',
    bg: '#f5f5f7',
    primary: '#003366',
    accent: '#c5a059',
    soft: '#e7edf4',
    motif: 'blueprint'
  },
  2: {
    label: 'Environment',
    bg: '#f8f6f1',
    primary: '#003366',
    accent: '#c5a059',
    soft: '#efe4cc',
    motif: 'classroom'
  },
  3: {
    label: 'Instruction',
    bg: '#f5f5f7',
    primary: '#003366',
    accent: '#0066cc',
    soft: '#dbeafe',
    motif: 'discussion'
  },
  4: {
    label: 'Professional',
    bg: '#f7f7f4',
    primary: '#003366',
    accent: '#c5a059',
    soft: '#e8ece8',
    motif: 'reflection'
  }
};

function loadTechniques(source) {
  const executable = source
    .replace(/^import\s+\{ Technique \}\s+from\s+['"].+?['"];?\s*/m, '')
    .replace('export const techniques: Technique[] =', 'const techniques =');

  return new Function(`${executable}\nreturn techniques;`)();
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function wrapText(text, maxChars, maxLines) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }

    if (lines.length === maxLines) break;
  }

  if (current && lines.length < maxLines) {
    lines.push(current);
  }

  return lines;
}

function subdomainName(alignment) {
  if (!alignment.includes(':')) return alignment;
  return alignment.split(':').slice(1).join(':').trim();
}

function motifSvg(theme) {
  const common = `
    <circle cx="930" cy="230" r="150" fill="${theme.soft}" opacity="0.95"/>
    <circle cx="1040" cy="420" r="82" fill="${theme.accent}" opacity="0.18"/>
    <path d="M760 600 C850 510 1000 520 1110 430" fill="none" stroke="${theme.accent}" stroke-width="18" stroke-linecap="round" opacity="0.28"/>
  `;

  if (theme.motif === 'blueprint') {
    return `${common}
      <rect x="760" y="180" width="310" height="250" rx="24" fill="white" stroke="${theme.primary}" stroke-width="8"/>
      <path d="M815 260 H1015 M815 320 H970 M815 380 H1030" stroke="${theme.primary}" stroke-width="10" stroke-linecap="round" opacity="0.75"/>
      <path d="M745 490 L1095 490" stroke="${theme.accent}" stroke-width="12" stroke-linecap="round"/>
      <path d="M805 540 L1035 540" stroke="${theme.primary}" stroke-width="8" stroke-linecap="round" opacity="0.45"/>
    `;
  }

  if (theme.motif === 'classroom') {
    return `${common}
      <rect x="760" y="190" width="330" height="205" rx="22" fill="${theme.primary}"/>
      <path d="M810 260 H1040 M810 315 H980" stroke="white" stroke-width="12" stroke-linecap="round" opacity="0.88"/>
      <circle cx="840" cy="515" r="38" fill="${theme.accent}"/>
      <circle cx="935" cy="515" r="38" fill="${theme.primary}" opacity="0.88"/>
      <circle cx="1030" cy="515" r="38" fill="${theme.accent}"/>
      <path d="M790 590 H1080" stroke="${theme.primary}" stroke-width="12" stroke-linecap="round" opacity="0.4"/>
    `;
  }

  if (theme.motif === 'discussion') {
    return `${common}
      <circle cx="835" cy="270" r="58" fill="${theme.primary}"/>
      <circle cx="1030" cy="265" r="58" fill="${theme.accent}"/>
      <circle cx="930" cy="440" r="70" fill="${theme.primary}" opacity="0.9"/>
      <path d="M878 290 L984 280 M865 318 L900 390 M1002 320 L965 390" stroke="${theme.primary}" stroke-width="10" stroke-linecap="round" opacity="0.35"/>
      <path d="M800 570 H1075" stroke="${theme.accent}" stroke-width="14" stroke-linecap="round" opacity="0.45"/>
    `;
  }

  return `${common}
    <rect x="790" y="185" width="265" height="330" rx="28" fill="white" stroke="${theme.primary}" stroke-width="8"/>
    <path d="M845 275 H1000 M845 335 H980 M845 395 H1015" stroke="${theme.primary}" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
    <path d="M995 470 L1070 545" stroke="${theme.accent}" stroke-width="18" stroke-linecap="round"/>
    <circle cx="982" cy="457" r="35" fill="${theme.accent}" opacity="0.25"/>
  `;
}

function imageSvg(technique) {
  const theme = domainThemes[technique.domain] || domainThemes[3];
  const titleLines = wrapText(technique.title, 22, 3);
  const descriptionLines = wrapText(technique.description, 48, 3);
  const component = subdomainName(technique.alignment);

  return `
  <svg width="1200" height="760" viewBox="0 0 1200 760" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="760" fill="${theme.bg}"/>
    <rect x="48" y="48" width="1104" height="664" rx="46" fill="white" stroke="#e5e7eb" stroke-width="2"/>
    <rect x="48" y="48" width="1104" height="130" rx="46" fill="${theme.primary}"/>
    <path d="M48 132 H1152 V178 H48 Z" fill="${theme.primary}"/>
    <text x="92" y="110" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="5">${escapeXml(`Domain ${technique.domain} • ${technique.subdomain.toUpperCase()}`)}</text>
    <text x="92" y="150" fill="${theme.accent}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="3">${escapeXml(theme.label)}</text>

    <g>
      ${motifSvg(theme)}
    </g>

    <text x="92" y="275" fill="${theme.primary}" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="800" letter-spacing="-1">
      ${titleLines.map((line, index) => `<tspan x="92" dy="${index === 0 ? 0 : 66}">${escapeXml(line)}</tspan>`).join('')}
    </text>

    <text x="92" y="${310 + titleLines.length * 66}" fill="#4b5563" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="500">
      ${descriptionLines.map((line, index) => `<tspan x="92" dy="${index === 0 ? 0 : 36}">${escapeXml(line)}</tspan>`).join('')}
    </text>

    <rect x="92" y="590" width="560" height="62" rx="31" fill="${theme.soft}"/>
    <text x="126" y="630" fill="${theme.primary}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="2">${escapeXml(component)}</text>
    <text x="92" y="690" fill="#9ca3af" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" letter-spacing="4">${escapeXml(technique.source)}</text>
  </svg>`;
}

await fs.mkdir(outputDir, { recursive: true });

const source = await fs.readFile(sourcePath, 'utf8');
const techniques = loadTechniques(source);

for (const technique of techniques) {
  const svg = imageSvg(technique);
  const outputPath = path.join(outputDir, `${technique.id}.png`);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outputPath);
}

console.log(`Generated ${techniques.length} technique images in ${path.relative(root, outputDir)}`);
