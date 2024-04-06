import prisma from '@/lib/client';
import getEmailAddress from '@/lib/getCurrentEmail';
import React from 'react';
import OrderCard from './components/OrderCard';

const getOrders = async () => {
  const email = await getEmailAddress();
  const data = await prisma.order.findMany({
    where: {
      email,
    },
  });
  console.dir(data, { depth: null });
  return data;
};

export default async function page() {
  const data = await getOrders();

  return (
    <div className='mx-auto w-full sm:max-w-[80%] mt-8'>
      {/* <h1 className='mb-4 text-2xl'>Orders</h1> */}
      {data?.map((item) => {
        return <OrderCard data={item} key={item.id} />;
      })}
    </div>
  );
}
