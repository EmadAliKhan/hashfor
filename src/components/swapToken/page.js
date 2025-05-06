import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { IoSettings } from "react-icons/io5";
const SwapToken = () => {
  return (
    <>
      <div className="min-h-screen w-full ">
        <div className="flex justify-center  mt-10">
          <div className="text-center space-y-3">
            <p className="text-4xl text-yellow-400 font-bold">
              Swap Tokens Instantly
            </p>
            <p className="text-gray-500 font-semibold text-xl pt-1">
              Trade tokens at the best rates with minimal slippage and
              lightning-fast <span className="block"> execution.</span>
            </p>
          </div>
        </div>
        {/* //card section */}
        <div className="w-full p-6 flex items-center justify-center text-white">
          <div className="w-full max-w-md backdrop-blur-md border border-yellow-400 rounded-xl shadow-md p-6 hover:opacity-90 hover:-translate-y-1 transition duration-200 ease-in-out">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-yellow-400">Swap</h2>
              <button
                type="button"
                className=" rounded-full p-1 text-yellow-400 hover:text-black hover:bg-yellow-400"
              >
                <IoSettings className="size-6" />
              </button>
            </div>
            {/* 1st Box */}
            <div>
              <div className="rounded-xl bg-gray-900 p-3">
                <div className=" flex justify-between ">
                  <p>From</p>
                  <p>Balance: 1.45 ETH</p>
                </div>
                <div className=" flex justify-between pt-2">
                  <p className="pt-2">0.0</p>
                  {/* dropdown */}
                  <div class="w-27">
                    <select
                      id="dropdown"
                      className="block w-full px-4 py-2 text-yellow-400 bg-black border border-yellow-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value=""> ETH </option>
                      <option value="option1">BTC</option>
                      <option value="option2">HFR</option>
                      <option value="option3">USDC</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* 2nd Box */}
              <div className="rounded-xl bg-gray-900 p-3 mt-4">
                <div className=" flex justify-between ">
                  <p>To</p>
                  <p>Balance: 240 HFR</p>
                </div>
                <div className=" flex justify-between pt-2">
                  <p className="pt-2">0.0</p>
                  {/* dropdown */}
                  <div class="w-27">
                    <select
                      id="dropdown"
                      className="block w-full px-4 py-2 text-yellow-400 bg-black border border-yellow-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value=""> HFR </option>
                      <option value="option1">HFR</option>
                      <option value="option2">ETC</option>
                      <option value="option3">USDC</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* 3rd Box */}
              <div className="rounded-xl bg-gray-900 p-3 mt-4">
                <div className="flex justify-between">
                  <p>
                    {/* Price Minimum */}
                    <span className="block">Price </span>
                    <span className="block"> Minimum received</span>
                    <span className="block">Slippage tolerance</span>
                  </p>
                  <p className="text-yellow-400">
                    <span className="block">1 ETH = 528.12 HFR</span>
                    <span className="block text-end">527.12 HFR</span>
                    <span className="block text-end">0.5%</span>
                  </p>
                </div>
                {/* button */}
              </div>
              <div className="mt-5 ">
                <button className="w-full text-center text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-2 rounded-xl">
                  Swap Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapToken;
