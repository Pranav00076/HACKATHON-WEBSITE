export interface StatItem {
  label: string;
  value: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const HACKATHON_CONFIG = {
  name: "Omnikon",
  tagline: "Build The Impossible",
  subTagline: "National Tech Hackathon 2026",
  description: "Turn less than 1 month of coding into a product that matters. If you're a builder, designer, or creator with ideas, this is your arena.",
  registrationUrl: "https://unstop.com/p/omnikon-national-hackathon-2026-omnikon-1715716",
  dates: {
    start: "Aug 15, 2026",
    end: "Sep 5, 2026",
    targetIso: "2026-08-15T23:59:59+05:30",
    display: "Aug 15 - Sep 5, 2026",
  },
  location: "Online on Unstop",
  organization: "Omnikon Tech Community",
  stats: [
    { label: "Colleges", value: "50+" },
    { label: "Prize pool", value: "₹10K" },
    { label: "Participants", value: "500+" },
    { label: "Tracks", value: "5" },
  ] as StatItem[],
  socials: [
    { name: "Discord", url: "https://discord.gg", icon: "discord" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  ] as SocialLink[],
};
