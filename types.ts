export interface TeamMember {
  id: string;
  name: string;
  role: 'PI' | 'Co-PI' | 'Researcher' | 'Intern';
  institution: string;
  bio?: string;
  imageUrl?: string;
}

export interface JobOpportunity {
  id: string;
  title: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  deadline: string;
  description: string;
  location: string;
}

export interface ResearchOutput {
  id: string;
  title: string;
  category: 'Policy Brief' | 'Field Data' | 'Publication' | 'EAMI Index';
  date: string;
  summary: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Event' | 'Blog' | 'Gallery';
  excerpt: string;
  imageUrl?: string;
}