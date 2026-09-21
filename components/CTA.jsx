'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-secondary text-center text-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-4">Ready to Automate?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of companies using Magic Planet tools to streamline workflows and scale operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/marketplace" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition">
            Get Started Free
          </Link>
          <Link href="/contact" className="bg-white/20 border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
