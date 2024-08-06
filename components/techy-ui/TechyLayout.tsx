import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import TechyHeader from '@/components/techy-ui/Header';
import Navigation from '@/components/techy-ui/Navigation';
import { TechyFooter } from '@/components/techy-ui/Footer';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code By Gunal',
  description: 'My protfolio',
}

const TechyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <body className={inter.className}>
      <main>
      <TechyHeader />
        <Navigation />
        {children}
        <Toaster />
        <TechyFooter />
      </main>
    </body>
  );
};

export default TechyLayout;