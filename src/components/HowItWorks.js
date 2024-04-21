import React from 'react';

export default function HowItWorks() {
  return (
    <section className='px-4 mt-10 '>
      <h1 className='text-2xl my-4 font-bold'>How it works</h1>
      <div className='flex gap-2 items-center'>
        <ol className='flex flex-col gap-2'>
          <li>1. Chose your solution from the list of provided services.</li>
          <li>
            2. Checkout the cart to place an order and view the estimated costs.
          </li>
          <li>
            3. Our team will schedule a discovery call to understand the project
            requirements.
          </li>
        </ol>
      </div>
    </section>
  );
}
