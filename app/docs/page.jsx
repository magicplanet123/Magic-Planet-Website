'use client';

import Link from 'next/link';

export default function Docs() {
  const docs = [
    { title: 'Getting Started', desc: 'Set up your first MCP in 5 minutes' },
    { title: 'Gmail SMTP Integration', desc: 'Email automation guide' },
    { title: 'LinkedIn Scraper', desc: 'Extract candidate data ethically' },
    { title: 'Resume Parser', desc: 'Parse and extract resume data' },
    { title: 'Candidate Scoring', desc: 'AI-powered candidate evaluation' },
    { title: 'Google Sheets Sync', desc: 'Real-time data synchronization' },
    { title: 'Facebook Posting', desc: 'Automate job postings' },
    { title: 'Compliance Validator', desc: 'Work authorization checks' },
    { title: 'API Reference', desc: 'Complete API documentation' },
    { title: 'Troubleshooting', desc: 'Common issues and solutions' },
  ];

  return (
    <div>
      <section className="section-padding bg-slate-900">
        <div className="container-max">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-slate-400">Everything you need to get started with Magic Planet tools</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-6">
            {docs.map((doc, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 card-hover hover:bg-slate-700"
              >
                <h3 className="font-bold mb-2">{doc.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{doc.desc}</p>
                <a href="#" className="text-primary hover:text-secondary transition font-medium">
                  Read Guide →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't Find What You Need?</h2>
            <p className="text-slate-400 mb-6">Join our community forum or reach out to support</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community" className="btn-primary">Join Community</Link>
              <Link href="/contact" className="btn-secondary">Contact Support</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
