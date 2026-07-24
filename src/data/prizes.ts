import { Award, Medal, Trophy, LucideIcon } from 'lucide-react';

export interface Prize {
  title: string;
  place: string;
  icon: LucideIcon;
  numericAmount: number;
  amountStr: string;
  accent: string;
  perks: string[];
  featured?: boolean;
  revealOrder: number;
}

export const prizesData: Prize[] = [
  {
    title: 'Champion',
    place: '1st Place',
    icon: Trophy,
    numericAmount: 5000,
    amountStr: '₹5,000',
    accent: '#ffffff',
    perks: ['Winner showcase on homepage', 'Official Certificate of Excellence', '1-on-1 mentorship & judge feedback', 'Omnikon Champion Swag Bag'],
    featured: true,
    revealOrder: 3,
  },
  {
    title: 'Runner Up',
    place: '2nd Place',
    icon: Medal,
    numericAmount: 3000,
    amountStr: '₹3,000',
    accent: '#bdbdbd',
    perks: ['Official Runner Up Certificate', 'Community spotlight', 'Detailed evaluation breakdown', 'Omnikon Hacker Pack'],
    revealOrder: 2,
  },
  {
    title: 'Finalist',
    place: '3rd Place',
    icon: Award,
    numericAmount: 2000,
    amountStr: '₹2,000',
    accent: '#ff1e1e',
    perks: ['Official Finalist Certificate', 'Discord honor role badge', 'Mentorship feedback session'],
    revealOrder: 1,
  },
];
