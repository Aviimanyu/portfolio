import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0F172A',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://abhimanyu.dev'),
  title: 'Abhimanyu Kumar - Full Stack Developer & SEO Consultant',
  description: 'Full Stack Developer & SEO Consultant. Building fast websites, scalable systems, and SEO-driven platforms for startups and businesses. 6+ years of experience.',
  keywords: [
    'Full Stack Developer',
    'SEO Consultant',
    'WordPress Developer',
    'Next.js Developer',
    'Technical SEO',
    'Web Development India',
    'Website Optimization',
  ],
  authors: [
    {
      name: 'Abhimanyu Kumar',
      url: 'https://abhimanyu.dev',
    },
  ],
  creator: 'Abhimanyu Kumar',
  publisher: 'Abhimanyu Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhimanyu.dev',
    siteName: 'Abhimanyu Kumar',
    title: 'Abhimanyu Kumar - Full Stack Developer & SEO Consultant',
    description: 'Full Stack Developer & SEO Consultant. Building fast websites, scalable systems, and SEO-driven platforms.',
    images: [
      {
        url: 'https://abhimanyu.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abhimanyu Kumar - Full Stack Developer & SEO Consultant',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhimanyu Kumar - Full Stack Developer & SEO Consultant',
    description: 'Full Stack Developer & SEO Consultant. Building fast websites, scalable systems.',
    images: ['https://abhimanyu.dev/og-image.png'],
    creator: '@abhimanyukumar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://abhimanyu.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/cookieyes@3.0.1/cookieyes.umd.js"
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
