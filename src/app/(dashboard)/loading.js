import Shimmers from '@/components/Shimmers';
import React from 'react';

export default function loading() {
  return (
    <div className={`max-w-5xl px-4 mx-auto py-4`}>
      <div className='h-[calc(100vh-150px)] flex justify-center items-center'>
        <Shimmers />
      </div>
    </div>
  );
}
