#!/bin/bash
set -e

echo "=== Measure Generator ==="
echo "Generating architecture facts..."
echo ""

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GENERATED_DIR="$PROJECT_ROOT/measure/generated"

mkdir -p "$GENERATED_DIR"

# --- Generate architecture.json ---
cat > "$GENERATED_DIR/architecture.json" << 'JSONEOF'
{
  "generated_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "framework": "nextjs",
  "language": "typescript",
  "app_router": true,
  "source_root": "src",
  "structure": {
JSONEOF

# Build structure JSON
{
  echo '    "app": {'
  find "$PROJECT_ROOT/src/app" -maxdepth 2 -type d | sed "s|$PROJECT_ROOT/src/app/||" | grep -v "^$" | sort | while read -r dir; do
    echo "      \"$dir\": { \"type\": \"route_group\" },"
  done
  echo '      "_root": { "type": "root_layout" }'
  echo '    },'
  echo '    "components": ['
  find "$PROJECT_ROOT/src/components" -maxdepth 1 -type f -name "*.tsx" | sed 's|.*/||; s|\(.*\)|"\1"|' | paste -sd ',' -
  echo '    ],'
  echo '    "data": ['
  find "$PROJECT_ROOT/src/data" -maxdepth 1 -type f -name "*.ts" | sed 's|.*/||; s|\(.*\)|"\1"|' | paste -sd ',' -
  echo '    ],'
  echo '    "hooks": ['
  find "$PROJECT_ROOT/src/hooks" -maxdepth 1 -type f -name "*.ts" | sed 's|.*/||; s|\(.*\)|"\1"|' | paste -sd ',' -
  echo '    ],'
  echo '    "types": ['
  find "$PROJECT_ROOT/src/types" -maxdepth 1 -type f -name "*.ts" | sed 's|.*/||; s|\(.*\)|"\1"|' | paste -sd ',' -
  echo '    ]'
} >> "$GENERATED_DIR/architecture.json"

cat >> "$GENERATED_DIR/architecture.json" << 'JSONEOF'
  }
}
JSONEOF

# Fix trailing commas in JSON (naive approach)
python3 -c "
import json, sys
with open('$GENERATED_DIR/architecture.json', 'r') as f:
    content = f.read()
# Fix double quotes in generated_at
try:
    data = json.loads(content)
except:
    # If invalid, just rewrite with proper structure
    pass
# Write a clean version
import os
structure = {
    'generated_at': os.popen('date -u +%Y-%m-%dT%H:%M:%SZ').read().strip(),
    'framework': 'nextjs',
    'language': 'typescript',
    'app_router': True,
    'source_root': 'src',
    'structure': {
        'app': {},
        'components': [],
        'data': [],
        'hooks': [],
        'types': []
    }
}

for root, dirs, files in os.walk('$PROJECT_ROOT/src/app'):
    rel = os.path.relpath(root, '$PROJECT_ROOT/src/app')
    if rel == '.':
        structure['structure']['app']['_root'] = {'type': 'root_layout', 'files': sorted(files)}
    else:
        structure['structure']['app'][rel] = {'type': 'route_segment', 'files': sorted(files)}

for d in ['components', 'data', 'hooks', 'types']:
    path = os.path.join('$PROJECT_ROOT/src', d)
    if os.path.isdir(path):
        structure['structure'][d] = sorted([f for f in os.listdir(path) if f.endswith(('.ts','.tsx'))])

with open('$GENERATED_DIR/architecture.json', 'w') as f:
    json.dump(structure, f, indent=2)
" 2>/dev/null || true

echo "[1/2] Generated architecture.json"

# --- Generate routes.md ---
cat > "$GENERATED_DIR/routes.md" << 'MDEOF'
# Generated Routes

> Auto-generated from `src/app/` on $(date -u +%Y-%m-%dT%H:%M:%SZ)

## App Router Structure

| Route | File | Type |
|-------|------|------|
MDEOF

find "$PROJECT_ROOT/src/app" -type f \( -name "page.tsx" -o -name "layout.tsx" -o -name "route.ts" \) | sort | while read -r f; do
  rel="${f#$PROJECT_ROOT/src/app/}"
  dir=$(dirname "$rel")
  [ "$dir" = "." ] && route="/" || route="/$dir"
  filename=$(basename "$rel")
  filetype="page"
  [ "$filename" = "layout.tsx" ] && filetype="layout"
  [ "$filename" = "route.ts" ] && filetype="API route"
  echo "| $route | $rel | $filetype |" >> "$GENERATED_DIR/routes.md"
done

echo "" >> "$GENERATED_DIR/routes.md"
echo "## Data Files" >> "$GENERATED_DIR/routes.md"
echo "" >> "$GENERATED_DIR/routes.md"
echo "| File | Description |" >> "$GENERATED_DIR/routes.md"
echo "|------|-------------|" >> "$GENERATED_DIR/routes.md"

for f in "$PROJECT_ROOT/src/data"/*.ts; do
  [ -e "$f" ] || continue
  basename=$(basename "$f")
  echo "| $basename | Data model / constants |" >> "$GENERATED_DIR/routes.md"
done

echo "" >> "$GENERATED_DIR/routes.md"
echo "## Component Registry" >> "$GENERATED_DIR/routes.md"
echo "" >> "$GENERATED_DIR/routes.md"
for f in "$PROJECT_ROOT/src/components"/*.tsx; do
  [ -e "$f" ] || continue
  basename=$(basename "$f")
  echo "- \`$basename\`" >> "$GENERATED_DIR/routes.md"
done

echo "[2/2] Generated routes.md"
echo ""
echo "=== Generation complete ==="
