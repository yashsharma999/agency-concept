import React from 'react';
import { heroFont } from '../HeroSection';

export default function SubMenu({ label }) {
  return (
    <h1
      className={`text-[28px] md:text-[36px] lg:text-[48px] my-4 font-bold text-[#1f1f47] text-center  ${heroFont.className}`}
    >
      {label}
    </h1>
  );
}
