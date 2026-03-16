import type {Metadata} from 'next';
import { Instrument_Serif, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Radsfinds | Tech Tips & Tutorials',
  description: 'Radhika Khanna | Tech Tips & Tutorials. Premium Gadgets, Cool Accessories, Smart hacks & Tutorials.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-[#F4F4F2] text-[#1A1A1A] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
