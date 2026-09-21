import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Magic Planet MCP Marketplace - Enterprise AI & Automation Tools',
  description: 'Magic Planet MCP Marketplace: Enterprise-grade Model Context Protocols and AI tools for business automation. Recruitment, data integration, web scraping, and more. Free 3-7 day trials.',
  keywords: 'MCP marketplace, AI tools, automation tools, recruitment automation, data integration, web scraping, business automation, free tools',
  authors: [{ name: 'Magic Planet' }],
  openGraph: {
    title: 'Magic Planet MCP Marketplace',
    description: 'Enterprise AI tools for business automation. Try free for 3-7 days.',
    url: 'https://mcp-marketplace.vercel.app',
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
