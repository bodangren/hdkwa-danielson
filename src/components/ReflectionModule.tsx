'use client';

import { Technique } from '@/types';
import { ClipboardList, Award } from 'lucide-react';
import { useReflection } from '@/hooks/useReflection';

interface ReflectionModuleProps {
  technique: Technique;
}

export default function ReflectionModule({ technique }: ReflectionModuleProps) {
  const { reflection, updateReflection, isLoaded } = useReflection(technique.id);

  if (!isLoaded) return null;

  return (
    <div className="space-y-12">
      {/* PRE-IMPLEMENTATION */}
      <section className="p-8 border border-gray-100 rounded-[32px] bg-apple-tile animate-in fade-in slide-in-from-left-4 duration-500">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
          <ClipboardList className="w-4 h-4" /> Step 1: Pre-Implementation
        </h3>
        
        <div className="mb-8">
          <p className="text-sm font-semibold mb-3">To what extent do you already use this technique in class?</p>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => updateReflection({ beforeRating: num })}
                className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${
                  reflection?.beforeRating === num 
                    ? 'bg-hdkwa-gold border-hdkwa-gold text-white scale-110 shadow-md' 
                    : 'bg-white border-gray-200 text-gray-400 hover:border-hdkwa-gold'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="flex justify-between w-[212px] mt-2 text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
            <span>Never</span>
            <span>Expert</span>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">What is your goal for this implementation?</p>
          <input 
            type="text" 
            value={reflection?.beforeGoal || ''}
            onChange={(e) => updateReflection({ beforeGoal: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-hdkwa-gold focus:border-transparent transition-all" 
            placeholder="e.g. Try this with 10th Grade Period 4 physics..."
          />
        </div>
      </section>

      {/* POST-IMPLEMENTATION */}
      <section className="p-8 border border-gray-100 rounded-[32px] bg-white shadow-sm animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
        <h3 className="text-sm font-bold uppercase tracking-widest text-hdkwa-gold mb-6 flex items-center gap-2">
          <Award className="w-4 h-4" /> Step 2: Post-Implementation
        </h3>
        
        <div className="mb-8">
          <p className="text-sm font-semibold mb-3">Observed Impact on Student Engagement:</p>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => updateReflection({ afterRating: num })}
                className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${
                  reflection?.afterRating === num 
                    ? 'bg-hdkwa-gold border-hdkwa-gold text-white scale-110 shadow-md' 
                    : 'bg-white border-gray-200 text-gray-400 hover:border-hdkwa-gold'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Implementation Notes (Visible to HOD/IC):</p>
          <textarea 
            value={reflection?.afterNotes || ''}
            onChange={(e) => updateReflection({ afterNotes: e.target.value })}
            className="w-full bg-apple-tile border-transparent rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-hdkwa-gold h-32 transition-all" 
            placeholder="Describe what happened, student responses, and any self-corrections for next time..."
          />
          <p className="text-[10px] text-gray-400 mt-2 italic">Your notes are saved automatically to your local PD Report.</p>
        </div>
      </section>
    </div>
  );
}
