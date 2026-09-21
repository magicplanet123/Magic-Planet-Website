'use client';

import Link from 'next/link';

export default function Docs() {
  const docs = [
    {
      title: 'Getting Started',
      desc: 'Get up and running in 5 minutes',
      icon: '🚀',
      content: 'Learn how to access and integrate your first tool with our step-by-step guides.'
    },
    {
      title: 'Gmail SMTP Integration',
      desc: 'Email automation & bulk sending',
      icon: '📧',
      content: 'Complete guide to setting up Gmail SMTP for automated email campaigns.'
    },
    {
      title: 'LinkedIn Scraper API',
      desc: 'Extract candidate & company data',
      icon: '💼',
      content: 'Learn to scrape LinkedIn ethically and compliantly for recruitment data.'
    },
    {
      title: 'Resume Parser',
      desc: 'Extract data from resumes automatically',
      icon: '📄',
      content: 'Parse resumes and extract skills, experience, and education programmatically.'
    },
    {
      title: 'Candidate Scoring',
      desc: 'AI-powered candidate evaluation',
      icon: '⭐',
      content: 'Use AI to score candidates objectively against job requirements.'
    },
    {
      title: 'Google Sheets Sync',
      desc: 'Real-time data synchronization',
      icon: '📊',
      content: 'Sync your tools data directly to Google Sheets for easy tracking.'
    },
    {
      title: 'Facebook Job Posting',
      desc: 'Automated job posting on social media',
      icon: '👥',
      content: 'Post jobs to Facebook automatically and reach passive candidates.'
    },
    {
      title: 'Email Verification',
      desc: 'Validate email addresses in real-time',
      icon: '✓',
      content: 'Verify email addresses before sending campaigns to reduce bounce rates.'
    },
    {
      title: 'API Reference',
      desc: 'Complete API documentation',
      icon: '⚙️',
      content: 'Full technical reference for integrating all Magic Planet tools.'
    },
    {
      title: 'Troubleshooting',
      desc: 'Common issues and solutions',
      icon: '🔧',
      content: 'Solutions to common problems and how to debug integration issues.'
    },
  ];

  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Resources & Guides</h1>
          <p className="text-xl text-slate-300">Everything you need to get the most from Magic Planet tools</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="#guides" className="glass border border-slate-700/50 p-4 rounded-lg hover:border-primary/50 transition text-center">
                <span className="text-2xl mb-2 block">📚</span>
                <span className="font-bold">Guides</span>
              </Link>
              <Link href="#api" className="glass border border-slate-700/50 p-4 rounded-lg hover:border-primary/50 transition text-center">
                <span className="text-2xl mb-2 block">⚙️</span>
                <span className="font-bold">API Docs</span>
              </Link>
              <Link href="#faq" className="glass border border-slate-700/50 p-4 rounded-lg hover:border-primary/50 transition text-center">
                <span className="text-2xl mb-2 block">❓</span>
                <span className="font-bold">FAQ</span>
              </Link>
              <Link href="/contact" className="glass border border-primary/50 p-4 rounded-lg hover:border-primary transition text-center bg-primary/5">
                <span className="text-2xl mb-2 block">💬</span>
                <span className="font-bold text-primary">Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Documentation Grid */}
          <div id="guides" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tool Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {docs.map((doc, i) => (
                <div
                  key={i}
                  className="glass border border-slate-700/50 rounded-xl p-6 card-hover group cursor-pointer"
                >
                  <div className="text-4xl mb-3">{doc.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{doc.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{doc.desc}</p>
                  <p className="text-slate-300 text-sm mb-4">{doc.content}</p>
                  <button className="text-primary hover:text-secondary transition font-medium text-sm flex items-center gap-1 group/btn">
                    Read Guide
                    <span className="group-hover/btn:translate-x-1 transition">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* API Reference */}
          <div id="api" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">API Reference</h2>
            <div className="glass border border-slate-700/50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Base URL</h3>
                  <code className="bg-slate-900 px-4 py-2 rounded block text-sm mb-4">
                    https://api.magicplanet.tools/v1
                  </code>

                  <h3 className="text-xl font-bold mb-4">Authentication</h3>
                  <p className="text-slate-300 mb-2">All requests require an API key:</p>
                  <code className="bg-slate-900 px-4 py-2 rounded block text-sm">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Rate Limits</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>✓ Free Tier: 1,000 requests/month</li>
                    <li>✓ Pro: 100,000 requests/month</li>
                    <li>✓ Enterprise: Unlimited</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I get started?',
                  a: 'Contact us through the form above and we\'ll set you up with an API key and guide you through setup.'
                },
                {
                  q: 'What are the rate limits?',
                  a: 'Free tier includes 1,000 requests/month. Pro plan has 100K/month. Enterprise plans are unlimited.'
                },
                {
                  q: 'Do you offer technical support?',
                  a: 'Yes! We provide support via email and contact form. Response time is typically 24 hours.'
                },
                {
                  q: 'Can I test before committing?',
                  a: 'Absolutely. We offer a free tier so you can test with your actual data first.'
                },
                {
                  q: 'Is my data secure?',
                  a: 'Yes. All data is encrypted in transit and at rest. We comply with GDPR and other regulations.'
                },
                {
                  q: 'How do I integrate with my systems?',
                  a: 'We provide REST APIs, webhooks, and integration guides for common platforms.'
                },
              ].map((item, i) => (
                <div key={i} className="glass border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-primary">{item.q}</h3>
                  <p className="text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass border border-primary/30 bg-primary/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-slate-300 mb-8">Our team is here to help. Get in touch and we'll answer any questions.</p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
