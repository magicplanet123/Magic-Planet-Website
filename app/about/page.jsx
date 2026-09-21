'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div>
      <section className="section-padding bg-slate-900">
        <div className="container-max">
          <h1 className="text-4xl font-bold mb-4">About Magic Planet</h1>
          <p className="text-slate-400">Building the future of business automation</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-300 mb-4">
              At Magic Planet, we're committed to making enterprise-grade automation accessible to everyone. We build production-ready MCPs and AI tools that help businesses scale without the complexity.
            </p>
            <p className="text-slate-400">
              Our tools power recruitment, data integration, web scraping, and business automation for companies worldwide. We believe automation shouldn't require a team of engineers.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Magic Planet?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Production Ready', desc: 'All tools are battle-tested in real environments' },
                { title: 'Zero Learning Curve', desc: 'Simple API, comprehensive docs, great support' },
                { title: 'Cost Effective', desc: 'Start free, scale gradually, predictable pricing' },
                { title: 'Compliance First', desc: 'Built with security and compliance in mind' },
                { title: '24/7 Support', desc: 'Active community and dedicated support team' },
                { title: 'Fully Transparent', desc: 'Open source where possible, honest pricing' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-slate-300 mb-4">
              Magic Planet started with a simple observation: most companies were spending thousands of hours on repetitive tasks that could be automated.
            </p>
            <p className="text-slate-300 mb-4">
              We built our first recruitment automation tool for a client, and it eliminated 40 hours per week of manual work. That success inspired us to package our solutions into reusable MCPs.
            </p>
            <p className="text-slate-400">
              Today, we're helping thousands of companies automate workflows, from candidate screening to B2B lead generation, all with the reliability and quality enterprises expect.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-slate-300 mb-6">
              Help us build the future of automation. Whether you're a developer, business owner, or automation enthusiast, there's a place for you.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
