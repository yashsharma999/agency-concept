import React from 'react';
import SubMenu from './common/SubMenu';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='px-4 mt-10 py-8'>
      <SubMenu label={'How it works'} />

      <div className='grid md:grid-cols-3 gap-4'>
        {stepsArr?.map((item, i) => (
          <InfoCard
            key={i}
            step={i + 1}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
    </section>
  );
}

const stepsArr = [
  {
    title: 'Select services',
    desc: 'Chose your solution from the list of provided services.',
  },
  {
    title: 'Place an order',
    desc: `Checkout the cart to place an order and view the estimated costs.`,
  },
  {
    title: 'Discovery call',
    desc: `Our team will schedule a discovery call to understand the project
  requirements.`,
  },
];

const InfoCard = ({ step, title, description }) => {
  return (
    <Card className='relative before:absolute before:-inset-px before:rounded-2xl rounded-2xl before:bg-[linear-gradient(to_right,#EEDDE7_0%,#EDEDF3_100%)]'>
      <CardContent className='p-4 bg-[#F8F9FB] relative z-10 h-full rounded-2xl flex flex-col  pt-5 pb-[42px] xl:pb-8 lg:pt-[20px] lg:pb-[30px]'>
        <CardTitle className='my-4 font-normal text-xl text-[#1f1f47]'>{`${step}. ${title}`}</CardTitle>
        <CardDescription className='text-[#3d3d5c] font-light'>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
