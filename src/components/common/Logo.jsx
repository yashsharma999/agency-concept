import Link from 'next/link';
import React from 'react';
import { heroFont } from '../HeroSection';

export default function Logo() {
  return (
    <Link href={'/'}>
      <h1 className={`text-xl ${heroFont.className}`}>BetterSide</h1>
    </Link>
  );
}
