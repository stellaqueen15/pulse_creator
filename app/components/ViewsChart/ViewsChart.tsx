"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

type ViewsChartProps = {
    data: {
        date: string;
        tiktok: number;
        instagram: number;
        youtube: number;
    }[];
};

export default function ViewsChart({ data }: ViewsChartProps) {
    return (
        <div className="mt-6 w-full rounded-3xl bg-card p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-white">
                        Views
                    </h2>
                    <p className="mt-1 text-sm text-card-text">
                        Daily views across your platforms
                    </p>
                </div>

                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-white/70">
                        <span className="h-2 w-2 rounded-full bg-blue-400" />
                        TikTok
                    </div>

                    <div className="flex items-center gap-2 text-white/70">
                        <span className="h-2 w-2 rounded-full bg-pink-400" />
                        Instagram
                    </div>

                    <div className="flex items-center gap-2 text-white/70">
                        <span className="h-2 w-2 rounded-full bg-red-600" />
                        YouTube
                    </div>
                </div>
            </div>

            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid
                            stroke="rgba(255,255,255,0.06)"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="date"
                            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }
                        />

                        <YAxis
                            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) =>
                                value >= 1000
                                    ? `${Math.round(value / 1000)}K`
                                    : value
                            }
                        />

                        <Tooltip
                            contentStyle={{
                                background: "#20132f",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                color: "#fff",
                            }}
                            labelStyle={{
                                color: "rgba(255,255,255,0.6)",
                                marginBottom: "6px",
                            }}
                            formatter={(value) =>
                                Number(value).toLocaleString()
                            }
                        />

                        <Line
                            type="monotone"
                            dataKey="tiktok"
                            stroke="#60a5fa"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 5 }}
                        />

                        <Line
                            type="monotone"
                            dataKey="instagram"
                            stroke="#f472b6"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 5 }}
                        />

                        <Line
                            type="monotone"
                            dataKey="youtube"
                            stroke="#dc2626"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}