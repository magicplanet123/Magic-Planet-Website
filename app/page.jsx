'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiTrendingUp, FiUsers } from 'react-icons/fi';
import Hero from '@/components/Hero';
import FeaturedTools from '@/components/FeaturedTools';
import Stats from '@/components/Stats';
import TrendingTools from '@/components/TrendingTools';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <section className="section-padding bg-slate-900">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-4 text-center">Why Magic Planet?</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Trusted by companies worldwide for reliable, production-ready MCP tools and AI solutions.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🚀', title: 'Production Ready', desc: 'Battle-tested in real environments' },
              { icon: '📚', title: 'Well Documented', desc: 'Comprehensive guides and examples' },
              { icon: '💰', title: '$0 Start', desc: 'Free tier options for all tools' },
              { icon: '⚡', title: '24/7 Support', desc: 'Active community and support team' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedTools />
      <Stats />
      <TrendingTools />
      <CTA />
    </div>
  );
}
