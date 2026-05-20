'use client';

import { useState, useEffect } from 'react';
import { Technique } from '@/types';
import { CheckCircle2, Circle, Award } from 'lucide-react';
import Link from 'next/link';

interface TechniqueCardProps {
  technique: Technique;
}

export default function TechniqueCard({ technique }: TechniqueCardProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const update = () => {
      const saved = localStorage.getItem('completed_techniques');
      if (saved) {
        const completed = JSON.parse(saved);
        setIsCompleted(completed.includes(technique.id));
      }
    };
    update();
    window.addEventListener('storage_update', update);
    return () => window.removeEventListener('storage_update', update);
  }, [technique.id]);

  return (
    <Link 
      href={`/strategy/${technique.id}`}
      className="p-6 border border-gray-100 rounded-2xl hover:bg-apple-tile transition-all cursor-pointer group flex flex-col h-full bg-white hover:shadow-sm"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2">
          <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
            {technique.source}
          </span>
          {technique.highReward && (
            <span className="px-2 py-0.5 bg-hdkwa-gold/10 rounded text-[10px] font-bold text-hdkwa-gold flex items-center gap-1 uppercase tracking-tighter">
              <Award className="w-2.5 h-2.5" /> High Reward
            </span>
          )}
        </div>
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-hdkwa-gold fill-hdkwa-gold/10" />
        ) : (
          <Circle className="w-5 h-5 text-gray-200" />
        )}
      </div>
      
      <h4 className="font-semibold mb-2 group-hover:text-apple-blue transition-colors">
        {technique.title}
      </h4>
      <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
        {technique.description}
      </p>
      
      <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-bold text-hdkwa-navy uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        {isCompleted ? 'Review Progress' : 'Start Training'}
      </div>
    </Link>
  );
}
