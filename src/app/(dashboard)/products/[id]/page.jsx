import Image from 'next/image';
import React from 'react';
import { client } from '../../../../../sanity/lib/client';
import { urlForImage } from '../../../../../sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { Button } from '@/components/ui/button';

export default async function ProductDetailsPage({ params }) {
  const data = await client.fetch(
    `*[_type == "product" && _id == $id]`,
    {
      id: params.id,
    },
    {
      next: {
        revalidate: 0, // look for updates to revalidate cache every time
      },
    }
  );

  if (data?.length) {
    return (
      <section className='mt-8 '>
        <h1 className='text-center mb-8 text-2xl font-bold'>
          {data?.[0].title}
        </h1>
        <div className='grid grid-cols-2 gap-8 product-details'>
          <div className='flex flex-col gap-4'>
            <div className='relative h-[300px] w-full'>
              <Image
                src={urlForImage(data[0].image)}
                className='w-full rounded-md mb-1 bg-cover bg-center	'
                fill='auto'
                alt='web dev'
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex flex-col text-2xl'>
                <p>{`$ ${data[0]?.selling_price}`}</p>
                <p className='line-through text-sm text-slate-400'>{`$ ${data[0]?.original_price}`}</p>
              </div>
              <Button className='min-w-[200px]'>Add To Cart</Button>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <PortableText value={data?.[0]?.details ?? []}></PortableText>
          </div>
        </div>
      </section>
    );
  }
}
