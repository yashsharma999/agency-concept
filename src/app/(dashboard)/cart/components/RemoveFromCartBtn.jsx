'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import removeIcon from '@/assets/icons/removeIcon.svg';
import Image from 'next/image';

export default function RemoveFromCartBtn({ id, removeProduct }) {
  return (
    <Button
      variant='destructive'
      onClick={() => {
        removeProduct(id);
      }}
    >
      Remove
    </Button>
  );
}
