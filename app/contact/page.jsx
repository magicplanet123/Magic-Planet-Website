'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to backend/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div>
      <section className="section-padding bg-slate-900">
        <div className="container-max">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-400">Get in touch with our team</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows="6"
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-primary resize-none"
                    required
                  />
                </div>

                {submitted && (
                  <div className="bg-green-900/30 border border-green-700 text-green-300 p-4 rounded">
                    Thanks for reaching out! We'll get back to you soon.
                  </div>
                )}

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <FiMail className="text-primary text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:support@magicplanet.com" className="text-slate-400 hover:text-primary">
                      support@magicplanet.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiPhone className="text-primary text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-slate-400 hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiMapPin className="text-primary text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Office</h3>
                    <p className="text-slate-400">
                      Remote-First<br />
                      Serving Global Clients
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="font-bold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>Monday - Friday: 9 AM - 6 PM (UTC)</p>
                  <p>Saturday - Sunday: Available for emergencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
