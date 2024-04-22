import ContactUsSheet from '@/components/ContactUsSheet';
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
    <div className={`max-w-5xl mx-auto pb-4 `}>
      <Navigation menu={homeNavMenu} />
      <HeroSection />
      <HowItWorks />
      <Projects />
      <ServicesOffered />
      <Footer />
      {/* <HandleNext /> */}
    </div>
  );
}
