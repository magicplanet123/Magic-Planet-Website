import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { FiStar, FiDownload, FiCheck, FiArrowRight } from 'react-icons/fi';

async function getTools() {
  const toolsPath = path.join(process.cwd(), 'public/data/tools.json');
  const data = JSON.parse(fs.readFileSync(toolsPath, 'utf-8'));
  return data.tools;
}

export async function generateStaticParams() {
  const tools = await getTools();
  return tools.map(tool => ({
    id: tool.id.toString(),
  }));
}

async function getTool(id) {
  const tools = await getTools();
  return tools.find(t => t.id === parseInt(id));
}

export async function generateMetadata({ params }) {
  const tool = await getTool(params.id);
  if (!tool) return {};
  return {
    title: `${tool.name} - Magic Planet MCP Marketplace`,
    description: tool.description,
    openGraph: {
      title: tool.name,
      description: tool.description,
    },
  };
}

export default async function ToolDetail({ params }) {
  const tool = await getTool(params.id);

  if (!tool) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-3xl font-bold mb-4">Tool not found</h1>
        <Link href="/marketplace" className="text-primary hover:text-secondary">
          ← Back to Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-max">
          <Link href="/marketplace" className="text-primary hover:text-secondary mb-6 inline-flex items-center gap-2">
            ← Back to Marketplace
          </Link>
          <div className="flex items-start gap-8 mb-8 flex-col md:flex-row">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl flex items-center justify-center flex-shrink-0">
              <div className="text-7xl">📦</div>
            </div>
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 gradient-text">{tool.name}</h1>
              <p className="text-2xl text-slate-300 mb-6">{tool.tagline}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FiStar className="text-yellow-400 text-xl" />
                  <span className="font-semibold">{tool.rating} / 5</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiDownload className="text-primary text-xl" />
                  <span className="font-semibold">{tool.downloads.toLocaleString()} downloads</span>
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
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">{tool.description}</p>

              <div className="glass p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FiCheck className="text-green-400 flex-shrink-0 text-lg" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Integrations</h2>
              <div className="flex flex-wrap gap-3">
                {tool.integrations.map((integration, i) => (
                  <span key={i} className="glass px-6 py-2 rounded-lg border border-slate-700/50 font-medium">
                    {integration}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Real-World Impact</h2>
              <div className="glass p-8 rounded-2xl border border-primary/20 bg-primary/5">
                <p className="text-lg text-slate-200">{tool.caseStudy}</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
              <ol className="space-y-4 text-slate-300">
                <li className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">1.</span>
                  <div>
                    <span className="font-bold text-white">Install the MCP</span>
                    <p className="text-sm mt-1">Follow our documentation to set up the MCP in your environment</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">2.</span>
                  <div>
                    <span className="font-bold text-white">Configure Your Credentials</span>
                    <p className="text-sm mt-1">Add API keys and configuration parameters</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">3.</span>
                  <div>
                    <span className="font-bold text-white">Deploy to Production</span>
                    <p className="text-sm mt-1">Run in production with 24/7 monitoring and support</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <div className="glass border border-slate-700/50 rounded-2xl p-8 sticky top-24">
              <div className="mb-8">
                <div className="text-4xl font-bold text-primary mb-2">{tool.pricing}</div>
                <p className="text-slate-400 text-sm">per month</p>
              </div>

              <Link
                href="/contact"
                className="btn-primary w-full text-center block mb-3 flex items-center justify-center gap-2"
              >
                Get This Tool
                <FiArrowRight />
              </Link>

              <Link
                href={tool.documentation}
                className="btn-secondary w-full text-center block mb-8"
              >
                Read Docs
              </Link>

              <div className="border-t border-slate-700/50 pt-8">
                <h3 className="font-bold mb-6">What's Included</h3>
                <ul className="space-y-4 text-sm">
                  {[
                    'Complete source code',
                    'Full documentation',
                    'Community support',
                    'Regular updates',
                    'Email support',
                    'API access',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FiCheck className="text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
