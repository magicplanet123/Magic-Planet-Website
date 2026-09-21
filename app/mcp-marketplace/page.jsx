'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiDownload, FiExternalLink, FiStar, FiTrendingUp } from 'react-icons/fi';

export default function MCPMarketplace() {
  const [mcps, setMcps] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All MCPs', count: 0 },
    { id: 'ai', label: 'AI & LLM', count: 0 },
    { id: 'data', label: 'Data Integration', count: 0 },
    { id: 'productivity', label: 'Productivity', count: 0 },
    { id: 'web', label: 'Web & APIs', count: 0 },
  ];

  const allMcps = [
    {
      id: 1,
      name: 'ElevenLabs Text-to-Speech',
      category: 'ai',
      description: 'Generate natural-sounding speech from text using ElevenLabs API',
      rating: 4.8,
      downloads: 12500,
      mcpmarketUrl: 'https://mcpmarket.com/server/elevenlabs',
      features: ['TTS conversion', 'Multi-language', 'Voice selection'],
      free: true,
      setup_time: '5 min'
    },
    {
      id: 2,
      name: 'DuckDuckGo Search',
      category: 'web',
      description: 'Search the web using DuckDuckGo with no tracking',
      rating: 4.9,
      downloads: 28000,
      mcpmarketUrl: 'https://mcpmarket.com/server/duckduckgo-9',
      features: ['Web search', 'No tracking', 'Anonymous'],
      free: true,
      setup_time: '2 min'
    },
    {
      id: 3,
      name: 'Figma Design Tool',
      category: 'productivity',
      description: 'Access and manipulate Figma designs directly from Claude',
      rating: 4.7,
      downloads: 15200,
      mcpmarketUrl: 'https://mcpmarket.com/server/figma-24',
      features: ['Design access', 'Asset export', 'Prototyping'],
      free: true,
      setup_time: '10 min'
    },
    {
      id: 4,
      name: 'GitHub Repository Access',
      category: 'data',
      description: 'Browse and analyze GitHub repositories with Claude',
      rating: 4.9,
      downloads: 35400,
      mcpmarketUrl: 'https://mcpmarket.com/server/github',
      features: ['Repo browsing', 'Code analysis', 'Issue tracking'],
      free: true,
      setup_time: '8 min'
    },
    {
      id: 5,
      name: 'Slack Team Access',
      category: 'productivity',
      description: 'Send messages and read Slack conversations from Claude',
      rating: 4.6,
      downloads: 18900,
      mcpmarketUrl: 'https://mcpmarket.com/server/slack',
      features: ['Message sending', 'Channel reading', 'Thread access'],
      free: true,
      setup_time: '12 min'
    },
    {
      id: 6,
      name: 'Google Drive Integration',
      category: 'data',
      description: 'Access files and folders from Google Drive',
      rating: 4.8,
      downloads: 22100,
      mcpmarketUrl: 'https://mcpmarket.com/server/google-drive',
      features: ['File access', 'Search', 'Download/upload'],
      free: true,
      setup_time: '10 min'
    },
    {
      id: 7,
      name: 'Notion Database Access',
      category: 'productivity',
      description: 'Read and write to Notion databases from Claude',
      rating: 4.7,
      downloads: 19800,
      mcpmarketUrl: 'https://mcpmarket.com/server/notion',
      features: ['Database access', 'Page creation', 'Data sync'],
      free: true,
      setup_time: '12 min'
    },
    {
      id: 8,
      name: 'Weather API Integration',
      category: 'web',
      description: 'Get real-time weather data for any location',
      rating: 4.5,
      downloads: 11200,
      mcpmarketUrl: 'https://mcpmarket.com/server/weather',
      features: ['Real-time data', 'Forecasts', 'Alerts'],
      free: true,
      setup_time: '5 min'
    },
    {
      id: 9,
      name: 'Database Query Tool',
      category: 'data',
      description: 'Query SQL databases (PostgreSQL, MySQL, SQLite)',
      rating: 4.6,
      downloads: 14300,
      mcpmarketUrl: 'https://mcpmarket.com/server/database',
      features: ['SQL execution', 'Schema browsing', 'Transaction support'],
      free: true,
      setup_time: '15 min'
    },
    {
      id: 10,
      name: 'Cursor Code Editor',
      category: 'productivity',
      description: 'Extend Cursor editor with Claude AI capabilities',
      rating: 4.9,
      downloads: 42100,
      mcpmarketUrl: 'https://mcpmarket.com/server/cursor',
      features: ['Code completion', 'AI chat', 'Refactoring'],
      free: true,
      setup_time: '5 min'
    },
    {
      id: 11,
      name: 'Linear Issue Tracking',
      category: 'productivity',
      description: 'Create and manage Linear issues from Claude',
      rating: 4.7,
      downloads: 13450,
      mcpmarketUrl: 'https://mcpmarket.com/server/linear',
      features: ['Issue creation', 'Status updates', 'Team sync'],
      free: true,
      setup_time: '10 min'
    },
    {
      id: 12,
      name: 'Stripe Payment Integration',
      category: 'web',
      description: 'Access Stripe data and create payments from Claude',
      rating: 4.8,
      downloads: 9870,
      mcpmarketUrl: 'https://mcpmarket.com/server/stripe',
      features: ['Payment processing', 'Customer data', 'Invoice generation'],
      free: true,
      setup_time: '15 min'
    },
  ];

  useEffect(() => {
    setMcps(allMcps);
  }, []);

  const filteredMcps = selectedCategory === 'all'
    ? mcps
    : mcps.filter(mcp => mcp.category === selectedCategory);

  const getCategoryCount = (catId) => {
    if (catId === 'all') return mcps.length;
    return mcps.filter(m => m.category === catId).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-slate-700/50">
        <div className="container-max">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Top MCPs for Claude</h1>
            <p className="text-xl text-slate-300 mb-4">
              Recommended Model Context Protocols to extend Claude's capabilities
            </p>
            <p className="text-slate-400">
              All MCPs are free to use. Connect them to Claude Code to unlock integrations with your favorite tools and services.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding-sm bg-slate-800/50 border-b border-slate-700/50 sticky top-20 z-20">
        <div className="container-max">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {cat.label} ({getCategoryCount(cat.id)})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MCPs Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMcps.map(mcp => (
              <div
                key={mcp.id}
                className="glass border border-slate-700/50 rounded-2xl p-6 card-hover group flex flex-col h-full"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                    {mcp.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {mcp.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-300 mb-4 pb-4 border-b border-slate-700/50">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-400" />
                    <span className="font-semibold">{mcp.rating}/5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiDownload className="text-primary" />
                    <span className="font-semibold">{(mcp.downloads / 1000).toFixed(1)}K</span>
                  </div>
                </div>

                <div className="mb-4 flex-1">
                  <p className="text-xs text-slate-400 mb-2 font-semibold">FEATURES:</p>
                  <div className="flex flex-wrap gap-2">
                    {mcp.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Setup Time:</span>
                    <span className="font-semibold">{mcp.setup_time}</span>
                  </div>
                  <a
                    href={mcp.mcpmarketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary flex items-center justify-center gap-2 group/btn text-sm"
                  >
                    Get MCP
                    <FiExternalLink className="group-hover/btn:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">About MCPs</h2>

          <div className="space-y-6">
            <div className="glass border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">What is an MCP?</h3>
              <p className="text-slate-300">
                An MCP (Model Context Protocol) is a standardized protocol that allows AI assistants like Claude to connect with external tools and data sources. Think of it as a bridge that lets Claude interact with your favorite apps - from GitHub to Slack to databases.
              </p>
            </div>

            <div className="glass border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Are all MCPs free?</h3>
              <p className="text-slate-300">
                Yes! All MCPs are 100% free to download and use. Some may require API keys from external services (like Stripe, GitHub), but those are also free to get.
              </p>
            </div>

            <div className="glass border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">What can I do with MCPs?</h3>
              <p className="text-slate-300 mb-2">With MCPs, you can:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Access and analyze GitHub repositories</li>
                <li>Send Slack messages and read conversations</li>
                <li>Query databases and run SQL</li>
                <li>Manage issues in Linear or GitHub</li>
                <li>Work with Google Drive files</li>
                <li>And much more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Link to Premium Tools */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20 border-t border-slate-700/50">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">Need Production-Ready Automation?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Check out our premium Skills - production-ready workflows that combine multiple MCPs with advanced automation logic
          </p>
          <Link href="/marketplace" className="btn-primary inline-flex items-center gap-2 text-lg">
            <FiTrendingUp />
            Browse Premium Skills
          </Link>
        </div>
      </section>
    </div>
  );
}
