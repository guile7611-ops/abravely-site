import { SentinelNavbar } from "@/components/layout/sentinel-navbar";
import { Footer } from "@/components/layout/footer";
import { SentinelHero } from "@/components/sections/sentinel-hero";
import { ProofSection } from "@/components/sections/proof-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { SuggestionSection } from "@/components/sections/suggestion-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500/30">
      <SentinelNavbar />
      <SentinelHero />
      <CapabilitiesSection />
      <ProofSection />
      <PricingSection />
      <SuggestionSection />
      <Footer />
    </main>
  );
}
