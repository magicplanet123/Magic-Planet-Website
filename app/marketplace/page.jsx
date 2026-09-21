'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiFilter, FiSearch } from 'react-icons/fi';

export default function Marketplace() {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');

  useEffect(() => {
    fetch('/data/tools.json')
      .then(res => res.json())
      .then(data => {
        setTools(data.tools);
        setFilteredTools(data.tools);
      });
  }, []);

  useEffect(() => {
    let filtered = tools;

    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    if (selectedPricing !== 'All') {
      filtered = filtered.filter(tool =>
        selectedPricing === 'Free' ? tool.pricing.includes('Free') : tool.pricing !== 'Free'
      );
    }

    setFilteredTools(filtered);
  }, [searchTerm, selectedCategory, selectedPricing, tools]);

  const categories = ['All', ...new Set(tools.map(t => t.category))];
  const pricingOptions = ['All', 'Free', 'Paid'];

  return (
    <div>
      <section className="section-padding bg-slate-900">
        <div className="container-max">
          <h1 className="text-4xl font-bold mb-4">Tool Marketplace</h1>
          <p className="text-slate-400">Discover production-ready MCPs and AI tools</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="md:col-span-1">
              <div className="bg-slate-800 rounded-lg p-6 sticky top-24">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <FiFilter /> Filters
                </h3>

                <div className="mb-6">
                  <label className="text-sm font-medium text-slate-400 mb-3 block">Search</label>
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium text-slate-400 mb-3 block">Category</label>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-400 mb-3 block">Pricing</label>
                  <div className="space-y-2">
                    {pricingOptions.map(option => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="pricing"
                          value={option}
                          checked={selectedPricing === option}
                          onChange={(e) => setSelectedPricing(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="md:col-span-3">
              <div className="text-sm text-slate-400 mb-6">
                Showing {filteredTools.length} of {tools.length} tools
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredTools.map(tool => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="bg-slate-800 border border-slate-700 rounded-lg p-6 card-hover group"
                  >
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold group-hover:text-primary transition">{tool.name}</h3>
                        {tool.trending && <span className="badge bg-secondary/20 text-secondary">TRENDING</span>}
                      </div>
                      <p className="text-slate-400 text-xs">{tool.category}</p>
                    </div>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{tool.description}</p>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-yellow-400">⭐ {tool.rating}</span>
                      <span className="text-slate-500">📥 {tool.downloads.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-primary font-medium">{tool.pricing}</span>
                      <span className="text-slate-400 group-hover:text-primary transition">View →</span>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-400">No tools found matching your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
