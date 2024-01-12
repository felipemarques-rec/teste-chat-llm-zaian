import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import ThemeProvider from '@/components/theme-provider';

import './globals.css';

const font = Space_Grotesk({ subsets: ['latin'], variable: '--font' });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Chat LLM Zaian',
  description: 'Chat LLM Zaian',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" id="mode" suppressHydrationWarning>
      <body className={`${font.className} dark:bg-neutral-950 bg-white dark:text-neutral-200`}>
        <ThemeProvider>
          <main>
            <Toaster />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
