import { Award, Info } from 'lucide-react';
import Link from 'next/link';
import { techniques } from '@/data/techniques';
import { DANIELSON_FRAMEWORK } from '@/data/danielson';
import TechniqueCard from '@/components/TechniqueCard';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

const HIGH_REWARD_DOMAINS = [3, 2];

export default async function DomainPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const domainId = parseInt(id);
  const domain = DANIELSON_FRAMEWORK.find(d => d.id === domainId);

  if (!domain) {
    notFound();
  }

  const isHighReward = HIGH_REWARD_DOMAINS.includes(domainId);
  const domainTechniques = techniques.filter(t => t.domain === domainId);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <nav className="mb-12 flex gap-4 text-sm font-medium text-gray-400">
        <Link href="/" className="hover:text-black transition-colors">Danielson PD</Link>
        <span>/</span>
        <span className="text-black">Domain {id} Hub</span>
      </nav>

      <div className="flex justify-between items-start mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="heading-display text-5xl text-hdkwa-navy">{domain.title}</h1>
            {isHighReward && (
              <span className="px-4 py-1.5 bg-hdkwa-gold text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm">
                <Award className="w-4 h-4" /> High Reward
              </span>
            )}
          </div>
          <div className="p-6 bg-apple-tile rounded-3xl border border-gray-100 flex gap-4 items-start">
             <Info className="w-5 h-5 text-hdkwa-navy mt-1 flex-shrink-0" />
             <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-hdkwa-navy mb-2">Proficient (Level 3) Descriptor</p>
                <p className="text-sm text-gray-600 leading-relaxed italic">{domain.proficientDescriptor}</p>
             </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-4xl font-semibold text-hdkwa-gold mb-1">Domain {id}</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Instructional Focus</p>
        </div>
      </div>

      <div className="space-y-20">
        {domain.components.map(comp => {
          const techs = domainTechniques.filter(t => t.subdomain === comp.id);
          return (
            <div key={comp.id} className="animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="flex items-start justify-between mb-8 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-hdkwa-navy text-white flex items-center justify-center font-bold text-base shadow-md">
                    {comp.id}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-hdkwa-navy">{comp.title}</h2>
                    <p className="text-xs text-gray-400 mt-1 font-medium max-w-2xl">
                      <span className="font-bold text-hdkwa-gold uppercase tracking-tighter mr-2">Proficient:</span>
                      {comp.proficientDescriptor}
                    </p>
                  </div>
                </div>
              </div>
              
              {techs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {techs.map(tech => (
                    <TechniqueCard key={tech.id} technique={tech} />
                  ))}
                </div>
              ) : (
                <div className="p-10 bg-apple-tile/50 rounded-display border border-dashed border-gray-200">
                  <p className="text-sm text-gray-400 italic">No techniques curated for Component {comp.id} yet. We are currently analyzing videos for this area.</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
