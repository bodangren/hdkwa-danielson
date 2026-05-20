import { Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { techniques } from '@/data/techniques';
import TechniqueCard from '@/components/TechniqueCard';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

const DOMAIN_NAMES: Record<string, string> = {
  '1': 'Planning & Preparation',
  '2': 'The Classroom Environment',
  '3': 'Instruction',
  '4': 'Professional Responsibilities',
};

// Subdomains to show even if they have no techniques yet
const DOMAIN_SUBDOMAINS: Record<string, string[]> = {
  '3': ['3a', '3b', '3c', '3d', '3e'],
  '2': ['2a', '2b', '2c', '2d', '2e'],
};

const HIGH_REWARD_DOMAINS = ['3', '2'];

export default async function DomainPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const domainName = DOMAIN_NAMES[id] || 'Unknown Domain';
  const isHighReward = HIGH_REWARD_DOMAINS.includes(id);

  const domainTechniques = techniques.filter(t => t.domain === parseInt(id));
  const subdomains = DOMAIN_SUBDOMAINS[id] || [];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <nav className="mb-12 flex gap-4 text-sm font-medium text-gray-400">
        <Link href="/" className="hover:text-black transition-colors">Danielson PD</Link>
        <span>/</span>
        <span className="text-black">Domain {id} Hub</span>
      </nav>

      <div className="flex justify-between items-end mb-16">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="heading-display text-5xl">{domainName}</h1>
            {isHighReward && (
              <span className="px-4 py-1.5 bg-hdkwa-gold text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm">
                <Award className="w-4 h-4" /> High Reward
              </span>
            )}
          </div>
          <p className="text-xl text-gray-500">Select a component to view proven instructional techniques.</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-semibold text-hdkwa-gold mb-1">0%</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Mastery Level</p>
        </div>
      </div>

      <div className="space-y-16">
        {subdomains.length > 0 ? (
          subdomains.map(subId => {
            const techs = domainTechniques.filter(t => t.subdomain === subId);
            return (
              <div key={subId} className="animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-hdkwa-navy text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {subId}
                  </div>
                  <h2 className="text-2xl font-semibold text-hdkwa-navy">Component {subId}</h2>
                </div>
                
                {techs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techs.map(tech => (
                      <TechniqueCard key={tech.id} technique={tech} />
                    ))}
                  </div>
                ) : (
                  <div className="p-8 bg-apple-tile rounded-display border border-dashed border-gray-200">
                    <p className="text-sm text-gray-400 italic">No techniques curated for {subId} yet. Coming soon.</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-20 bg-apple-tile rounded-display border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 font-medium">Technique data for Domain {id} is being curated.</p>
            <p className="text-sm text-gray-400 mt-2 italic">Check back soon for actionable modules.</p>
          </div>
        )}
      </div>
    </div>
  );
}
