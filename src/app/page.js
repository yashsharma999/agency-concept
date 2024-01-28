import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className='max-w-5xl mx-auto py-4'>
      <Navigation />
      <HeroSection />
    </div>
  );
}
