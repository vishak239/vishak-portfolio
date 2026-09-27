import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Vishak — AI Engineer | Python Developer | AI / ML',
  description:
    'Personal cinematic portfolio of Vishak, an AI Engineer, Python Developer, and AI/ML practitioner building intelligent systems, computer vision models, and predictive applications.',
  keywords: [
    'Vishak',
    'AI Engineer',
    'Python Developer',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'PrepPitch',
    'OpenCV',
    'Django',
    'Portfolio'
  ],
  authors: [{ name: 'Vishak' }],
  creator: 'Vishak',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Vishak — AI Engineer | Python Developer | AI / ML',
    description:
      'Personal cinematic portfolio of Vishak, an AI Engineer, Python Developer, and AI/ML practitioner building intelligent systems, computer vision models, and predictive applications.',
    siteName: 'Vishak Portfolio',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1706,
        height: 2560,
        alt: 'Vishak — AI Engineer Editorial Portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishak — AI Engineer | Python Developer | AI / ML',
    description:
      'Building intelligence. Creating what\'s next. Personal cinematic portfolio of Vishak.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${playfair.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="bg-surface text-cinematic-text font-sans antialiased min-h-screen selection:bg-gold-primary selection:text-black">
        {/* Subtle atmospheric film grain overlay */}
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
