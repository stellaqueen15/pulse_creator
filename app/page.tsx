"use client";

import { useEffect, useState } from "react";
import StatCard from "@/app/components/StatCard";

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
      label: "Cumulative Views ",
      period: "Last 30 Days",
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
          <div className="w-full p-6 flex gap-4">
            {stats &&
                statCards.map((card) => (
                    <StatCard
                        key={card.key}
                        label={card.label}
                        icon={card.icon}
                        value={stats[card.key].value}
                        change={stats[card.key].change}
                        period={card.period}
                    />
                ))}
          </div>
          <div className="bg-pink-600 h-72 w-full"></div>
          <div className="bg-purple-500 h-71 w-full"></div>
        </div>
      </div>
  );
}