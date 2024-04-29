import AddToCartBtn from '@/app/(dashboard)/cart/components/AddToCartBtn';
import getEmailAddress from '@/lib/getCurrentEmail';
import prisma from '@/lib/client';
import { PortableText } from '@portabletext/react';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlForImage } from '../../../sanity/lib/image';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { getCart } from '@/app/(dashboard)/cart/page';
import RemoveFromCartBtn from '@/app/(dashboard)/cart/components/RemoveFromCartBtn';
import { removeItem } from '@/lib/actions';
import { Button } from '../ui/button';

export default async function ProductCard({ data }) {
  const cartData = await getCart();
  const inCart = cartData?.find((item) => item.productId === data?._id);

  const addProduct = async () => {
    'use server';
    const email = await getEmailAddress();
    const cartItem = await prisma.cartItem.create({
      data: {
        name: data.title,
        description: data.description,
        price: data?.selling_price || 0,
        email: email,
        productId: data._id,
        image: data.image,
      },
    });

    revalidatePath('/cart');
  };

  return (
    <Card
      className={`sm:max-w-[250px] h-full flex flex-col justify-between relative before:absolute before:-inset-px before:rounded-2xl rounded-2xl before:bg-[linear-gradient(to_right,#EEDDE7_0%,#EDEDF3_100%)]`}
    >
      <div className='bg-[#F8F9FB] relative z-10 h-full rounded-2xl'>
        <CardHeader>
          <div className='relative h-[100px] w-full'>
            <Image
              src={urlForImage(data.image)}
              className='w-full rounded-md mb-1'
              fill='auto'
              objectFit='contain'
              alt='web dev'
            />
          </div>
          <CardTitle className='text-[18px]'>{data?.title}</CardTitle>
          <CardDescription className='line-clamp-2'>
            {data?.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className='flex flex-col gap-4'>
          <Link href={`/products/${data?._id}`} className='w-full'>
            <Button variant='outline' className='w-full'>
              {' '}
              View details
            </Button>
          </Link>
          <div className='flex w-full justify-between items-center'>
            <div className='flex flex-col'>
              <p>{`$ ${data?.selling_price}`}</p>
              {data?.original_price && (
                <p className='line-through text-sm text-slate-400'>
                  {`$ ${data?.original_price}`}
                </p>
              )}
            </div>
            {inCart ? (
              <RemoveFromCartBtn
                id={
                  cartData?.find((item) => item.productId === data?._id)
                    .cartItemId
                }
                removeProduct={removeItem}
              />
            ) : (
              <AddToCartBtn data={data} addProduct={addProduct} />
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
