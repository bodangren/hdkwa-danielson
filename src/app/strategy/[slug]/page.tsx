import { techniques } from '@/data/techniques';
import { PlayCircle, BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ReflectionModule from '@/components/ReflectionModule';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return techniques.map((tech) => ({
    slug: tech.id,
  }));
}

export default async function StrategyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const technique = techniques.find(t => t.id === slug);

  if (!technique) {
    notFound();
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <nav className="mb-12 flex gap-4 text-sm font-medium text-gray-400">
        <Link href={`/domains/${technique.domain}`} className="hover:text-black transition-colors">
          Domain {technique.domain}: Hub
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black">{technique.title}</span>
      </nav>

      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-7">
          <h1 className="heading-display text-5xl mb-4 leading-tight">{technique.title}</h1>
          
          <div className="flex items-center gap-3 mb-10">
            <span className="px-3 py-1 bg-hdkwa-navy text-white rounded-full text-[10px] font-bold tracking-widest uppercase">
              Alignment: {technique.subdomain}
            </span>
            <span className="text-xs text-gray-400 font-medium italic">
              Via {technique.source}
            </span>
          </div>

          <div className="space-y-12 mb-20">
            {technique.quote && (
              <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-hdkwa-gold pl-6">
                "{technique.quote}"
              </p>
            )}

            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Action Steps</h3>
              <ul className="space-y-6">
                {technique.actionSteps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-hdkwa-navy text-white text-[10px] flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-800 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </section>

            <ReflectionModule technique={technique} />
          </div>
        </div>

        <div className="col-span-5">
          <div className="sticky top-16 space-y-8">
            {/* VIDEO SECTION */}
            <div className="space-y-4">
               <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Technique Demonstration</h4>
               <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative group border border-gray-100">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${technique.videos.demo}?rel=0&modestbranding=1`}
                    title={technique.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
               </div>
               <p className="text-[11px] text-center text-gray-400 italic">Demo Breakdown by @DangRenBo</p>
            </div>

            {/* LITERATURE SECTION */}
            {technique.literature && (
              <div className="p-8 bg-apple-tile rounded-[32px] border border-gray-100/50">
                <h4 className="text-[10px] font-bold uppercase mb-6 text-gray-400 tracking-widest flex items-center gap-2">
                  <BookOpen className="w-3 h-3" /> Literature Deep Dive
                </h4>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-16 bg-hdkwa-navy rounded shadow-md flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold text-center p-1">
                    {technique.literature.book}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-hdkwa-navy">{technique.literature.book}</p>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      Reference Pages: <span className="font-semibold text-gray-700">{technique.literature.pages}</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* COACH NOTE PLACEHOLDER */}
            <div className="p-6 bg-hdkwa-gold/5 rounded-2xl border border-hdkwa-gold/10">
               <h4 className="text-[10px] font-bold uppercase mb-3 text-hdkwa-gold tracking-widest">Coach's Nuance</h4>
               <p className="text-xs text-gray-600 leading-relaxed italic">
                 "Watch for the 'Warm/Strict' balance. The goal is accountability, not a 'gotcha' moment. Keep your tone neutral and your posture open."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
