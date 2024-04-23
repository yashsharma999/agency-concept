import Link from 'next/link';
import React from 'react';
import SubMenu from './common/SubMenu';
import { Button } from './ui/button';

export default function ServicesOffered() {
  return (
    <section className='px-4 mt-10 pb-4'>
      <SubMenu label={'Our Services'} />
      <div className='text-center grid grid-cols-3 gap-4'>
        {servicesArr?.map((item, i) => (
          <div className='p-4 rounded-md bg-sky-200	' key={i}>
            {item.title}
          </div>
        ))}
      </div>
      <div className='mt-8 flex justify-center '>
        <Link href={'/products'}>
          <Button className='rounded-lg'>Explore More</Button>
        </Link>
      </div>
    </section>
  );
}

const servicesArr = [
  { title: 'Web Development' },
  { title: 'UI/UX Design' },
  {
    title: 'Ecommerce',
  },
  {
    title: 'Marketing & Content',
  },
  {
    title: 'Mobile Development',
  },
  {
    title: 'AI Integrations',
  },
];
