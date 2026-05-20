'use client';

import { useState, useEffect } from 'react';
import { Reflection } from '@/types';

export function useReflection(techniqueId: string) {
  const [reflection, setReflection] = useState<Reflection | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`reflection_${techniqueId}`);
    if (saved) {
      try {
        setReflection(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse reflection', e);
      }
    }
    setIsLoaded(true);
  }, [techniqueId]);

  const updateReflection = (updates: Partial<Reflection>) => {
    const newReflection: Reflection = reflection 
      ? { ...reflection, ...updates, techniqueId, updatedAt: new Date().toISOString() }
      : { 
          techniqueId, 
          beforeRating: 0, 
          beforeGoal: '', 
          afterRating: 0, 
          afterNotes: '', 
          updatedAt: new Date().toISOString(),
          ...updates 
        };
    
    setReflection(newReflection);
    localStorage.setItem(`reflection_${techniqueId}`, JSON.stringify(newReflection));
    
    // Also update a global registry of completed techniques for the progress bar
    updateGlobalProgress(techniqueId, !!(newReflection.beforeRating && newReflection.afterRating));
  };

  return { reflection, updateReflection, isLoaded };
}

function updateGlobalProgress(id: string, isCompleted: boolean) {
  const saved = localStorage.getItem('completed_techniques');
  let completed: string[] = saved ? JSON.parse(saved) : [];
  
  if (isCompleted && !completed.includes(id)) {
    completed.push(id);
  } else if (!isCompleted && completed.includes(id)) {
    completed = completed.filter(item => item !== id);
  }
  
  localStorage.setItem('completed_techniques', JSON.stringify(completed));
  
  // Dispatch event so Sidebar can update
  window.dispatchEvent(new Event('storage_update'));
}
