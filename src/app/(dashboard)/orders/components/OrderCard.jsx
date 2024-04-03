import React from 'react';

export default function OrderCard({ data }) {
  return (
    <div className='border-[1px] bg-white mb-4 border-slate-200 flex items-start p-4 rounded-md gap-4'>
      <h1>
        Order ID: <span className='font-bold'>{data?.id || ''}</span>
      </h1>
    </div>
  );
}
