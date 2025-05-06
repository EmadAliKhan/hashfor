import FutureFinanace from "@/components/FutureOfFinance/page";
import HeroSection from "@/components/HeroSection/page";
import MarketPerformance from "@/components/marketPeformance/page";
import Portfolio from "@/components/portfolio/page";
import SwapToken from "@/components/swapToken/page";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <HeroSection />
        <FutureFinanace />
        <MarketPerformance />
        <SwapToken />
        <Portfolio />
      </div>
    </>
  );
}
