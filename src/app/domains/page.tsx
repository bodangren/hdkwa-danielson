import { DANIELSON_FRAMEWORK } from '@/data/danielson';
import { ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';

export default function DomainsHub() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="mb-20">
        <h1 className="heading-display text-6xl mb-6 text-hdkwa-navy">Instructional Hub.</h1>
        <p className="text-2xl text-gray-500 max-w-2xl leading-relaxed">
          Master the Danielson Framework through evidence-based techniques and actionable demonstrations.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DANIELSON_FRAMEWORK.map((domain) => {
          const isHighReward = [3, 2].includes(domain.id);
          return (
            <Link 
              key={domain.id}
              href={`/domains/${domain.id}`}
              className={`p-12 rounded-display hover:scale-[1.02] transition-transform cursor-pointer group border ${
                domain.id === 2 ? 'bg-hdkwa-navy text-white' : 'bg-apple-tile border-transparent hover:border-gray-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest ${domain.id === 2 ? 'text-gray-300' : 'text-gray-400'}`}>
                  Domain {domain.id}
                </span>
                {isHighReward && (
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 ${
                    domain.id === 2 ? 'bg-hdkwa-gold text-white' : 'bg-hdkwa-gold/10 text-hdkwa-gold'
                  }`}>
                    <Award className="w-3 h-3" /> High Reward
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-semibold mt-4 mb-2">{domain.title}</h2>
              <p className={`text-sm leading-relaxed ${domain.id === 2 ? 'text-gray-300' : 'text-gray-500'}`}>
                {domain.proficientDescriptor.split('.')[0]}.
              </p>
              <div className={`mt-8 flex items-center gap-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity ${
                domain.id === 2 ? 'text-white' : 'text-apple-blue'
              }`}>
                Explore Techniques <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
