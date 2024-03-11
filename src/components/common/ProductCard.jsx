import AddToCartBtn from '@/app/(dashboard)/cart/components/AddToCartBtn';
import getEmailAddress from '@/lib/getCurrentEmail';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import React from 'react';
import { urlForImage } from '../../../sanity/lib/image';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const prisma = new PrismaClient();

export default async function ProductCard({ data }) {
  const addProduct = async () => {
    'use server';
    const email = await getEmailAddress();
    const cartItem = await prisma.cartItem.create({
      data: {
        name: data.title,
        description: data.description,
        price: data?.sellingPrice || 0,
        email: email,
      },
    });

    revalidatePath('/cart');
  };

  return (
    <Card className={`max-w-[250px] flex flex-col justify-between`}>
      <CardHeader>
        <div className='relative h-[100px] w-full'>
          <Image
            src={urlForImage(data.image)}
            className='w-full rounded-md mb-1'
            fill='auto'
            alt='web dev'
          />
        </div>
        <CardTitle className='text-[18px]'>{data?.title}</CardTitle>
        <CardDescription className='line-clamp-2'>
          {data?.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between'>
        <div className='flex flex-col'>
          <p>{`$ ${data?.selling_price}`}</p>
          <p className='line-through text-sm text-slate-400'>{`$ ${data?.original_price}`}</p>
        </div>
        <AddToCartBtn data={data} addProduct={addProduct} />
      </CardFooter>
    </Card>
  );
}
