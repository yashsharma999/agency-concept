import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';

export default function ProductCard({ data }) {
  return (
    <Card className={`max-w-[250px] flex flex-col justify-between`}>
      <CardHeader>
        <Image
          src={'/webDev.jpg'}
          className='w-full rounded-md mb-1'
          width={400}
          height={300}
          alt='web dev'
        />
        <CardTitle className='text-[18px]'>{data?.title}</CardTitle>
        <CardDescription>{data?.description}</CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between'>
        <div className='flex flex-col'>
          <p>{`$ ${data?.price[0]}`}</p>
          <p className='line-through text-sm text-slate-400'>{`$ ${data?.price[1]}`}</p>
        </div>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
