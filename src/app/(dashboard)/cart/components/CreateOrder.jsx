'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

export default function CreateOrder({ createOrder }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleCreateOrder = async () => {
    await createOrder();
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      await handleCreateOrder();

      toast('Order placed', {
        description: `You will recieve a confirmation email.`,
        action: {
          label: 'View Order',
          onClick: () => router.push('/orders'),
        },
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button className='w-full mt-4' onClick={handleClick}>
      {loading ? 'Loading' : 'Checkout'}
    </Button>
  );
}
