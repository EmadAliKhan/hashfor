// import { FeaturesSectionDemo } from "@/components/bentoGrid/page";
import FutureFinanace from "@/components/FutureOfFinance/page";
import HeroSection from "@/components/HeroSection/page";
import MarketPerformance from "@/components/marketPeformance/page";
import Portfolio from "@/components/portfolio/page";
// import SwapToken from "@/components/swapToken/page";
// import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        {/* <BackgroundBeams /> */}
        <HeroSection />
        <FutureFinanace />
        <MarketPerformance />
        {/* <SwapToken /> */}
        <Portfolio />
        {/* <FeaturesSectionDemo /> */}
      </div>
    </>
  );
}
