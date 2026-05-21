'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  Home, 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Menu,
  X
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const saved = localStorage.getItem('completed_techniques');
      if (saved) {
        try {
          const completed = JSON.parse(saved);
          setCompletedCount(Array.isArray(completed) ? completed.length : 0);
        } catch {
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

  const navLinks = (
    <div className="flex flex-col gap-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`flex min-h-11 items-center gap-3 rounded-r-lg border-l-4 px-4 py-2 text-sm font-medium transition-all ${
              isActive 
                ? 'border-hdkwa-navy bg-apple-tile text-hdkwa-navy' 
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );

  const progressCard = (
    <div className="rounded-xl border border-hdkwa-gold/20 bg-hdkwa-gold/10 p-4">
      <p className="mb-1 text-[10px] font-bold uppercase text-hdkwa-gold">Total Progress</p>
      <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
        <div 
          className="h-full bg-hdkwa-gold transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-xs font-medium">{completedCount} / {totalTechniques} Techniques</p>
    </div>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-gray-200 bg-white/95 px-5 py-3 backdrop-blur lg:hidden">
        <div className="relative flex w-full items-center">
          <Link href="/" className="min-w-0">
            <div className="relative h-12 w-40">
              <Image 
                src={logo} 
                alt="HDKWA Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-hdkwa-navy text-white shadow-md transition-colors hover:bg-hdkwa-navy/90"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {isOpen && (
          <div className="mt-4 space-y-5 border-t border-gray-100 pb-3 pt-4">
            {navLinks}
            {progressCard}
          </div>
        )}
      </header>

      <nav className="sticky top-0 z-10 hidden h-screen w-64 shrink-0 flex-col gap-8 border-r border-gray-200 bg-white p-8 lg:flex">
        <div className="mb-4">
          <Link href="/">
            <div className="relative h-16 w-full cursor-pointer">
              <Image 
                src={logo} 
                alt="HDKWA Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Danielson PD Portal
          </p>
        </div>
        
        {navLinks}

        <div className="mt-auto">
          {progressCard}
        </div>
      </nav>
    </>
  );
}
