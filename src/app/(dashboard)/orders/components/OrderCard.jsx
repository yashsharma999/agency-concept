import React from 'react';
import dayjs from 'dayjs';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { urlForImage } from '../../../../../sanity/lib/image';

export default function OrderCard({ data }) {
  return (
    <div className='flex flex-col gap-2 border-[1px] bg-white shadow-sm mb-4 border-slate-200 flex items-start p-4 rounded-md gap-4'>
      <div className='w-full flex justify-between'>
        <h1>
          Order ID: <span className='font-bold'>{data?.id || ''}</span>
        </h1>
        <h1>
          Created at:{' '}
          <span className='font-bold'>
            {`${dayjs(data?.createdAt).format('DD-MMM-YYYY')}, ${dayjs(
              data?.createdAt
            ).format('hh:mm a')}`}
          </span>
        </h1>
      </div>
      <h1>
        Status: <span className='font-bold'>{data?.status || ''}</span>
      </h1>
      <Separator />

      {data?.cart.map((item) => {
        return (
          <div key={item.cartItemId} className='w-full flex gap-4'>
            <div className='min-w-10 min-h-[20px] relative'>
              <Image
                src={urlForImage(item.image)}
                alt='cart-item-img'
                fill='auto'
                className='rounded-md'
              />
            </div>
            <div className='w-full flex justify-between items-center'>
              <p className='text-sm'>{item.name}</p>
              <p className='text-sm'>{`$ ${item.price}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
