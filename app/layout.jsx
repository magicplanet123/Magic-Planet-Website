import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Magic Planet - MCP & AI Tools Marketplace',
  description: 'Enterprise-grade MCPs and AI tools for business automation. Recruitment, data integration, web scraping, and more.',
  keywords: 'MCP, AI tools, automation, recruitment, marketplace',
  authors: [{ name: 'Magic Planet' }],
  openGraph: {
    title: 'Magic Planet - MCP & AI Tools Marketplace',
    description: 'Enterprise-grade MCPs and AI tools for business automation.',
    url: 'https://magicplanet.com',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
