import React from 'react';
import { useGetDashboardMetricsQuery } from '@/state/api';


const CardPurchaseSummary = () => {
const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className='row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500'>
        {isLoading ? <div className='m-5'>Loading...</div> :
        (
            <>
                <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>Purchase Summary</h3>
                <hr />
            </>
        )}
    </div>
  )
}

export default CardPurchaseSummary;