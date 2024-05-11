import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travel App',
  description: 'Find your next camping destination',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
