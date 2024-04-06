import React from 'react';
import { Separator } from '@/components/ui/separator';
import getEmailAddress from '@/lib/getCurrentEmail';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/client';
import ProductBox from './components/ProductBox';
import CreateOrder from './components/CreateOrder';
import axios from 'axios';

export const getCart = async () => {
  const email = await getEmailAddress();

  const data = await prisma.cartItem.findMany({
    where: {
      email: email,
    },
  });

  return data;
};

const sendEmail = async (email, cart) => {
  const resp = await axios.post('http://localhost:3000/api/send', {
    recipientEmail: email,
    cart,
  });
};

const createOrder = async () => {
  'use server';
  try {
    const email = await getEmailAddress();
    const cartData = await getCart();

    await prisma.order.create({
      data: {
        email,
        cart: cartData,
      },
    });

    // clear the cart after succesfull order is placed
    await prisma.cartItem.deleteMany({
      where: {
        email,
      },
    });

    await sendEmail(email, cartData);

    revalidatePath('/cart');
  } catch (error) {
    console.log('error in create order', error);
  }
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
              return <ProductBox item={item} key={item.cartItemId} />;
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
          <CreateOrder createOrder={createOrder} />
        </div>
      </div>
    </section>
  );
}
