import Image from 'next/image';
import React from 'react';
import { client } from '../../../../../sanity/lib/client';
import { urlForImage } from '../../../../../sanity/lib/image';
import { PortableText } from '@portabletext/react';

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
      <section className='mt-8 grid grid-cols-2 gap-16 product-details'>
        <div className='relative h-[300px] w-full'>
          <Image
            src={urlForImage(data[0].image)}
            className='w-full rounded-md mb-1 cover'
            fill='auto'
            alt='web dev'
          />
        </div>
        <div>
          <PortableText value={data?.[0]?.details ?? []}></PortableText>
        </div>
      </section>
    );
  }
}
