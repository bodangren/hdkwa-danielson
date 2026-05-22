import { techniques } from '@/data/techniques';
import { BookOpen, ChevronRight, Lightbulb } from 'lucide-react';
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

  const usageHeading =
    technique.domain === 1
      ? 'Planning Notes'
      : technique.domain === 4
        ? 'Professional Practice'
        : technique.domain === 2
          ? 'Classroom Use'
          : 'Lesson Use';

  const usageCopy =
    technique.domain === 1
      ? 'Use this while planning so the task, the sequence, and the assessment support one another before the lesson starts.'
      : technique.domain === 4
        ? 'Use this as part of your professional routine: reflection, documentation, family communication, collaboration, or advocacy.'
        : technique.domain === 2
          ? 'Use this while the class is running so routines, expectations, and responses stay clear and consistent.'
          : 'Use this during instruction so the teacher move and the student response stay aligned in real time.';

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <nav className="mb-8 flex flex-wrap items-center gap-3 text-sm font-medium text-gray-400 lg:mb-12">
        <Link href={`/domains/${technique.domain}`} className="hover:text-black transition-colors">
          Domain {technique.domain}: Hub
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-black">{technique.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-12 xl:gap-16">
        <div className="xl:col-span-7">
          <h1 className="heading-display mb-4 text-4xl leading-tight text-hdkwa-navy sm:text-5xl">{technique.title}</h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-hdkwa-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              Alignment: {technique.subdomain}
            </span>
            <span className="text-xs text-gray-400 font-medium italic">
              Via {technique.source}
            </span>
          </div>

          <div className="space-y-12 mb-20">
            <section>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">Action Steps</h3>
              <ul className="mb-10 space-y-6">
                {technique.actionSteps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-hdkwa-navy text-[10px] text-white shadow-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-800 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>

              {technique.detailedSummary && (
                <div className="bg-white border border-gray-100 p-8 rounded-[24px] shadow-sm">
                  <h4 className="text-xs font-bold uppercase text-hdkwa-navy mb-4 tracking-widest">Why this works</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {technique.detailedSummary}
                  </p>
                </div>
              )}
            </section>

            <section className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-hdkwa-navy">
                <Lightbulb className="h-4 w-4 text-hdkwa-gold" /> {usageHeading}
              </h3>
              <div className="space-y-4 text-sm leading-7 text-gray-600">
                <p>{usageCopy}</p>
                <p>
                  Keep the sequence tight: name the expectation, carry out the step, and watch for the student response the technique is designed to produce.
                </p>
                <p>
                  If the lesson has a literature source, use that as the rationale; if it has a video, treat the video as a model for pacing, language, and timing.
                </p>
              </div>
            </section>

            <ReflectionModule technique={technique} />
          </div>
        </div>

        <div className="xl:col-span-5">
          <div className="space-y-8 xl:sticky xl:top-16">
            {/* VIDEO SECTION */}
            <div className="space-y-6">
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
               
               {technique.videos.curated && technique.videos.curated.length > 0 && (
                 <div className="space-y-3 mt-8">
                    <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Additional Examples</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {technique.videos.curated.map((videoId, idx) => (
                        <div key={idx} className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                           <iframe 
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                              title={`${technique.title} Example ${idx + 1}`}
                              allowFullScreen
                            ></iframe>
                        </div>
                      ))}
                    </div>
                 </div>
               )}
               <p className="text-[11px] text-center text-gray-400 italic">Use the video to study the technique&apos;s timing, student response, and teacher language.</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
