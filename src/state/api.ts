import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    productId: string;
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
}
export interface SalesSummary {
    salesSummaryId: string;
    totalValue: number;
    changePercentage?: number;
    date: number
}

export interface PurchaseSummary {
    purchaseSummaryId: string;
    totalPurchased: number;
    changePercentage?:  number;
    date: string;
}

export interface ExpenseSummary {
    expenseSummaryId: string;
    totalExpense: number;
    changePercentage?: number;
    date: string;
}

export interface ExpenseByCategorySummary {
    expenseSummaryId: string;
    category: string;
    totalExpense: number;
}

export interface DashboardMetrics {
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
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

export const { useGetDashboardMetricsQuery, } = api;