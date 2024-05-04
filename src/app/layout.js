import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import bgTexture from '../assets/bgTexture.png';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });
export const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'BetterSide',
  description: 'Services for your business.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${inter.className}`}
          // style={{
          //   background: 'whitesmoke',
          // }}
        >
          <Analytics />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
