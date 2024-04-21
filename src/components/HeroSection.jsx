import localFont from 'next/font/local';
import Image from 'next/image';

export const heroFont = localFont({
  src: '../fonts/CalSans-SemiBold.woff2',
});

export default function HeroSection() {
  return (
    <section className='font-cal px-2 mt-20 text-center relative'>
      <h1
        className={`font-bold text-[52px] md:text-[80px]  ${heroFont.className}`}
      >
        {`Towards better solutions`}
      </h1>
      <h2 className='mt-4 text-[20px] md:text-[24px] font-light'>
        Keeping It Simple, Making It Exceptional
      </h2>
      {/* <h3 className='text md:text-lg font-bold text-slate-500 mt-8 max-w-[40ch] mx-auto'>
        Simplifying your growth journey. Chose the best solutions for a fixed
        price.
      </h3> */}

      <div className='flex justify-center md:justify-between flex-wrap gap-4 my-20'>
        {[
          'Webapp Development',
          'UI/UX Design',
          'Ecommerce',
          'Email Marketing',
          'Payments Solution',
        ].map((item, i) => (
          <Badge text={item} key={i} />
        ))}
      </div>
      <Image
        src={'/heroImg.jpeg'}
        className={'mt-10 rounded-lg'}
        width={1000}
        height={400}
      />
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
