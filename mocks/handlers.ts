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
        });
    }),
];