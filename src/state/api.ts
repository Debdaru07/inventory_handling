import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface DashboardMetrics {
    
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes: [],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => "/dashboard",
            providesTags: []
        })
    }),
})

export const {} = api;