import React from 'react';
import Logo from './common/Logo';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className='px-4 my-4'>
      <Separator className='mb-4' />
      <Logo />
    </footer>
  );
}
