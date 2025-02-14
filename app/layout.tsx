import { ThemeProvider } from '@/components/theme-provider';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import NavBar from '@/components/navbar/NavBar';
import { ToastProvider } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`${inter.variable} flex min-h-screen flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Toaster />
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
