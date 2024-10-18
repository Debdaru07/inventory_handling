"use client"

import CardExpenseSummary from "./cardExpenseSummary";
import CardPopularProducts from "./cardPopular";
import CardPurchaseSummary from "./cardPurchaseSummary";
import CardSalesSummary from "./cardSalesSummary";

const Dashboard = () => {
  return <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow gap-10 pb-4 custom-grid-rows">
    <CardPopularProducts/>
    <CardSalesSummary/>
    <CardPurchaseSummary/>
    <CardExpenseSummary />
    {/* <div className="row-span-3 bg-gray-500"/> */}
    <div className="row-span-3 bg-gray-500"/>
    <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
    <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
    <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
  </div>
}

export default Dashboard;