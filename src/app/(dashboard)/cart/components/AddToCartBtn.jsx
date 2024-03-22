'use client';
import { Button } from '@/components/ui/button';
import getEmailAddress from '@/lib/getCurrentEmail';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

export default function AddToCartBtn({ data, addProduct, className }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  return (
    <Button
      onClick={async () => {
        setLoading(true);
        await addProduct(data);
        setLoading(false);
        toast('Added to cart', {
          description: `${data.title} added to cart`,
          action: {
            label: 'View Cart',
            onClick: () => router.push('/cart'),
          },
        });
      }}
      className={className ? className : ''}
    >
      {loading ? 'Loading' : 'Add to cart'}
    </Button>
  );
}
