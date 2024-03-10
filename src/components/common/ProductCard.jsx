import AddToCartBtn from '@/app/(dashboard)/cart/components/AddToCartBtn';
import getEmailAddress from '@/lib/getCurrentEmail';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import React from 'react';
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
        <Image
          src={'/webDev.jpg'}
          className='w-full rounded-md mb-1'
          width={400}
          height={300}
          alt='web dev'
        />
        <CardTitle className='text-[18px]'>{data?.title}</CardTitle>
        <CardDescription>{data?.description}</CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between'>
        <div className='flex flex-col'>
          <p>{`$ ${data?.price[0]}`}</p>
          <p className='line-through text-sm text-slate-400'>{`$ ${data?.price[1]}`}</p>
        </div>
        <AddToCartBtn data={data} addProduct={addProduct} />
      </CardFooter>
    </Card>
  );
}
