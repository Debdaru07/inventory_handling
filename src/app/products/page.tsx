"use client";

import { useGetProductsQuery } from '@/state/api';
import React, { useState } from 'react'

const Products = () => {
  const [searchTerm, setSearchTerm ] = useState("");
  const [isModalOpen, setIsModalOpen ] = useState(false);
  const { data: products, isLoading, isError } = useGetProductsQuery(searchTerm);
  
  if (isLoading) {
    return <div className='py-4'>Loading ...</div>
  }

  if(isError || !products) {
    return <div className='text-center text-red-500 py-4'>Failed to fetch Products</div>
  }

  return (
    <div>Products</div>
  )
}

export default Products