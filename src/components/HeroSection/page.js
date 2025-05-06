import React from "react";
import { LuCoins } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div
      className="flex flex-wrap min-h-screen w-full text-white mt-5 bg-gradient-to-r from-black-400 via-yellow-900 to-yellow-400"
      // style={{
      //   background: "linear-gradient(to right, #000,rgba(270, 230, 0, 0.5))",
      // }}
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 px-10 flex items-center">
        <div>
          <h1 className="text-yellow-400 text-5xl md:text-6xl font-bold leading-tight">
            Next Generation DeFi Platform
          </h1>
          <p className="text-xl text-slate-300 pt-4">
            Trade, earn, and grow your digital assets with lightning-fast
            transactions and the lowest fees in the industry.
          </p>

          <div className="flex items-center gap-6 mt-6">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-5 py-2 text-black font-medium shadow hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out"
            >
              Launch App
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-yellow-400 bg-black px-5 py-2 text-yellow-400 font-medium hover:bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:text-black transition duration-200 ease-in-out"
            >
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap gap-9 mt-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-15 h-15 rounded-full bg-yellow-900/30">
                <LuCoins className="text-yellow-400 text-3xl" />
              </div>
              <div>
                <h3 className="text-yellow-400 text-2xl font-bold">$2.5B+</h3>
                <p className="text-gray-400 text-md">Total Value Locked</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-15 h-15 rounded-full bg-yellow-900/30">
                <FaArrowTrendUp className="text-yellow-400 text-3xl" />
              </div>
              <div>
                <h3 className="text-yellow-400 text-2xl font-bold">$2M+</h3>
                <p className="text-gray-400 text-md">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Blurred Portfolio Card */}
      <div
        // className="w-full max-w-xs backdrop-blur-md bg-black border border-black rounded-xl shadow-md p-6"
        className="w-full md:w-1/2 p-6 flex items-center justify-center"
        style={{
          animation: "float 5s ease-in-out infinite",
        }}
      >
        <div className="w-full max-w-xs backdrop-blur-md bg-gray-900 border border-yellow-400 rounded-4xl shadow-md p-6 hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">
              Portfolio Value
              <span className="block text-yellow-400">$24,561.82</span>
            </h2>
          </div>

          <ul className="mt-7 flex flex-col gap-4 text-sm">
            {[
              {
                name: "BTC",
                amount: "0.4 BTC",
                color: "bg-yellow-500",
                change: "+2.5%",
              },
              {
                name: "ETH",
                amount: "3.21 ETH",
                color: "bg-cyan-300",
                change: "+1.8%",
              },
              {
                name: "HFR",
                amount: "1,250 HFR",
                color: "bg-yellow-300",
                change: "+5.3%",
              },
            ].map((coin, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${coin.color}`}></div>
                  <p className="text-lg">{coin.name}</p>
                </div>
                <div className="text-end">
                  <h3 className="text-yellow-400 text-xl font-bold">
                    {coin.amount}
                  </h3>
                  <p className="text-green-300">{coin.change}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
