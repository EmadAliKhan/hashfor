import React from "react";
import { LuCoins } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BackgroundBeams } from "../ui/background-beams";
import GlobeCanvas from "../globeCanvas/page";
import NetworkVisual from "../networkVisual/page";

// const HeroSection = () => {
//   return (
    
//     <div className="flex flex-wrap min-h-screen w-full text-white mt-5">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 px-10 flex items-center">
//         <div>
//           <h1 className="gold-text text-5xl md:text-6xl font-bold leading-tight">
//             Next Generation DeFi Platform
//           </h1>
//           <p className="text-xl text-slate-300 pt-4">
//             Trade, earn, and grow your digital assets with lightning-fast
//             transactions and the lowest fees in the industry.
//           </p>

//           <div className="flex items-center gap-6 mt-6">
//             <button className="flex items-center gap-2 rounded-full gold-gradient-btn px-5 py-2 text-black font-medium shadow hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out">
//               Launch App
//             </button>
//             <button className="flex items-center gap-2 rounded-full border border-yellow-400 bg-black px-5 py-2 gold-text font-medium hover:text-white hover:-translate-y-1 transition duration-200 ease-in-out">
//               Learn More
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-9 mt-6">
//             <div className="flex items-center gap-4">
//               <div className="flex items-center justify-center w-15 h-15 rounded-full bg-yellow-900/30">
//                 <LuCoins className="text-yellow-400 text-3xl" />
//               </div>
//               <div>
//                 <h3 className="gold-text text-2xl font-bold">$2.5B+</h3>
//                 <p className="text-gray-400 text-md">Total Value Locked</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center justify-center w-15 h-15 rounded-full bg-yellow-900/30">
//                 <FaArrowTrendUp className="text-yellow-400 text-3xl" />
//               </div>
//               <div>
//                 <h3 className="gold-text text-2xl font-bold">$2M+</h3>
//                 <p className="text-gray-400 text-md">Active Users</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-10">
//         <div className="w-full max-w-md h-[400px]">
//           <GlobeCanvas />
//         </div>
//       </div>
//     </div>
//   );
// };
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full text-white px-4 sm:px-6  md:px-10 py-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-16 md:mt-0">

        <div className="max-w-xl">
          <h1 className="gold-text text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Next Generation DeFi Platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 pt-4">
            Trade, earn, and grow your digital assets with lightning-fast
            transactions and the lowest fees in the industry.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="rounded-full gold-gradient-btn px-6 py-3 text-black font-medium shadow hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out">
              Launch App
            </button>
            <button className="rounded-full border border-yellow-400 bg-black px-6 py-3 gold-text font-medium hover:text-white hover:-translate-y-1 transition duration-200 ease-in-out">
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-yellow-900/30">
                <LuCoins className="text-yellow-400 text-2xl sm:text-3xl" />
              </div>
              <div>
                <h3 className="gold-text text-xl sm:text-2xl font-bold">$2.5B+</h3>
                <p className="text-gray-400 text-sm sm:text-md">Total Value Locked</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-yellow-900/30">
                <FaArrowTrendUp className="text-yellow-400 text-2xl sm:text-3xl" />
              </div>
              <div>
                <h3 className="gold-text text-xl sm:text-2xl font-bold">$2M+</h3>
                <p className="text-gray-400 text-sm sm:text-md">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className="w-full max-w-sm sm:max-w-md h-[300px] sm:h-[400px]">
          <GlobeCanvas />
        </div>
      </div>
    </div>
  );
};


export default HeroSection;
// import "../../app/globals.css";
// import React from "react";
// import { LuCoins } from "react-icons/lu";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import NetworkVisual from "../networkVisual/page"; // Adjust path as needed

// const HeroSection = () => {
//   return (
//     <div className="relative z-10 flex flex-wrap w-full px-6 pt-28 items-center min-h-[80vh]">
//       {/* Background Network Visualization */}
//       <div className="absolute inset-0 z-0 mt-26 flex justify-center">
//         <div className="w-3/4">
//           {" "}
//           {/* Adjusted width to 75% */}
//           <NetworkVisual />
//         </div>
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 flex flex-wrap w-full pt-10 px-6">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 px-4 md:px-10 flex items-center">
//           <div>
//             <h1 className="text-gold text-5xl md:text-6xl font-bold leading-tight">
//               Next Generation DeFi Platform
//             </h1>
//             <p className="text-xl text-slate-300 pt-4">
//               Trade, earn, and grow your digital assets with lightning-fast
//               transactions and the lowest fees in the industry.
//             </p>

//             <div className="flex items-center gap-6 mt-6">
//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-black font-medium shadow hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out"
//               >
//                 Launch App
//               </button>
//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded-full border border-gold bg-black px-5 py-2 text-gold font-medium hover:bg-bg-gold hover:text-black transition duration-200 ease-in-out"
//               >
//                 Learn More
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-9 mt-6">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center justify-center w-15 h-15 rounded-full bg-yellow-900/30">
//                   <LuCoins className="text-yellow-400 text-3xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-gold text-2xl font-bold">$2.5B+</h3>
//                   <p className="text-gray-400 text-md">Total Value Locked</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center justify-center w-15 h-15 rounded-full bg-yellow-900/30">
//                   <FaArrowTrendUp className="text-yellow-400 text-3xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-gold text-2xl font-bold">$2M+</h3>
//                   <p className="text-gray-400 text-md">Active Users</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Portfolio Card */}
//         <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
//           {/* <div className="w-full max-w-xs backdrop-blur-md bg-gray-900 border border-yellow-400 rounded-4xl shadow-md p-6 hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold text-white">
//                 Portfolio Value
//                 <span className="block text-yellow-400">$24,561.82</span>
//               </h2>
//             </div>

//             <ul className="mt-7 flex flex-col gap-4 text-sm">
//               {[
//                 {
//                   name: "BTC",
//                   amount: "0.4 BTC",
//                   color: "bg-yellow-500",
//                   change: "+2.5%",
//                 },
//                 {
//                   name: "ETH",
//                   amount: "3.21 ETH",
//                   color: "bg-cyan-300",
//                   change: "+1.8%",
//                 },
//                 {
//                   name: "HFR",
//                   amount: "1,250 HFR",
//                   color: "bg-yellow-300",
//                   change: "+5.3%",
//                 },
//               ].map((coin, idx) => (
//                 <li key={idx} className="flex justify-between items-center">
//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`w-10 h-10 rounded-full ${coin.color}`}
//                     ></div>
//                     <p className="text-lg">{coin.name}</p>
//                   </div>
//                   <div className="text-end">
//                     <h3 className="text-yellow-400 text-xl font-bold">
//                       {coin.amount}
//                     </h3>
//                     <p className="text-green-300">{coin.change}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
