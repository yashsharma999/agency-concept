import Navigation from '@/components/Navigation';
import { homeNavMenu } from '@/constants';
import React from 'react';

export default function layout({ children }) {
  return <div className='max-w-[1200px] mx-auto pb-4 py-4 '>{children}</div>;
}
