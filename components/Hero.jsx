'use client';

import Link from 'next/link';
import { FiArrowRight, FiZap, FiCpu } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container-max relative z-10">
        <div className="mb-8 inline-block animate-slide-in">
          <span className="badge">
            ✨ Free & Freemium Tools for Everyone
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text leading-tight tracking-tight animate-slide-in" style={{animationDelay: '0.1s'}}>
          AI Automation <br />Tools For Teams
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light animate-slide-in" style={{animationDelay: '0.2s'}}>
          50+ production-ready tools for business automation. Start free, upgrade as you scale. From recruitment to web scraping, we've got you covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in" style={{animationDelay: '0.3s'}}>
          <Link href="/marketplace" className="btn-primary flex items-center justify-center gap-2 group">
            <FiZap className="group-hover:animate-spin" />
            Explore All Tools
            <FiArrowRight className="group-hover:translate-x-2 transition" />
          </Link>
          <Link href="/docs" className="btn-secondary flex items-center justify-center gap-2">
            <FiCpu className="mr-2" />
            View Documentation
          </Link>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
          {[
            { number: '50+', text: 'Tools Available', icon: '⚡' },
            { number: '100K+', text: 'Active Users', icon: '🌍' },
            { number: '99.9%', text: 'Uptime SLA', icon: '🛡️' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass p-8 rounded-2xl border border-slate-700/50 card-hover group cursor-pointer"
              style={{animationDelay: `${0.4 + i * 0.1}s`}}
            >
              <div className="text-5xl mb-3 group-hover:animate-float">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-slate-300 font-medium">{stat.text}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
