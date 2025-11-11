// Defines the possible tones for the cover letter.
export type Tone = 'Professional' | 'Enthusiastic' | 'Formal' | 'Confident' | 'Friendly';

// Defines the structure for the form data used to generate the cover letter.
export interface FormData {
  jobDescription: string;
  userName: string;
  contactInfo: string;
  companyName: string;
  resumeHighlights: string;
  tone: Tone;
}

// Defines the structure for a cover letter template in the gallery.
export interface CoverLetterTemplate {
  id: string;
  title: string;
  category: 'Software Development' | 'Marketing & Sales' | 'Creative & Design' | 'Student & New Grad' | 'Career Change' | 'Professional & Corporate' | 'Healthcare';
  // Below fields map to FormData
  jobDescription: string;
  companyName: string;
  resumeHighlights: string;
  tone: Tone;
}
