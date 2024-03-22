import { PrismaClient } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import getEmailAddress from '@/lib/getCurrentEmail';
import RemoveFromCartBtn from './components/RemoveFromCartBtn';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/client';
import { removeItem } from '@/lib/actions';
import ProductBox from './components/ProductBox';

export const getCart = async () => {
  const email = await getEmailAddress();

  const data = await prisma.cartItem.findMany({
    where: {
      email: email,
    },
  });

  return data;
};

export default async function CartPage() {
  const data = await getCart();

  let total = 0;
  data?.forEach((item) => {
    total += item.price;
  });

  return (
    <section className='mt-4'>
      <h1 className='font-bold text-xl mb-4'>Cart</h1>
      <div className='grid grid-cols-10 gap-2'>
        <div className='col-span-7'>
          {data?.length ? (
            data?.map((item) => {
              return <ProductBox item={item} />;
            })
          ) : (
            <p>No items in your cart</p>
          )}
        </div>
        <div className='col-span-3 '>
          <div className='bg-white rounded-md h-fit p-4'>
            <h2 className='text-center'>Summary</h2>
            <Separator className='my-4' />
            <div className='flex justify-between items-center'>
              <h3>Subtotal</h3>
              <p>{`$ ${total}`}</p>
            </div>
            <div className='flex justify-between items-center'>
              <h3>Discount/Rewards</h3>
              <p>{`-${0}`}</p>
            </div>
            <Separator className='my-4' />
            <div className='flex justify-between items-center'>
              <h3>Total</h3>
              <p>{`$ ${total}`}</p>
            </div>
          </div>
          <Button className='w-full mt-4'>Checkout</Button>
        </div>
      </div>
    </section>
  );
}
