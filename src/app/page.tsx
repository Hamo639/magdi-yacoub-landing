
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FoundationSection } from "@/components/sections/FoundationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { LegacySection } from "@/components/sections/LegacySection";

export default function Home() {
  return (
    <>

      <main>
      <HeroSection/>
         <AboutSection />
         <AchievementsSection/>
         <JourneySection/>
         <FoundationSection/>
         <LegacySection/>
         <CTASection/>
        
      </main>
    </>
  );
}