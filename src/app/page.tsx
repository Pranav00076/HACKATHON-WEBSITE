import Hero from "@/components/Hero";
import AboutTerminal from "@/components/AboutTerminal";
import Tracks from "@/components/Tracks";
import PrizePool from "@/components/PrizePool";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import DiscordBanner from "@/components/DiscordBanner";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <AboutTerminal />
      <Tracks />
      <PrizePool />
      <Timeline />
      <Sponsors />
      <DiscordBanner />
      <FinalCTA />
    </main>
  );
}
