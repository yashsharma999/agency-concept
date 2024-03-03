import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import bgTexture from '../assets/bgTexture.png';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });
export const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Drop-It Joy',
  description: 'Curate your solution. Just drag and drop!',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
