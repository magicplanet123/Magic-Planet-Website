'use client';

import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'How to Automate Recruitment with AI',
      excerpt: 'Learn how companies are reducing time-to-hire by 70% with AI-powered screening...',
      date: '2026-09-21',
      category: 'Recruitment',
      readTime: 5,
    },
    {
      id: 2,
      title: '5 Ways to Use MCPs for Business Automation',
      excerpt: 'Practical examples of MCPs transforming business operations...',
      date: '2026-09-18',
      category: 'MCP',
      readTime: 7,
    },
    {
      id: 3,
      title: 'Building Scalable Data Pipelines',
      excerpt: 'Best practices for data integration at scale...',
      date: '2026-09-15',
      category: 'Data',
      readTime: 8,
    },
    {
      id: 4,
      title: 'The Future of Automation',
      excerpt: 'Trends and predictions for 2026 and beyond...',
      date: '2026-09-12',
      category: 'Trends',
      readTime: 6,
    },
  ];

  return (
    <div>
      <section className="section-padding bg-slate-900">
        <div className="container-max">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-slate-400">Industry insights, tutorials, and automation tips</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="space-y-8">
            {posts.map(post => (
              <article
                key={post.id}
                className="bg-slate-800 border border-slate-700 rounded-lg p-8 card-hover"
              >
                <div className="flex items-center gap-3 mb-3 text-sm text-slate-400">
                  <span className="badge">{post.category}</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} min read</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 hover:text-primary transition">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                <p className="text-slate-400 mb-4">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary hover:text-secondary transition font-medium"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Updates</h2>
            <p className="text-slate-300 mb-6">
              Get the latest automation insights delivered to your inbox
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400"
                required
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
