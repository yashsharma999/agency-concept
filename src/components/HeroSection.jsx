import localFont from 'next/font/local';

const heroFont = localFont({
  src: '../fonts/CalSans-SemiBold.woff2',
});

export default function HeroSection() {
  return (
    <section className='font-cal text-[62px] mt-10 text-center'>
      <h1
        className={`font-bold ${heroFont.className}`}
      >{`Drop It. Get Quote. Let's go!`}</h1>
      <h2 className='text-[24px] font-light'>
        Keeping It Simple, Making It Exceptional
      </h2>
    </section>
  );
}
