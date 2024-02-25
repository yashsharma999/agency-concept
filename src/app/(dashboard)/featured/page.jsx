import ProductCard from '@/components/common/ProductCard';
import { services } from '@/constants';
import React from 'react';

export default function FeaturedPage() {
  return (
    <div className='grid grid-cols-4 gap-8 mt-8 mx-auto'>
      {services?.map((service, i) => (
        <ProductCard key={i} data={service} />
      ))}
    </div>
  );
}
