import React from 'react';
import { Button } from './ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';

export default function ViewDetails({ data }) {
  const { id, title, description, categories: categoryArr, icon } = data || {};
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='secondary' className='w-full'>
          View details
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {title}
            &nbsp;
            <span className='text-[30px]'>{icon}</span>
          </DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
