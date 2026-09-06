import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("/api/dashboard/stats", () => {
        return HttpResponse.json({
            totalAudience: {
                value: 452300,
                change: 8.2,
            },
            totalViews: {
                value: 1200000,
                change: -12.4,
            },
            engagementRate: {
                value: 5.8,
                change: 0.7,
            },
            estimatedRevenue: {
                value: 4850,
                change: 5.3,
            },

            viewsHistory: [
                { date: "2026-08-01", tiktok: 22000, instagram: 18000, youtube: 12000 },
                { date: "2026-08-02", tiktok: 25000, instagram: 19500, youtube: 12800 },
                { date: "2026-08-03", tiktok: 31000, instagram: 21000, youtube: 13500 },
                { date: "2026-08-04", tiktok: 28000, instagram: 23500, youtube: 14200 },
                { date: "2026-08-05", tiktok: 36000, instagram: 27000, youtube: 15100 },
                { date: "2026-08-06", tiktok: 43000, instagram: 29200, youtube: 16400 },
                { date: "2026-08-07", tiktok: 39000, instagram: 31500, youtube: 15800 },
                { date: "2026-08-08", tiktok: 34000, instagram: 35000, youtube: 17200 },
                { date: "2026-08-09", tiktok: 47000, instagram: 38200, youtube: 18500 },
                { date: "2026-08-10", tiktok: 52000, instagram: 36000, youtube: 20100 },
                { date: "2026-08-11", tiktok: 45000, instagram: 41000, youtube: 21900 },
                { date: "2026-08-12", tiktok: 38000, instagram: 46000, youtube: 23800 },
                { date: "2026-08-13", tiktok: 33000, instagram: 42500, youtube: 26200 },
                { date: "2026-08-14", tiktok: 29000, instagram: 39000, youtube: 24500 },
                { date: "2026-08-15", tiktok: 41000, instagram: 52000, youtube: 23100 },
                { date: "2026-08-16", tiktok: 48000, instagram: 47000, youtube: 25500 },
                { date: "2026-08-17", tiktok: 56000, instagram: 43000, youtube: 27800 },
                { date: "2026-08-18", tiktok: 51000, instagram: 38000, youtube: 31500 },
                { date: "2026-08-19", tiktok: 44000, instagram: 35000, youtube: 37200 },
                { date: "2026-08-20", tiktok: 61000, instagram: 42000, youtube: 34800 },
                { date: "2026-08-21", tiktok: 68000, instagram: 49000, youtube: 30100 },
                { date: "2026-08-22", tiktok: 59000, instagram: 53000, youtube: 28500 },
                { date: "2026-08-23", tiktok: 50000, instagram: 61000, youtube: 34200 },
                { date: "2026-08-24", tiktok: 43000, instagram: 68000, youtube: 39100 },
                { date: "2026-08-25", tiktok: 38000, instagram: 59000, youtube: 42700 },
                { date: "2026-08-26", tiktok: 55000, instagram: 51000, youtube: 48600 },
                { date: "2026-08-27", tiktok: 64000, instagram: 47000, youtube: 53200 },
                { date: "2026-08-28", tiktok: 59000, instagram: 44000, youtube: 47800 },
                { date: "2026-08-29", tiktok: 72000, instagram: 52000, youtube: 44100 },
                { date: "2026-08-30", tiktok: 66000, instagram: 58000, youtube: 51000 },
            ],
        });
    }),
];