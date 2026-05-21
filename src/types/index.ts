export interface Technique {
  id: string;
  title: string;
  subdomain: string; // e.g., "3b"
  domain: number; // e.g., 3
  source: string; // e.g., "TLAC 3.0"
  alignment: string; // e.g., "3b: Using Questioning"
  description: string;
  detailedSummary?: string;
  quote?: string;
  actionSteps: string[];
  videos: {
    demo: string; // YouTube ID or URL
    deepDive?: string;
    curated?: string[];
  };
  literature?: {
    book: string;
    pages: string;
  };
  highReward?: boolean;
  coaching?: {
    implementationGuide?: string;
    videoSummary?: string;
    teacherActions?: string[];
    leaderLookFors?: string[];
    commonMistakes?: string[];
  };
}

export interface Reflection {
  techniqueId: string;
  beforeRating: number;
  beforeGoal: string;
  afterRating: number;
  afterNotes: string;
  updatedAt: string;
}
