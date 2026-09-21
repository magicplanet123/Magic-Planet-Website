import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Magic Planet Tools - Free & Freemium AI Automation Tools',
  description: 'Magic Planet Tools: 50+ free and freemium AI tools for business automation. Email verification, web scraping, recruitment automation, content generation, data integration, and more. Free tier + paid subscriptions.',
  keywords: 'free tools, AI tools, automation tools, recruitment automation, data integration, web scraping, business automation, freemium tools, email tools, SaaS tools',
  authors: [{ name: 'Magic Planet' }],
  openGraph: {
    title: 'Magic Planet Tools - Free AI Automation Platform',
    description: '50+ free and freemium tools for automation. Try free today.',
    url: 'https://magicplanettools.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="bg-dark text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
