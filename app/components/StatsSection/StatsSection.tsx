"use client";

import { useEffect, useState } from "react";
import StatCard from "@/app/components/StatsSection/StatCard";

type DashboardStats = {
    totalAudience: {
        value: number;
        change: number;
    };
    totalViews: {
        value: number;
        change: number;
    };
    engagementRate: {
        value: number;
        change: number;
    };
    estimatedRevenue: {
        value: number;
        change: number;
    };
};

type StatKey = keyof DashboardStats;

export default function StatsSection() {
    const [stats, setStats] = useState<DashboardStats | null>(null);

    useEffect(() => {
        fetch("/api/dashboard/stats")
            .then((res) => res.json())
            .then((data) => setStats(data));
    }, []);

    const statCards: {
        key: StatKey;
        label: string;
        icon: string;
        period?: string;
    }[] = [
        {
            key: "totalAudience",
            label: "Total Audience",
            icon: "fi fi-sr-users",
        },
        {
            key: "totalViews",
            label: "Cumulative Views",
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
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
    );
}