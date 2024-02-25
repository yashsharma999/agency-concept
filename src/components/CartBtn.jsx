import React from 'react';
import cartIcon from '@/assets/icons/cart.svg';
import Image from 'next/image';
import { Button } from './ui/button';

export default function CartBtn() {
  return (
    <Button variant='outline' className='rounded-md'>
      <span className='mr-1'>Cart</span>
      <Image src={cartIcon} alt='cart' className='h-4' />
    </Button>
  );
}
