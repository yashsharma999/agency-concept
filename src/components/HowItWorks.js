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
    <section id='how-it-works' className='px-4 mt-10 pb-4'>
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
    <Card>
      <CardContent className='p-4'>
        <CardTitle className='my-4'>{`${step}. ${title}`}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
