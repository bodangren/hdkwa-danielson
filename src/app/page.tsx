import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="mb-20">
        <h1 className="heading-display text-6xl mb-6">Master Your Craft.</h1>
        <p className="text-2xl text-gray-500 max-w-2xl leading-relaxed">
          A specialized portal for HDKWA teachers to bridge Danielson Framework theory with classroom-ready techniques.
        </p>
      </header>

      <section className="grid grid-cols-2 gap-8">
        <Link 
          href="/domains/1" 
          className="bg-apple-tile p-12 rounded-display hover:scale-[1.02] transition-transform cursor-pointer group border border-transparent hover:border-gray-200"
        >
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Domain 1</span>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Planning & Prep</h2>
          <p className="text-gray-500">Mapping Content, Pedagogy, and Outcomes.</p>
          <div className="mt-8 flex items-center gap-2 text-apple-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Subdomains <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link 
          href="/domains/2" 
          className="bg-hdkwa-navy text-white p-12 rounded-display hover:scale-[1.02] transition-transform cursor-pointer group"
        >
          <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Domain 2</span>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Classroom Environment</h2>
          <p className="text-gray-300">Building Respect, Culture, and Management.</p>
          <div className="mt-8 flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Subdomains <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link 
          href="/domains/3" 
          className="bg-apple-tile p-12 rounded-display hover:scale-[1.02] transition-transform cursor-pointer group border border-transparent hover:border-gray-200"
        >
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Domain 3</span>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Instruction</h2>
          <p className="text-gray-500">The Heart of the Classroom Experience.</p>
          <div className="mt-8 flex items-center gap-2 text-apple-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Subdomains <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <Link 
          href="/domains/4" 
          className="bg-apple-tile p-12 rounded-display hover:scale-[1.02] transition-transform cursor-pointer group border border-transparent hover:border-gray-200"
        >
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Domain 4</span>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Professional Responsibilities</h2>
          <p className="text-gray-500">Reflecting, Growing, and Collaborating.</p>
          <div className="mt-8 flex items-center gap-2 text-apple-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Subdomains <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </section>
    </div>
  );
}
