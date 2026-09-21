'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiTrendingUp } from 'react-icons/fi';

export default function TrendingTools() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/data/tools.json')
      .then(res => res.json())
      .then(data => setTools(data.tools.filter(t => t.trending)));
  }, []);

  return (
    <section className="section-padding bg-slate-900">
      <div className="container-max">
        <div className="flex items-center gap-2 mb-8">
          <FiTrendingUp className="text-2xl text-secondary" />
          <h2 className="text-3xl font-bold">Trending This Week</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map(tool => (
            <div
              key={tool.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 card-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold">{tool.name}</h3>
                  <p className="text-slate-400 text-sm">{tool.tagline}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4">{tool.description.substring(0, 80)}...</p>

              <div className="flex items-center justify-between">
                <span className="badge">{tool.category}</span>
                <Link
                  href={`/tools/${tool.id}`}
                  className="text-primary hover:text-secondary transition font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
