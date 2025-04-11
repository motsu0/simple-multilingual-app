import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TOP',
  description: 'top page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className='bg-slate-300'>{children}</body>
    </html>
  );
}
