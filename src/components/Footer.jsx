import Link from 'next/link';
import React from 'react';
import Logo from './common/Logo';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className='px-4 my-4'>
      <Separator className='mb-4' />
      <div className='w-full flex justify-between'>
        <Logo />
        <div className='flex flex-col gap-2'>
          <Link href={'#'}>{`Terms & Conditions`}</Link>
          <Link href={'#'}>{`Privacy Policy`}</Link>
        </div>
      </div>
    </footer>
  );
}
