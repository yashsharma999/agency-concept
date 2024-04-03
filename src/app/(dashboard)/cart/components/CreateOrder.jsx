'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function CreateOrder({ createOrder }) {
  const handleCreateOrder = async () => {
    createOrder();
  };

  return (
    <Button className='w-full mt-4' onClick={handleCreateOrder}>
      Checkout
    </Button>
  );
}
