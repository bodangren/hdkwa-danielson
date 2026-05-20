'use client';

import { useState, useEffect } from 'react';
import { techniques } from '@/data/techniques';
import { Reflection, Technique } from '@/types';
import { Download, FileText, Printer, CheckCircle2, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';

export default function ReportPage() {
  const [reflections, setReflections] = useState<(Reflection & { technique: Technique })[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const allReflections: (Reflection & { technique: Technique })[] = [];
    
    techniques.forEach((tech) => {
      const saved = localStorage.getItem(`reflection_${tech.id}`);
      if (saved) {
        try {
          const reflectionData = JSON.parse(saved);
          if (reflectionData.afterNotes || reflectionData.beforeGoal) {
            allReflections.push({
              ...reflectionData,
              technique: tech
            });
          }
        } catch (e) {
          console.error(`Failed to parse reflection for ${tech.id}`, e);
        }
      }
    });

    // Sort by most recent update
    allReflections.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    
    setReflections(allReflections);
    setIsLoaded(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!isLoaded) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-4xl mx-auto pb-20">
      <header className="flex justify-between items-start mb-16 no-print">
        <div>
          <h1 className="heading-display text-5xl mb-4 text-hdkwa-navy">My PD Implementation Report</h1>
          <p className="text-xl text-gray-500">A professional summary of your instructional growth.</p>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-hdkwa-navy text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-hdkwa-navy/90 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          <Printer className="w-5 h-5" /> Print / Export PDF
        </button>
      </header>

      {reflections.length > 0 ? (
        <div className="space-y-12 bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm print:p-0 print:border-0 print:shadow-none">
          {/* LOGO AND HEADER FOR PRINT */}
          <div className="hidden print:flex justify-between items-center mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-4">
               <div className="relative w-48 h-12">
                  <Image src={logo} alt="HDKWA Logo" fill className="object-contain object-left" />
               </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-hdkwa-navy">Professional Development Office</p>
              <p className="text-xs text-gray-400 mt-1">Implementation Progress Artifact</p>
            </div>
          </div>

          <div className="space-y-16">
            {reflections.map((item) => (
              <div key={item.techniqueId} className="page-break-inside-avoid">
                <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-hdkwa-navy text-white flex items-center justify-center font-bold text-xs">
                      {item.technique.subdomain}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-hdkwa-navy">{item.technique.title}</h3>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">{item.technique.alignment}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end text-hdkwa-gold mb-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-[10px] font-bold">
                        {new Date(item.updatedAt).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="p-6 bg-apple-tile rounded-3xl">
                    <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-4 tracking-widest">Pre-Implementation</h4>
                    <div className="flex items-center gap-3 mb-4">
                       <span className="text-xs font-bold">Self-Rating:</span>
                       <div className="flex gap-1">
                         {[1, 2, 3, 4, 5].map(n => (
                           <div key={n} className={`w-2 h-2 rounded-full ${n <= item.beforeRating ? 'bg-hdkwa-navy' : 'bg-gray-200'}`}></div>
                         ))}
                       </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed italic">
                      "{item.beforeGoal || 'No goal specified.'}"
                    </p>
                  </div>

                  <div className="p-6 border border-hdkwa-gold/20 rounded-3xl bg-hdkwa-gold/5">
                    <h4 className="text-[10px] font-bold uppercase text-hdkwa-gold mb-4 tracking-widest">Post-Implementation</h4>
                    <div className="flex items-center gap-3 mb-4">
                       <span className="text-xs font-bold">Impact Rating:</span>
                       <div className="flex gap-1">
                         {[1, 2, 3, 4, 5].map(n => (
                           <div key={n} className={`w-2 h-2 rounded-full ${n <= item.afterRating ? 'bg-hdkwa-gold' : 'bg-gray-200'}`}></div>
                         ))}
                       </div>
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">
                      {item.afterNotes || 'No reflection notes provided.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Artifact generated via HDKWA Danielson PD Portal • Authorized for Internal Professional Growth Documentation
            </p>
          </div>
        </div>
      ) : (
        <div className="p-20 bg-apple-tile rounded-[40px] border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
          <FileText className="w-16 h-16 text-gray-200 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-400">Your report is empty.</h3>
          <p className="text-gray-400 mt-2 max-w-sm">
            Start implementing techniques in the Instructional Hub and record your reflections to generate your growth report.
          </p>
          <Link 
            href="/domains/3"
            className="mt-8 bg-hdkwa-navy text-white px-8 py-3 rounded-full text-sm font-bold shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            Go to Instructional Hub
          </Link>
        </div>
      )}
    </div>
  );
}
