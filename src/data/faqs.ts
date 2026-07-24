export interface FAQItem {
  category: 'General' | 'Eligibility' | 'Submissions' | 'Prizes & Judging';
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Omnikon National Hackathon 2026?',
    answer: 'Omnikon is a national tech hackathon open to developers, designers, and innovators across India. It offers a month-long arena to build, refine, and pitch high-impact Web, AI, Cloud, and Security projects.'
  },
  {
    category: 'General',
    question: 'Is participation completely free?',
    answer: 'Yes! Participation in Omnikon 2026 is 100% free of charge. There are no registration fees or hidden costs.'
  },
  {
    category: 'Eligibility',
    question: 'Who is eligible to participate?',
    answer: 'Students from any college, university, bootcamp, as well as self-taught developers and working professionals are welcome to participate.'
  },
  {
    category: 'Eligibility',
    question: 'What is the allowed team size?',
    answer: 'You can participate solo or in teams of up to 4 members. We encourage multi-disciplinary teams (e.g., frontend developers + backend + UI designers).'
  },
  {
    category: 'Submissions',
    question: 'What do I need to submit at the end?',
    answer: 'Submissions require a public GitHub repository with clear setup documentation, a live hosted project URL or demo video link, and a brief description highlighting your track and key features.'
  },
  {
    category: 'Submissions',
    question: 'Can I submit a pre-existing project?',
    answer: 'No. All code and designs submitted must be built during the hackathon timeline. Utilizing open-source libraries, frameworks, and packages is fully allowed.'
  },
  {
    category: 'Prizes & Judging',
    question: 'How will projects be judged?',
    answer: 'Projects will be evaluated across 5 weighted criteria: Innovation (25%), Technical Execution (25%), UI/UX (20%), Functionality (20%), and Presentation (10%).'
  },
  {
    category: 'Prizes & Judging',
    question: 'When will the winners be announced?',
    answer: 'Grand winners will be announced during the Live Finale stream on September 5, 2026, followed by prize distribution and certificate issuance.'
  }
];
