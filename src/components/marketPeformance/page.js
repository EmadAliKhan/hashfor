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
            <p className="text-4xl font-bold gold-text">Market Performance</p>
            <p className="text-lg text-gray-400">
              Token price and volume history
            </p>
          </div>
          <div className="pr-10">
            {buttons?.map((e, i) => {
              return (
                <button
                  key={i}
                  className="gold-text font-bold text-md border border-[#ECCE68] rounded-xl p-1  ms-2"
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
            className="border border-[#ECCE68] rounded-xl p-6 w-full "
            style={{
              background:
                "  linear-gradient(to left,rgba(217, 204, 138, 0.42), rgba(236, 206, 104, 0.3), rgba(181, 144, 44, 0.3))",
            }}
          >
            {/* <Line
              data={{
                labels: ["Jan", "Feb", "March", "Apr", "May", "June"],
                datasets: [
                  {
                    label: "Finance",
                    data: [350, 126, 328, 119, 232, 345],
                    fill: true,
                    // backgroundColor: "black",
                    borderColor: "black",
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              height={200}
            /> */}
            <Line
              data={{
                labels: ["Jan", "Feb", "March", "Apr", "May", "June"],
                datasets: [
                  {
                    label: "Finance",
                    data: [350, 126, 328, 119, 232, 345],
                    fill: true,
                    borderColor: "black",
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: {
                      color: "#ffffff", // White legend text
                    },
                  },
                  tooltip: {
                    titleColor: "#ffffff",
                    bodyColor: "#ffffff",
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      color: "#ffffff", // White X-axis labels
                    },
                    grid: {
                      color: "rgba(255,255,255,0.1)", // Optional: faint white grid
                    },
                  },
                  y: {
                    ticks: {
                      color: "#ffffff", // White Y-axis labels
                    },
                    grid: {
                      color: "rgba(255,255,255,0.1)", // Optional: faint white grid
                    },
                  },
                },
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
