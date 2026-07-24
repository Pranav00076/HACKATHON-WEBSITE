export interface TimelinePhase {
  id: string;
  date: string;
  title: string;
  desc: string;
  details?: string[];
  status?: 'completed' | 'active' | 'upcoming';
}

export const timelinePhases: TimelinePhase[] = [
  { 
    id: '01', 
    date: '10 JUL 2026', 
    title: 'Registration Open', 
    desc: 'Official launch. Form your team and secure your arena spot on Unstop.',
    details: ['Registration closes on August 15', 'Solo and team entries up to 4 members permitted', 'Access to discord community channels'],
    status: 'completed'
  },
  { 
    id: '02', 
    date: '15 AUG 2026', 
    title: 'Problem Statements & Track Reveal', 
    desc: 'Hackathon officially begins. All 5 Innovation Track problem statements unlocked.',
    details: ['Opening kickoff livestream', 'Mentor office hours announced', 'Architecture planning and setup'],
    status: 'active'
  },
  { 
    id: '03', 
    date: '20 AUG 2026', 
    title: 'Documentation (PDF) Milestone', 
    desc: 'Submit a detailed Phase 1 project proposal & architecture outline.',
    details: ['Architecture diagrams', 'Technology stack selection', 'Initial UX wireframes'],
    status: 'upcoming'
  },
  { 
    id: '04', 
    date: '27 AUG 2026', 
    title: 'Mid-Way Presentation (PPT)', 
    desc: 'Project proposal presentation for mentor review and preliminary feedback.',
    details: ['Mid-point progress check', 'Live QA session with mentors', 'Refining deliverables'],
    status: 'upcoming'
  },
  { 
    id: '05', 
    date: '01 SEP 2026', 
    title: 'Final Code & Prototype Submission', 
    desc: 'Submit full GitHub repository, working demo URL, and 2-minute pitch video.',
    details: ['Strict submission deadline at 11:59 PM IST', 'Public repository lock', 'Evaluation by judging panel'],
    status: 'upcoming'
  },
  { 
    id: '06', 
    date: '05 SEP 2026', 
    title: 'Grand Finale & Results Announcement', 
    desc: 'Winners announced on live stream; prize distribution and certificates issued.',
    details: ['Live project showcases', 'Special track awards', 'NFT/Digital Certificates issued to all valid submissions'],
    status: 'upcoming'
  }
];
