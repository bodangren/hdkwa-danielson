import { BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const BOOKS = [
  {
    title: "Teach Like A Champion 3.0",
    author: "Doug Lemov",
    description: "63 techniques that put students on the path to college. Focuses heavily on high-ratio engagement and classroom behavioral control.",
    contribution: "Mapped to Domain 3 (Instruction) and Domain 2 (Environment). Provides the core 'Action Steps' for classroom-ready habits.",
    color: "bg-hdkwa-navy text-white"
  },
  {
    title: "Visible Learning (The Sequel)",
    author: "John Hattie",
    description: "A synthesis of over 2,100 meta-analyses relating to achievement. Focuses on 'what works best' in schools based on evidence.",
    contribution: "Provides the research foundation for Domain 3d (Assessment) and Domain 1b (Knowledge of Students). Highlights high-impact factors like Retrieval Practice.",
    color: "bg-white border-gray-200 border"
  },
  {
    title: "The New Art and Science of Teaching",
    author: "Robert Marzano",
    description: "A framework for substantive change in instructional practice. Focuses on the cognitive outcomes of learning.",
    contribution: "Primary source for Domain 1c (Setting Instructional Outcomes) and high-level lesson design.",
    color: "bg-apple-tile text-hdkwa-navy"
  },
  {
    title: "The First Days of School",
    author: "Harry Wong",
    description: "The foundational guide to classroom management and establishing a culture of work and success from day one.",
    contribution: "Mapped to Domain 2c (Managing Classroom Procedures). Focuses on establishing routines that eliminate behavior issues.",
    color: "bg-hdkwa-gold text-white"
  }
];

export default function ReferencesPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="mb-20">
        <h1 className="heading-display text-6xl mb-6 text-hdkwa-navy">The Pedagogy Shelf.</h1>
        <p className="text-2xl text-gray-500 max-w-2xl leading-relaxed">
          Our curated selection of evidence-based instructional frameworks, fully cross-referenced with Danielson components.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {BOOKS.map((book) => (
          <div key={book.title} className="flex flex-col h-full group">
            <div className={`aspect-[3/4] rounded-2xl mb-8 flex items-center justify-center p-12 text-center shadow-xl transition-transform group-hover:-translate-y-4 ${book.color}`}>
              <div>
                <h3 className="font-bold text-2xl mb-4 leading-tight">{book.title}</h3>
                <p className={`text-xs uppercase tracking-widest font-bold ${book.title === 'Visible Learning (The Sequel)' ? 'text-gray-400' : 'opacity-60'}`}>
                  {book.author}
                </p>
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">The Framework</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{book.description}</p>
               </div>
               
               <div className="p-6 bg-apple-tile rounded-2xl border border-gray-100">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-hdkwa-navy mb-2">Danielson Contribution</h4>
                  <p className="text-xs text-gray-500 italic leading-relaxed">{book.contribution}</p>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-hdkwa-navy rounded-display text-white relative overflow-hidden">
         <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Professional Expertise</h2>
            <p className="text-gray-300 max-w-xl leading-relaxed">
              All technique demonstrations on this portal are performed by Uncle Dan on his YouTube channel, bridging these academic texts with practical, classroom-ready applications.
            </p>
            <a 
              href="https://www.youtube.com/@DangRenBo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-hdkwa-gold text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              Visit Channel <ExternalLink className="w-4 h-4" />
            </a>
         </div>
         <BookOpen className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
      </div>
    </div>
  );
}
