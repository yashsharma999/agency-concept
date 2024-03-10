'use client';
import { Button } from '@/components/ui/button';
import getEmailAddress from '@/lib/getCurrentEmail';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

export default async function AddToCartBtn({ data, addProduct }) {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await addProduct(data);
        toast('Added to cart', {
          description: `${data.title} added to cart`,
          action: {
            label: 'View Cart',
            onClick: () => router.push('/cart'),
          },
        });
      }}
    >
      Add to cart
    </Button>
  );
}
