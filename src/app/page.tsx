import { SentinelNavbar } from "@/components/layout/sentinel-navbar";
import { Footer } from "@/components/layout/footer";
import { SentinelHero } from "@/components/sections/sentinel-hero";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ProofSection } from "@/components/sections/proof-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { SuggestionSection } from "@/components/sections/suggestion-section";
import { CoreFeatureSection } from "@/components/sections/core-feature-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500/30">
      <SentinelNavbar />
      <SentinelHero />
      <CoreFeatureSection />
      <CapabilitiesSection />
      <ProblemSection />
      <ShowcaseSection />
      <DifferentialsSection />
      <ProofSection />
      <PricingSection />
      <SuggestionSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
