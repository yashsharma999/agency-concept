import CartBtn from '@/components/CartBtn';
import Navigation from '@/components/Navigation';
import { appMenu } from '@/constants';
import AppProviders from '@/providers';
import { Montserrat } from 'next/font/google';
export const montserrat = Montserrat({ subsets: ['latin'] });

export default function DashboardLayout({ children }) {
  return (
    <AppProviders>
      <div className={`max-w-5xl px-4 mx-auto py-4 ${montserrat.className}`}>
        <Navigation menu={appMenu} />
        {children}
      </div>
    </AppProviders>
  );
}
