import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("/api/dashboard/stats", () => {
        return HttpResponse.json({
            totalAudience: 452300,
            totalViews: 1200000,
            engagementRate: 5.8,
            estimatedRevenue: 4850,
        });
    }),
];