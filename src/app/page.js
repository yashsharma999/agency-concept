import ContactUsSheet from '@/components/ContactUsSheet';
import CTA from '@/components/CTA';
import { FAQ } from '@/components/FAQ';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import ServicesOffered from '@/components/ServicesOffered';
import { homeNavMenu } from '@/constants';
import { montserrat } from './layout';

export default function Home() {
  return (
    <div className={``}>
      <div className='bg-[#f9f9fb]'>
        <div className='max-w-[1200px] mx-auto pb-4  '>
          <Navigation menu={homeNavMenu} />
          <HeroSection />
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto pb-4  '>
        {/* <HowItWorks /> */}
        <FAQ />
        <CTA />
        {/* <Projects /> */}
        {/* <ServicesOffered /> */}
      </div>
      <div className='bg-[#f9f9fb]'>
        <div className='max-w-[1200px] mx-auto pb-4'>
          <Footer />
        </div>
      </div>

      {/* <HandleNext /> */}
    </div>
  );
}
