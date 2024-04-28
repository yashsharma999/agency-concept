import localFont from 'next/font/local';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { Button } from './ui/button';
import Link from 'next/link';

export const heroFont = localFont({
  src: '../fonts/CalSans-SemiBold.woff2',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroSection() {
  return (
    <section className='px-8 pb-40 mt-10 text-center relative'>
      <div className='grid lg:grid-cols-2 gap-4 '>
        <div className='w-full flex flex-col justify-center items-center lg:items-start'>
          <h1
            className={`text-[32px] sm:text-[48px] lg:text-[52px] max-w-[20ch] lg:text-left text-[#1f1f47] font-semibold leading-tight tracking-tighter	 ${montserrat.className}`}
          >
            {`The complete toolkit for growing your business`}
          </h1>
          <h2 className='mt-4 max-w-[40ch] lg:text-left text-[16px] lg:text-[20px] text-[#3d3d5c] '>
            Chose from our wide range of services to create your custom
            solution. Just add the service in your cart, checkout, discovery
            call and track progress.
          </h2>
          <Link href={'/products'}>
            <Button className='rounded-lg z-20 relative mt-8'>
              Explore what we offer
            </Button>
          </Link>
        </div>
        <div className='flex w-full justify-center relative'>
          <Image
            src={'/hero1.png'}
            className={'mt-10 rounded-lg relative z-10'}
            width={500}
            height={200}
          />
          <span className='absolute opacity-10 blur-xl bg-[#40a9ff] h-[500px] rounded-full w-[500px]'></span>
        </div>
      </div>

      {/* <h3 className='text md:text-lg font-bold text-slate-500 mt-8 max-w-[40ch] mx-auto'>
        Simplifying your growth journey. Chose the best solutions for a fixed
        price.
      </h3> */}

      {/* <div className='flex justify-center md:justify-between flex-wrap gap-4 my-20'>
        {[
          'Webapp Development',
          'UI/UX Design',
          'Ecommerce',
          'Email Marketing',
          'Payments Solution',
        ].map((item, i) => (
          <Badge text={item} key={i} />
        ))}
      </div> */}
      {/* <Image
        src={'/heroImg.jpeg'}
        className={'mt-10 rounded-lg'}
        width={1000}
        height={400}
      /> */}
      {/* <div
        className='absolute top-0 left-10 text-sm bg-slate-200 p-2
        rounded-lg rotate-[350deg]
      '
      >
        New website
      </div>
      <div
        className='absolute top-10 right-4 text-sm bg-slate-200 p-2
        rounded-lg rotate-12
      '
      >
        Mobile application
      </div>
      <div
        className='absolute top-40 right-4 text-sm bg-slate-200 p-2
        rounded-lg rotate-12
      '
      >
        Ecommerce solution
      </div> */}
    </section>
  );
}

const Badge = ({ text }) => {
  return (
    <div
      className='text-sm bg-slate-200 p-4
        rounded-lg font-semibold
      '
    >
      {text}
    </div>
  );
};
