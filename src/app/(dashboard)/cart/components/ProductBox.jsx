import { removeItem } from '@/lib/actions';
import Image from 'next/image';
import React from 'react';
import { urlForImage } from '../../../../../sanity/lib/image';
import RemoveFromCartBtn from './RemoveFromCartBtn';

export default function ProductBox({ item }) {
  return (
    <div
      key={item.cartItemId}
      className='border-[1px] bg-white mb-4 border-slate-200 flex items-start p-4 rounded-md gap-4'
    >
      <div className='min-w-20 min-h-[100px] relative '>
        <Image
          src={urlForImage(item.image)}
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
          <p className='font-bold text-lg'>{`$ ${item?.price || `0.00`}`}</p>
          <RemoveFromCartBtn id={item.cartItemId} removeProduct={removeItem} />
        </div>
      </div>
    </div>
  );
}
