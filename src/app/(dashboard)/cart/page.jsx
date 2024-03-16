import { PrismaClient } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import getEmailAddress from '@/lib/getCurrentEmail';
import RemoveFromCartBtn from './components/RemoveFromCartBtn';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

const getCart = async () => {
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

  const removeItem = async (id) => {
    'use server';

    const item = await prisma.cartItem.delete({
      where: {
        cartItemId: id,
      },
    });

    revalidatePath('/cart');
  };

  return (
    <section className='mt-4'>
      <h1 className='font-bold text-xl mb-4'>Cart</h1>
      <div className='grid grid-cols-10 gap-2'>
        <div className='col-span-7'>
          {data?.map((item) => {
            return (
              <div
                key={item.cartItemId}
                className='border-[1px] mb-4 border-slate-200 flex items-start p-4 rounded-md gap-4'
              >
                <div className='min-w-20 min-h-[100px] relative '>
                  <Image
                    src={`/webDev.jpg`}
                    alt='cart-item-img'
                    fill='auto'
                    className='rounded-md'
                  />
                </div>

                <div className='grow flex justify-between gap-4'>
                  <div>
                    <h1 className='font-bold text-lg'>{item?.name || ''}</h1>
                    <p className='text-slate-500'>{item?.description || ''}</p>
                  </div>
                  <div className='h-full min-h-[100px] flex flex-col justify-between items-end min-w-[100px]'>
                    <p className='font-bold text-lg'>{`$ ${
                      item?.price || `0.00`
                    }`}</p>
                    <RemoveFromCartBtn
                      id={item.cartItemId}
                      removeProduct={removeItem}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='col-span-3 '>
          <div className='bg-slate-100 rounded-md h-fit p-4'>
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
