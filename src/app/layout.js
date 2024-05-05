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
  description: 'The complete toolkit for growing your business',
  keywords: [
    'Digital Marketing',
    'Artificial Intelligence',
    'Virtual Reality',
    'Web development',
    'App Development',
    'Content Creation',
    'Services',
    'Agency',
  ],
  metadataBase: new URL('https://www.betterside.fun'),
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
