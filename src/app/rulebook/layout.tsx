import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Official Rulebook | Omnikon Hackathon 2026',
  description: 'Official rules, eligibility requirements, submission guidelines, evaluation criteria, and grounds for disqualification.',
};

export default function RulebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
