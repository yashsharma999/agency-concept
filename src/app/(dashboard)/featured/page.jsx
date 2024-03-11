import ProductCard from '@/components/common/ProductCard';
import { services } from '@/constants';
import React from 'react';
import { client } from '../../../../sanity/lib/client';

export default async function FeaturedPage() {
  const data = await client.fetch(
    `*[_type == "product"]`,
    {},
    {
      next: {
        revalidate: 0, // look for updates to revalidate cache every time
      },
    }
  );
  // console.log('sanity data', data);

  return (
    <div className='grid grid-cols-4 gap-8 mt-8 mx-auto'>
      {data?.map((service, i) => (
        <ProductCard key={i} data={service} />
      ))}
    </div>
  );
}
