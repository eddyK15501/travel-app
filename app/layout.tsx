import type { Metadata } from 'next';
import './globals.css';

import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pepe Travel App',
  description: 'Find your next camping destination',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
