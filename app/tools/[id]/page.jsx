'use client';

import { useEffect, useState } from 'next/link';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiStar, FiDownload, FiCheck, FiArrowRight } from 'react-icons/fi';

export default function ToolDetail() {
  const params = useParams();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    fetch('/data/tools.json')
      .then(res => res.json())
      .then(data => {
        const found = data.tools.find(t => t.id == params.id);
        setTool(found);
      });
  }, [params.id]);

  if (!tool) return <div className="text-center py-20">Loading...</div>;

  return (
    <div>
      <section className="section-padding bg-slate-900">
        <div className="container-max">
          <Link href="/marketplace" className="text-primary hover:text-secondary mb-4 inline-block">
            ← Back to Marketplace
          </Link>
          <div className="flex items-start gap-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl">📦</div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{tool.name}</h1>
              <p className="text-xl text-slate-400 mb-4">{tool.tagline}</p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FiStar className="text-yellow-400" />
                  <span>{tool.rating} / 5</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiDownload />
                  <span>{tool.downloads.toLocaleString()} downloads</span>
                </div>
                <span className="badge">{tool.category}</span>
                <span className="badge bg-green-900 text-green-200">{tool.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-slate-400 mb-6">{tool.description}</p>

              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FiCheck className="text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Integrations</h2>
              <div className="flex flex-wrap gap-3">
                {tool.integrations.map((integration, i) => (
                  <span key={i} className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                    {integration}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Use Case</h2>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <p className="font-bold mb-2">Real-World Impact</p>
                <p className="text-slate-400">{tool.caseStudy}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Get Started</h2>
              <ol className="space-y-4 text-slate-400">
                <li>1. <strong className="text-white">Install the MCP</strong> following our documentation</li>
                <li>2. <strong className="text-white">Configure your credentials</strong> (API keys, etc)</li>
                <li>3. <strong className="text-white">Run in production</strong> with 24/7 monitoring</li>
              </ol>
            </div>
          </div>

          <div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 sticky top-24">
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-2">{tool.pricing}</div>
                <p className="text-slate-400 text-sm">per month</p>
              </div>

              <a
                href={`https://mcpmarket.com/tools/${tool.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block mb-3"
              >
                View on MCPMarket
              </a>

              <Link
                href={tool.documentation}
                className="btn-secondary w-full text-center block mb-6"
              >
                Read Documentation
              </Link>

              <div className="border-t border-slate-700 pt-6">
                <h3 className="font-bold mb-4">What's Included</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-400" />
                    Complete source code
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-400" />
                    Full documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-400" />
                    Community support
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-400" />
                    Regular updates
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-400" />
                    Email support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
