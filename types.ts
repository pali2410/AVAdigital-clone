export interface Project {
  id: number;
  name: string;
  category: string;
  year: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export enum Section {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  TEAM = 'TEAM',
  PROGRAM = 'PROGRAM',
  REVIEWS = 'REVIEWS',
  CONTACT = 'CONTACT'
}