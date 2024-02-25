import ContactUsSheet from '@/components/ContactUsSheet';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import { homeNavMenu } from '@/constants';

export default function Home() {
  return (
    <div className='max-w-5xl mx-auto py-4'>
      <Navigation menu={homeNavMenu} />
      <HeroSection />
      {/* <HandleNext /> */}
    </div>
  );
}
