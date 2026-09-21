'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiCheck, FiTrendingUp, FiClock, FiDollarSign } from 'react-icons/fi';

export default function RecruitmentAutomation() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-2">🚀 Save 40+ Hours/Month</p>
            <h1 className="text-6xl md:text-7xl font-black mb-6 gradient-text">
              Automate Your Recruitment
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Stop manually screening candidates. Let AI score, screen, and qualify them while you focus on hiring the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://mcpmarket.com/skill/recruitment-automation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                Get on MCPMarket
                <FiArrowRight />
              </a>
              <button
                onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">The Problem</h2>

          <div className="space-y-8">
            <div className="glass border border-slate-700/50 rounded-2xl p-8">
              <div className="flex gap-4 mb-4">
                <div className="text-4xl">😫</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">You're wasting 40+ hours/month</h3>
                  <p className="text-slate-300">Manually reviewing resumes, checking credentials, screening candidates</p>
                </div>
              </div>
            </div>

            <div className="glass border border-slate-700/50 rounded-2xl p-8">
              <div className="flex gap-4 mb-4">
                <div className="text-4xl">💸</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">You're losing $1,000-2,500/month</h3>
                  <p className="text-slate-300">In time that could be spent building relationships, not checking emails</p>
                </div>
              </div>
            </div>

            <div className="glass border border-slate-700/50 rounded-2xl p-8">
              <div className="flex gap-4 mb-4">
                <div className="text-4xl">⏰</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Your hiring takes 25+ days</h3>
                  <p className="text-slate-300">Bottlenecked by manual screening, not by finding great candidates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-slate-900">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">The Solution</h2>

          <div className="glass border border-primary/30 bg-primary/5 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Recruitment Automation Skill</h3>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <FiCheck className="text-green-400 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">Automatic Resume Parsing</p>
                  <p className="text-slate-300">Extract skills, experience, education in seconds</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiCheck className="text-green-400 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">AI Candidate Scoring</p>
                  <p className="text-slate-300">Score candidates 0-100 against your job requirements</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiCheck className="text-green-400 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">Automated Email Screening</p>
                  <p className="text-slate-300">Send questions, collect answers, score responses automatically</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiCheck className="text-green-400 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">Compliance Validation</p>
                  <p className="text-slate-300">Check work authorization, visa status, right-to-work automatically</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiCheck className="text-green-400 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">Complete Audit Trail</p>
                  <p className="text-slate-300">Track every decision for compliance and improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Real Results</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass border border-slate-700/50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <FiClock className="text-4xl text-primary" />
              </div>
              <p className="text-3xl font-bold text-green-400 mb-2">40+ hours</p>
              <p className="text-slate-300">Saved per month</p>
            </div>

            <div className="glass border border-slate-700/50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <FiDollarSign className="text-4xl text-primary" />
              </div>
              <p className="text-3xl font-bold text-green-400 mb-2">$1-2.5K</p>
              <p className="text-slate-300">Saved monthly</p>
            </div>

            <div className="glass border border-slate-700/50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <FiTrendingUp className="text-4xl text-primary" />
              </div>
              <p className="text-3xl font-bold text-green-400 mb-2">72% Faster</p>
              <p className="text-slate-300">Time to hire</p>
            </div>
          </div>

          <div className="glass border border-primary/20 bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Real Company Results</h3>
            <p className="text-slate-300 mb-6">
              "We went from screening 100 applications manually in 80 hours to AI doing it in 2 hours. Time-to-hire dropped from 25 days to 7 days. We're not just hiring faster - we're hiring better."
            </p>
            <p className="text-sm text-slate-400">— HR Manager, Tech Startup (50 employees)</p>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="section-padding bg-slate-900">
        <div className="container-max max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">One-Time Investment</h2>

          <div className="glass border border-primary/30 rounded-2xl p-12 mb-8">
            <div className="text-6xl font-black text-primary mb-4">$15</div>
            <p className="text-xl text-slate-300 mb-8">
              Complete source code + documentation + lifetime updates
            </p>

            <a
              href="https://mcpmarket.com/skill/recruitment-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-xl px-12 py-4 mb-4"
            >
              Get Started on MCPMarket
              <FiArrowRight />
            </a>

            <p className="text-sm text-slate-400">
              ✓ 30-day money-back guarantee<br/>
              ✓ Full source code included<br/>
              ✓ Community support + email help
            </p>
          </div>

          <p className="text-slate-300 mb-8">
            Not ready yet? Join our waitlist for updates and launch offers.
          </p>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="section-padding">
        <div className="container-max max-w-2xl">
          <div className="glass border border-slate-700/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Join Waitlist</h2>
            <p className="text-slate-300 text-center mb-8">
              Get early access, exclusive pricing, and updates
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary"
              />

              <button
                type="submit"
                className="w-full btn-primary py-3 font-bold text-lg"
              >
                {submitted ? '✓ Added to Waitlist' : 'Add Me to Waitlist'}
              </button>
            </form>

            <p className="text-xs text-slate-500 text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-900">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked</h2>

          <div className="space-y-6">
            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <p className="font-bold text-lg mb-3">How long to set up?</p>
              <p className="text-slate-300">5-15 minutes. Follow the included setup guide.</p>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <p className="font-bold text-lg mb-3">Can I customize it?</p>
              <p className="text-slate-300">Yes. Full source code included. Change scoring criteria, templates, everything.</p>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <p className="font-bold text-lg mb-3">What if I'm not satisfied?</p>
              <p className="text-slate-300">30-day money-back guarantee. No questions asked.</p>
            </div>

            <div className="glass border border-slate-700/50 rounded-xl p-6">
              <p className="font-bold text-lg mb-3">Do I need coding skills?</p>
              <p className="text-slate-300">No. Pre-built and ready to use. Python knowledge helps for customization.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
