import CartBtn from '@/components/CartBtn';
import Logo from '@/components/common/Logo';
import Navigation from '@/components/Navigation';
import { appMenu } from '@/constants';
import { AccountBtn } from '@/constants/menu';
import AppProviders from '@/providers';
import { Montserrat } from 'next/font/google';
export const montserrat = Montserrat({ subsets: ['latin'] });

export default function DashboardLayout({ children }) {
  return (
    <AppProviders>
      <div className={`max-w-5xl px-4 mx-auto  pb-4 ${montserrat.className}`}>
        <div className='hidden md:block fixed top-0 left-0 z-20 bg-white'>
          <Navigation menu={appMenu} />
        </div>
        <div className='md:hidden bg-white w-full fixed top-0 left-0 z-20'>
          <div className='shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] flex px-4 py-3 -white w-full justify-between items-center'>
            <Logo />
            <div className='flex items-center gap-4'>
              <CartBtn />
              <AccountBtn />
            </div>
          </div>
        </div>

        <div className='z-20 bg-white md:hidden shadow-[0_-5px_60px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] fixed bottom-0 left-[50%] translate-x-[-50%]'>
          <Navigation menu={appMenu} />
        </div>
        <div className='pt-12 pb-16 md:pb-6 md:pt-16'>{children}</div>
      </div>
    </AppProviders>
  );
}
