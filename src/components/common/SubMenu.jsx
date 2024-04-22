import React from 'react';
import { heroFont } from '../HeroSection';

export default function SubMenu({ label }) {
  return (
    <h1
      className={`text-[32px] my-4 font-bold text-slate-600  ${heroFont.className}`}
    >
      {label}
    </h1>
  );
}
