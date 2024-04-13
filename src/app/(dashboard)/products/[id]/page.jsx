import Image from 'next/image';
import React from 'react';
import { client } from '../../../../../sanity/lib/client';
import { urlForImage } from '../../../../../sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { Button } from '@/components/ui/button';
import AddToCartBtn from '../../cart/components/AddToCartBtn';
import getEmailAddress from '@/lib/getCurrentEmail';
import prisma from '@/lib/client';
import { revalidatePath } from 'next/cache';
import { getCart } from '../../cart/page';
import { Separator } from '@/components/ui/separator';

export default async function ProductDetailsPage({ params }) {
  const cartData = await getCart();

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

  const addProduct = async () => {
    'use server';
    const email = await getEmailAddress();
    const cartItem = await prisma.cartItem.create({
      data: {
        name: data[0]?.title,
        description: data[0]?.description,
        price: data[0]?.selling_price || 0,
        email: email,
        productId: data[0]._id,
      },
    });

    revalidatePath('/cart');
  };

  if (data?.length) {
    return (
      <section className='mt-8 '>
        <h1 className='text-center mb-8 text-2xl font-bold'>
          {data?.[0].title}
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 product-details'>
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
              <AddToCartBtn
                addProduct={addProduct}
                data={data[0]}
                className='min-w-[150px]'
              />
            </div>
          </div>
          <div>{data?.[0].description ?? ''}</div>
        </div>
        <Separator className='my-8' />
        <div className='flex flex-col gap-2 product-details'>
          <PortableText value={data?.[0]?.details ?? []}></PortableText>
        </div>
      </section>
    );
  }
}
