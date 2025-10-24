import Hero from "../components/sections/Hero";
import TrustBadges from "../components/sections/TrustBadges";
import MetricsStrip from "../components/sections/MetricsStrip";
import FeatureGrid from "../components/sections/FeatureGrid";
import Testimonials from "../components/sections/Testimonials";
import PricingTable from "../components/sections/PricingTable";
import FAQ from "../components/sections/FAQ";
import FaqSchema from "../components/sections/FaqSchema";
import NewsletterBar from "../components/sections/NewsletterBar";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <MetricsStrip />
      <FeatureGrid />
      <Testimonials />
      <PricingTable />
      <FAQ />
      <FaqSchema />
      <NewsletterBar />
      <CTASection />
    </>
  );
}
