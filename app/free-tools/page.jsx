'use client';

import Link from 'next/link';
import { FiDownload, FiArrowRight, FiZap } from 'react-icons/fi';

export default function FreeTools() {
  const freeTools = [
    {
      id: 1,
      name: 'Email Validator',
      description: 'Check if email addresses are valid and deliverable',
      category: 'Email',
      url: '/tools/email-validator'
    },
    {
      id: 2,
      name: 'URL Shortener',
      description: 'Create short, trackable URLs instantly',
      category: 'Web Tools',
      url: '/tools/url-shortener'
    },
    {
      id: 3,
      name: 'QR Code Generator',
      description: 'Generate custom QR codes for any content',
      category: 'Web Tools',
      url: '/tools/qr-code'
    },
    {
      id: 4,
      name: 'CSV to JSON',
      description: 'Convert CSV files to JSON format instantly',
      category: 'Data',
      url: '/tools/csv-json'
    },
    {
      id: 5,
      name: 'JSON Formatter',
      description: 'Format and validate JSON files beautifully',
      category: 'Data',
      url: '/tools/json-formatter'
    },
    {
      id: 6,
      name: 'Password Generator',
      description: 'Generate secure, random passwords',
      category: 'Security',
      url: '/tools/password-generator'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Free Tools</h1>
          <p className="text-xl text-slate-300">
            50+ completely free tools for your business. No credit card required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeTools.map(tool => (
              <Link key={tool.id} href={tool.url}>
                <div className="glass border border-slate-700/50 rounded-2xl p-6 card-hover group h-full flex flex-col cursor-pointer">
                  <div className="text-4xl mb-3 group-hover:animate-float">🛠️</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{tool.name}</h3>
                  <p className="text-slate-400 text-sm mb-3 flex-1">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs badge">{tool.category}</span>
                    <FiArrowRight className="text-primary group-hover:translate-x-2 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-300 mb-6">More tools coming soon...</p>
            <Link href="/marketplace" className="btn-primary inline-flex items-center gap-2">
              <FiZap />
              Explore Premium Tools
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
