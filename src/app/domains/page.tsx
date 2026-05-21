import { DANIELSON_FRAMEWORK } from '@/data/danielson';
import { ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';

export default function DomainsHub() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="mb-14 lg:mb-20">
        <h1 className="heading-display mb-6 text-4xl text-hdkwa-navy sm:text-6xl">Instructional Hub.</h1>
        <p className="max-w-2xl text-xl leading-relaxed text-gray-500 sm:text-2xl">
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
              className={`group cursor-pointer rounded-[24px] border p-7 transition-transform hover:scale-[1.02] sm:p-12 lg:rounded-display ${
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
