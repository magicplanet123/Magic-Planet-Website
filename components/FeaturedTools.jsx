'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiStar, FiDownload, FiArrowRight } from 'react-icons/fi';

export default function FeaturedTools() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/data/tools.json')
      .then(res => res.json())
      .then(data => setTools(data.tools.slice(0, 3)));
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <span className="badge mb-4 inline-block">✨ Premium Features</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Featured Tools</h2>
          <p className="text-xl text-slate-300">Most popular MCPs built by Magic Planet</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, idx) => (
            <Link key={tool.id} href={`/tools/${tool.id}`}>
              <div
                className="glass border border-slate-700/50 rounded-2xl p-8 card-hover h-full flex flex-col cursor-pointer group"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="mb-6 relative">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-secondary/40 transition">
                    <div className="text-7xl group-hover:animate-float">📦</div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition">{tool.name}</h3>
                      <p className="text-primary text-sm font-medium">{tool.category}</p>
                    </div>
                    {tool.trending && (
                      <span className="neon-glow bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        🔥 TRENDING
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">{tool.description}</p>

                  <div className="flex items-center gap-6 text-sm text-slate-300 mb-6 pb-6 border-b border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <FiStar className="text-yellow-400 text-lg" />
                      <span className="font-semibold">{tool.rating}/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiDownload className="text-primary" />
                      <span className="font-semibold">{tool.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full btn-primary flex items-center justify-center gap-2 group/btn">
                  View Details
                  <FiArrowRight className="group-hover/btn:translate-x-2 transition" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/marketplace" className="btn-primary inline-flex items-center gap-2 text-lg">
            Browse All {tools.length * 2}+ Tools
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
