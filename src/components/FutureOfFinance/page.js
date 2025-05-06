import React from "react";
import { LuCoins } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
const FutureFinanace = () => {
  const data = [
    {
      icon: <LuCoins className="text-yellow-400 text-2xl" />,
      heading: "Low Transaction Fees",
      text: "Save on costs with our optimized protocols that minimize gas fees and maximize returns.",
    },
    {
      icon: <SiGoogleanalytics className="text-yellow-400 text-2xl" />,
      heading: "Advanced Analytics",
      text: "Make informed decisions with real-time data and powerful analytics tools.",
    },
    {
      icon: <FaWallet className="text-yellow-400 text-2xl" />,
      heading: "Secure Wallet",
      text: "Your assets are protected with military-grade encryption and multi-signature technology.",
    },
    {
      icon: <FaArrowTrendUp className="text-yellow-400 text-2xl" />,
      heading: "High Yield Farming",
      text: "Earn passive income through our innovative yield farming strategies.",
    },
  ];
  const marketOverview = [
    {
      icon: <FaWallet className="text-yellow-400 text-2xl" />,
      name: "Total value Locked",
      price: "2.45B",
      changes: "+12.5",
    },
    {
      icon: <SiGoogleanalytics className="text-yellow-400 text-2xl" />,
      name: "Trading Volume 24h",
      price: "847.2M",
      changes: "+5.8",
    },
    {
      icon: <LuCoins className="text-yellow-400 text-2xl" />,
      name: "HFR Price",
      price: "3.24",
      changes: "-2.1",
    },
    {
      icon: <FaArrowTrendUp className="text-yellow-400 text-2xl" />,
      name: "Active Users",
      price: "284.5K",
      changes: "+8.7",
    },
  ];
  return (
    <>
      <div className="min-h-screen w-full">
        {/* heading section */}
        <div className="flex justify-center text-white mt-5">
          <div className="text-center space-y-3">
            <p className="text-4xl text-yellow-400 font-bold">
              Powering the Future of Finance
            </p>
            <p className="text-gray-300 text-xl">
              Experience the most advanced DeFi platform with innovative
              features
            </p>
            <p className="text-gray-300 text-xl">
              designed to maximize your investment potential.
            </p>
          </div>
        </div>
        {/* card section */}
        <div className="flex justify-center flex-row flex-wrap gap-9 text-white mt-13">
          {data?.map((e, i) => (
            <div
              key={i}
              className="bg-gray-400 rounded-xl p-6 w-full md:w-1/4 border border-white/20 hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out"
              style={{
                background:
                  "linear-gradient(to left, #000, rgba(270, 230, 0, 0.2))",
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-900/30 mb-4">
                {/* <LuCoins className="text-yellow-400 text-2xl" /> */}
                {e.icon}
              </div>
              <div>
                <p className="text-yellow-400 text-2xl font-bold">
                  {e.heading}
                </p>
                <p className="text-lg text-white mt-1">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Market Overview Section */}
        <div className="text-center mt-15">
          <p className="text-4xl font-bold text-yellow-400">Market Overview</p>
        </div>

        <div className="flex justify-center flex-row flex-wrap gap-9 text-white mt-13">
          {marketOverview?.map((e, i) => {
            return (
              <div
                className=" rounded-xl p-6 w-full md:w-1/5 border border-white/20 hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out mb-5"
                style={{
                  background:
                    "linear-gradient(to left, #000, rgba(270, 230, 0, 0.2))",
                }}
                key={i}
              >
                <div className="flex justify-between">
                  <p className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-900/30 mb-4">
                    {e.icon}
                  </p>
                  <button className="text-xs btn btn-success rounded-full">
                    {e.changes} %
                  </button>
                </div>
                <div>
                  <p className="text-gray-400">{e.name}</p>
                  <p className="text-yellow-400 font-bold text-2xl">
                    ${e.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FutureFinanace;
