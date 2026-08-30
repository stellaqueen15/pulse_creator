"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/api/dashboard/stats")
        .then((res) => res.json())
        .then((data) => setStats(data));
  }, []);

  const statCards = [
    {
      key: "totalAudience",
      label: "Total Audience",
      icon: "fi fi-sr-users",
    },
    {
      key: "totalViews",
      label: "Cumulative Views",
      icon: "fi fi-sr-eye",
    },
    {
      key: "engagementRate",
      label: "Average Engagement Rate",
      icon: "fi fi-sr-heart",
    },
    {
      key: "estimatedRevenue",
      label: "Estimated Monthly Revenue",
      icon: "fi fi-sr-dollar",
    },
  ];

  return (
      <div className="flex">
        <div className="bg-red-500 h-screen fixed w-60"></div>
        <div className="ml-60 w-full">
          <div className="bg-green-500 h-16 w-full"></div>
          <div className="w-full p-6 flex">
            <div className="bg-card min-w-55 rounded-3xl p-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-card-text">
                    {statCards[0].label}
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                      452.3K
                    </p>

                    <p className="mt-2 font-semibold text-[0.750rem] bg-green-600/30 px-1  border-green-600 rounded-2xl text-green-600">
                      +8.2%
                    </p>
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-icon text-xl text-white">
                  <i className={`${statCards[0].icon} flex items-center justify-center`}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-pink-600 h-72 w-full"></div>
          <div className="bg-purple-500 h-71 w-full"></div>
        </div>
      </div>
  );
}