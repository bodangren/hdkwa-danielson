import { CheckCircle2, Circle } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default async function DomainPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <nav className="mb-12 flex gap-4 text-sm font-medium text-gray-400">
        <Link href="/" className="hover:text-black transition-colors">Danielson PD</Link>
        <span>/</span>
        <span className="text-black">Domain {id} Hub</span>
      </nav>

      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="heading-display text-5xl mb-4">Domain {id} Hub</h1>
          <p className="text-xl text-gray-500">Select a component to view proven techniques.</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-semibold text-hdkwa-gold mb-1">0%</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Mastery Level</p>
        </div>
      </div>

      <div className="space-y-12">
        <div className="p-12 bg-apple-tile rounded-display border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 font-medium">Technique data for Domain {id} is being curated.</p>
          <p className="text-sm text-gray-400 mt-2">Check back soon for actionable modules.</p>
        </div>
      </div>
    </div>
  );
}
