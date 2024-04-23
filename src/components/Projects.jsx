import Link from 'next/link';
import React from 'react';
import SubMenu from './common/SubMenu';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function Projects() {
  return (
    <section className='px-4 mt-10 pb-4'>
      <SubMenu label={'Projects completed'} />
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {arr?.map((project, i) => (
          <ProjectCard
            key={i}
            title={project?.title}
            description={project?.desc}
            list={project?.list}
            link={project?.link}
          />
        ))}
        <Card className='border-black border-dashed bg-slate-50'>
          <CardContent className='pt-4'>
            <CardTitle className='my-2 text-slate-300'>
              {'Your Project'}
            </CardTitle>
            <CardDescription className='my-2 mb-4 text-slate-300'>
              {'Your next big idea'}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

const arr = [
  {
    title: 'FixDepartures',
    desc: 'Group flight booking solution',
    list: ['Marketing', 'Web Development', 'Payments Solution', 'Branding'],
    link: 'https://www.fixdepartures.com/',
  },
];

const ProjectCard = ({ title, description, list, link }) => {
  return (
    <Card>
      <CardContent className='pt-4'>
        <CardTitle className='my-2'>{title}</CardTitle>
        <CardDescription className='my-2 mb-4'>{description}</CardDescription>
        <div className='flex gap-2 flex-wrap'>
          {list?.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link className='w-full' href={link} target='_blank'>
          <Button className='w-2/3' variant='outline'>
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
