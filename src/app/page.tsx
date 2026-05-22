import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="mb-14 lg:mb-20">
        <h1 className="heading-display mb-6 text-4xl text-hdkwa-navy sm:text-6xl">Master Your Craft.</h1>
        <p className="max-w-2xl text-xl leading-relaxed text-gray-500 sm:text-2xl">
          A specialized portal for HDKWA teachers to bridge Danielson Framework theory with practical instructional routines.
        </p>
      </header>

      <section className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-20 lg:gap-12">
        <div className="rounded-[24px] border border-gray-100 bg-apple-tile p-6 sm:p-8 lg:rounded-display">
          <h3 className="text-sm font-bold uppercase tracking-widest text-hdkwa-navy mb-4">Teacher Workflow</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="font-bold text-hdkwa-gold">1.</span>
              <span>Identify a growth area from your last observation.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-hdkwa-gold">2.</span>
              <span>
                Select a technique and record your <strong>Pre-Implementation</strong> goal.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-hdkwa-gold">3.</span>
              <span>
                Trial the technique in your setting and record your <strong>Reflection</strong>.
              </span>
            </li>
          </ul>
        </div>
        <div className="rounded-[24px] bg-hdkwa-navy p-6 text-white shadow-xl sm:p-8 lg:rounded-display">
          <h3 className="text-sm font-bold uppercase tracking-widest text-hdkwa-gold mb-4">Coach Workflow</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-3">
              <span className="font-bold text-hdkwa-gold">1.</span>
              <span>Direct teachers to specific components for targeted growth.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-hdkwa-gold">2.</span>
              <span>Use the techniques as a common language for feedback.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-hdkwa-gold">3.</span>
              <span>Review the PD Implementation Report during check-ins.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        <Link 
          href="/domains/1" 
          className="group cursor-pointer rounded-[24px] border border-transparent bg-apple-tile p-7 transition-transform hover:scale-[1.02] hover:border-gray-200 sm:p-12 lg:rounded-display"
        >
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Domain 1</span>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Planning and Preparation</h2>
          <p className="text-gray-500">Mapping Content, Pedagogy, and Outcomes.</p>
          <div className="mt-8 flex items-center gap-2 text-apple-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Subdomains <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link 
          href="/domains/2" 
          className="group cursor-pointer rounded-[24px] bg-hdkwa-navy p-7 text-white transition-transform hover:scale-[1.02] sm:p-12 lg:rounded-display"
        >
          <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Domain 2</span>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Learning Environments</h2>
          <p className="text-gray-300">Creating respectful, purposeful, and well-organized learning spaces.</p>
          <div className="mt-8 flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Subdomains <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link 
          href="/domains/3" 
          className="group cursor-pointer rounded-[24px] border border-transparent bg-apple-tile p-7 transition-transform hover:scale-[1.02] hover:border-gray-200 sm:p-12 lg:rounded-display"
        >
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Domain 3</span>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Learning Experiences</h2>
          <p className="text-gray-500">Communicating purpose, engaging students, and responding in real time.</p>
          <div className="mt-8 flex items-center gap-2 text-apple-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Subdomains <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link 
          href="/domains/4" 
          className="group cursor-pointer rounded-[24px] border border-transparent bg-apple-tile p-7 transition-transform hover:scale-[1.02] hover:border-gray-200 sm:p-12 lg:rounded-display"
        >
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Domain 4</span>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Principled Teaching</h2>
          <p className="text-gray-500">Reflecting, documenting, collaborating, and acting in service of students.</p>
          <div className="mt-8 flex items-center gap-2 text-apple-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Subdomains <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </section>
    </div>
  );
}
