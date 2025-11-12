import Navbar from '../components/Navbar';
import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Biz-Unite',
  description: 'Cooperate-Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

