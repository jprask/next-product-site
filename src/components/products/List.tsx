'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/src/type/products';

type Props = {
  productData: Product[];
  currentPage: number;
};

export default function List({ productData, currentPage }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className='grid lg:max-w-5xl lg:w-full lg:grid-cols-2 lg:text-left'>
      {productData.map((product) => (
        <div
          key={product.id}
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
          <Link href={`/products/${product.id}`}>
            <h3 className={`mb-3 text-2xl font-semibold`}>{product.name}</h3>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Price: {product.price}</p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Description: {product.description}</p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Category: {product.category}</p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Rating: {product.rating}</p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Reviews: {product.numReviews}</p>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Stock: {product.countInStock}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
