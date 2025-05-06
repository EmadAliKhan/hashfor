"use client";
import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
const MarketPerformance = () => {
  const buttons = [
    {
      day: "1D",
    },
    {
      day: "1W",
    },
    {
      day: "1M",
    },
    {
      day: "1Y",
    },
    {
      day: "ALL",
    },
  ];

  return (
    <>
      <div className=" w-full">
        {/* heading section */}
        <div className="flex flex-wrap justify-between mt-13">
          <div className="pl-10">
            <p className="text-4xl font-bold text-yellow-400">
              Market Performance
            </p>
            <p className="text-lg text-gray-400">
              Token price and volume history
            </p>
          </div>
          <div className="pr-10">
            {buttons?.map((e, i) => {
              return (
                <button
                  key={i}
                  className=" text-yellow-400 font-bold text-md border rounded-xl p-1 hover:bg-yellow-400 hover:text-black ms-2"
                >
                  {e.day}
                </button>
              );
            })}
          </div>
        </div>
        {/* chart section */}
        <div className="flex justify-center items-center p-10 mt-5">
          <div
            className="border border-yellow-400 rounded-xl p-6 w-full "
            style={{
              background:
                "linear-gradient(to left, #000, rgba(270, 230, 0, 0.2))",
            }}
          >
            <Line
              data={{
                labels: ["Jan", "Feb", "March", "Apr", "May", "June"],
                datasets: [
                  {
                    label: "Finance",
                    data: [350, 126, 328, 119, 232, 345],
                    fill: true,
                    // backgroundColor: "black",
                    borderColor: "rgba(191, 174, 44, 0.76)",
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPerformance;
