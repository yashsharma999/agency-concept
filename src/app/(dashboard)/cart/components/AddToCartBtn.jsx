'use client';
import { Button } from '@/components/ui/button';
import getEmailAddress from '@/lib/getCurrentEmail';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
import { useAuth } from '@clerk/clerk-react';

export default function AddToCartBtn({ data, addProduct, className }) {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const [loading, setLoading] = React.useState(false);

  return (
    <Button
      onClick={async () => {
        if (isSignedIn) {
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
        } else {
          toast('Not signed in', {
            description: `Please sign in to add item in your cart`,
            // action: {
            //   label: 'View Cart',
            //   onClick: () => router.push('/cart'),
            // },
          });
        }
      }}
      className={className ? className : ''}
    >
      {loading ? 'Loading' : 'Add to cart'}
    </Button>
  );
}
