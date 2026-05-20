'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  Home, 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  ChevronRight 
} from 'lucide-react';

import Image from 'next/image';
import logo from '../../public/logo.png';

import { techniques } from '@/data/techniques';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Instructional Hub', href: '/domains', icon: LayoutDashboard },
  { name: 'My PD Report', href: '/report', icon: FileText },
  { name: 'References', href: '/references', icon: BookOpen },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const saved = localStorage.getItem('completed_techniques');
      if (saved) {
        try {
          const completed = JSON.parse(saved);
          setCompletedCount(Array.isArray(completed) ? completed.length : 0);
        } catch (e) {
          setCompletedCount(0);
        }
      }
    };

    updateProgress();
    window.addEventListener('storage_update', updateProgress);
    return () => window.removeEventListener('storage_update', updateProgress);
  }, []);

  const totalTechniques = techniques.length;
  const percentage = totalTechniques > 0 ? Math.round((completedCount / totalTechniques) * 100) : 0;

  return (
    <nav className="w-64 border-r border-gray-200 h-screen sticky top-0 p-8 flex flex-col gap-8 bg-white z-10">
      <div className="mb-4">
        <Link href="/">
          <div className="relative w-full h-16 cursor-pointer">
            <Image 
              src={logo} 
              alt="HDKWA Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-4 font-semibold">
          Danielson PD Portal
        </p>
      </div>
      
      <div className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-r-lg text-sm font-medium transition-all ${
                isActive 
                  ? 'text-hdkwa-navy border-l-4 border-hdkwa-navy bg-apple-tile' 
                  : 'text-gray-500 hover:text-gray-900 border-l-4 border-transparent'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto">
        <div className="bg-hdkwa-gold/10 p-4 rounded-xl border border-hdkwa-gold/20">
          <p className="text-[10px] font-bold text-hdkwa-gold uppercase mb-1">Total Progress</p>
          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-hdkwa-gold h-full transition-all duration-500 ease-out" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-xs mt-2 font-medium">{completedCount} / {totalTechniques} Techniques</p>
        </div>
      </div>
    </nav>
  );
}
