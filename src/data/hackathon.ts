export interface StatItem {
  label: string;
  value: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PartnerItem {
  name: string;
  role: string;
  badge: string;
  desc: string;
  logoUrl?: string;
  websiteUrl: string;
}

export const HACKATHON_CONFIG = {
  name: "Omnikon",
  tagline: "Build The Impossible",
  subTagline: "🔴 REGISTRATIONS ARE LIVE ON UNSTOP",
  registrationStatus: "LIVE",
  description: "Turn less than 1 month of coding into a product that matters. Registrations are officially open on Unstop. If you're a builder, designer, or creator with ideas, this is your arena.",
  registrationUrl: "https://unstop.com/p/omnikon-national-hackathon-2026-omnikon-1715716",
  dates: {
    start: "Aug 15, 2026",
    end: "Sep 5, 2026",
    targetIso: "2026-08-15T23:59:59+05:30",
    display: "Aug 15 - Sep 5, 2026",
  },
  location: "Online on Unstop",
  organization: "Omnikon Tech Community",
  partners: [
    {
      name: "Unstop",
      role: "Platform & Hosting Partner",
      badge: "Official Host",
      desc: "Powered and hosted on Unstop — India's leading platform for competitions, hackathons, and career opportunities.",
      websiteUrl: "https://unstop.com/p/omnikon-national-hackathon-2026-omnikon-1715716"
    },
    {
      name: "Upstox (Uplearn)",
      role: "Knowledge Partner",
      badge: "Knowledge Partner",
      desc: "Empowering young developers with financial literacy, tech insights, and career learning resources.",
      websiteUrl: "https://upstox.com"
    }
  ] as PartnerItem[],
  stats: [
    { label: "Colleges", value: "50+" },
    { label: "Prize pool", value: "₹10K" },
    { label: "Participants", value: "500+" },
    { label: "Tracks", value: "5" },
  ] as StatItem[],
  socials: [
    { name: "Discord", url: "https://discord.gg/yWtjK2Tb8T", icon: "discord" },
    { name: "Twitter", url: "https://x.com/OmnikonOrg", icon: "twitter" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/omnikon-org", icon: "linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/omnikonorg", icon: "instagram" },
  ] as SocialLink[],
};
