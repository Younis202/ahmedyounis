"use client";
import './globals.css';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Define the font using localFont - note the paths should be relative to your project root
const catavalo = localFont({
  src: [
    {
      path: './fonts/Catavalo-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Catavalo-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Catavalo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Catavalo-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Catavalo-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Catavalo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-catavalo',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <html lang="en" suppressHydrationWarning className={catavalo.variable}>
      <body className="font-sans bg-background antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <div className="relative min-h-screen flex flex-col">
            {mounted ? (
              <>
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </>
            ) : (
              <div className="flex-grow flex items-center justify-center">
                <div className="animate-pulse">Loading...</div>
              </div>
            )}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}