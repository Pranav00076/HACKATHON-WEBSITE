import { Bot, Cloud, LayoutDashboard, Layers, Shield, LucideIcon } from 'lucide-react';

export interface Track {
  id: string;
  title: string;
  icon: LucideIcon;
  tags: string[];
  desc: string;
  badge: string;
  award: string;
  examples: string[];
  featured?: boolean;
  problemStatement: string;
}

export const tracksData: Track[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    icon: LayoutDashboard,
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    desc: 'Create beautiful, accessible, and high-performance interfaces that deliver exceptional user experiences.',
    badge: 'Popular',
    award: 'Best Frontend Project',
    examples: ['Portfolio Builder', 'Design System Workspace', 'Interactive Dashboard'],
    featured: false,
    problemStatement: 'Modern web applications require hyper-responsive interfaces, intuitive micro-interactions, and accessible UI patterns that delight users while keeping LCP/INP performance at peak speeds.'
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    icon: Layers,
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    desc: 'Build complete web applications with scalable backends, clean architecture, and seamless user flows.',
    badge: 'Intermediate',
    award: 'Best Full Stack Project',
    examples: ['Hospital Management', 'Event Ticketing Platform', 'Real-time Collaboration App'],
    featured: false,
    problemStatement: 'Integrate robust database schemas, authorization mechanisms, real-time data sync, and resilient REST/GraphQL APIs into a complete production-grade application.'
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    desc: 'Deploy scalable cloud-native applications using containers, CI/CD, serverless platforms, and observability tools.',
    badge: 'Advanced',
    award: 'Best Cloud Architecture',
    examples: ['Kubernetes Dashboard', 'Automated CI/CD Pipeline', 'Serverless Monitoring Tool'],
    featured: false,
    problemStatement: 'Design infrastructure workflows that automate build, test, and release pipelines while ensuring high availability, observability, and container orchestration.'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Bot,
    tags: ['Python', 'LLMs', 'Agents', 'RAG'],
    desc: 'Develop intelligent applications powered by LLMs, automation, agents, computer vision, or predictive models.',
    badge: 'Advanced',
    award: 'Best AI Innovation',
    examples: ['Resume Analyzer', 'AI Study Assistant', 'Autonomous Coding Agent'],
    featured: true,
    problemStatement: 'Harness state-of-the-art AI models, multi-agent frameworks, and vector embeddings to solve complex real-world challenges through intelligent workflow automation.'
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    icon: Shield,
    tags: ['OAuth', 'JWT', 'Encryption', 'Threat Modeling'],
    desc: 'Design secure systems, authentication flows, privacy-first applications, and resilient infrastructure.',
    badge: 'Advanced',
    award: 'Best Security Solution',
    examples: ['Password Manager', 'Secure File Vault', 'Zero-Trust Auth Gateway'],
    featured: false,
    problemStatement: 'Engineer defense-in-depth mechanisms, end-to-end encryption protocols, and auditing systems to protect user data against modern security threats.'
  },
];
