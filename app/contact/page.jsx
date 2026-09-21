'use client';

import { useState } from 'react';
import { FiMail, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    toolInterest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log form submission (in production, send to backend/email service)
    console.log('Contact Form Submission:', formData);

    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        toolInterest: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const tools = [
    'Gmail SMTP Integration',
    'LinkedIn Scraper',
    'Resume Parser',
    'Candidate Scoring',
    'Google Sheets Sync',
    'Facebook Job Poster',
    'Email Generator',
    'Compliance Validator',
    'Web Scraping Framework',
    'AI Content Generator',
    'PDF Generator',
    'Database Migration',
    'Rate Limiter',
    'Notifications Gateway',
    'Job Board Syndication',
    'Video Interview Analyzer',
    'Skill Matcher',
    'Email Verification',
    'Salary Benchmarking',
    'Other',
  ];

  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Get In Touch</h1>
          <p className="text-xl text-slate-300">Have questions? Want to request a tool? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="glass border border-slate-700/50 rounded-2xl p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-block mb-6">
                  <FiCheckCircle className="text-6xl text-green-400 animate-bounce" />
                </div>
                <h2 className="text-3xl font-bold mb-3 gradient-text">Thank You!</h2>
                <p className="text-lg text-slate-300 mb-2">Your message has been received.</p>
                <p className="text-slate-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-slate-200">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full glass px-6 py-3 rounded-lg border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-slate-200">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full glass px-6 py-3 rounded-lg border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-slate-200">Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full glass px-6 py-3 rounded-lg border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition"
                  />
                </div>

                {/* Tool Interest */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-slate-200">Interested In *</label>
                  <select
                    name="toolInterest"
                    value={formData.toolInterest}
                    onChange={handleChange}
                    className="w-full glass px-6 py-3 rounded-lg border border-slate-600/50 text-white focus:outline-none focus:border-primary transition bg-slate-800"
                    required
                  >
                    <option value="">Select a tool or option...</option>
                    {tools.map(tool => (
                      <option key={tool} value={tool} className="bg-slate-800">
                        {tool}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-slate-200">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows="6"
                    className="w-full glass px-6 py-3 rounded-lg border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 font-bold text-lg flex items-center justify-center gap-2"
                >
                  <FiMail />
                  Send Message
                </button>

                <p className="text-center text-slate-400 text-sm">
                  We'll respond to your email within 24 hours. All fields marked with * are required.
                </p>
              </form>
            )}
          </div>

          {/* Info Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="glass border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Response Time</h3>
              <p className="text-slate-300">We typically respond within 24 hours during business days.</p>
            </div>

            <div className="glass border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">What We Help With</h3>
              <ul className="text-slate-300 space-y-2">
                <li>✓ Tool inquiries</li>
                <li>✓ Integration questions</li>
                <li>✓ Feature requests</li>
                <li>✓ Support issues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
