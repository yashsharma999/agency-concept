import React from 'react';
import SubMenu from './common/SubMenu';
import { Button } from './ui/button';

export default function CTA() {
  return (
    <section className='flex py-[100px] px-4 text-center flex-col items-center'>
      <SubMenu label={'Ready to grow?'} />
      <p className='md:text-[18px] lg:text-[20px] font-light relative'>
        {/* <span className='absolute translate-y-[-80%] left-[-300px] opacity-10 blur-2xl  bg-[#40a9ff] h-[500px] rounded-full w-[500px]'></span> */}
        Chose the best services for your next big idea. <br />
        Keeping it simple making it exceptional
      </p>
      <Button className='mt-8'>Get Started</Button>
    </section>
  );
}
