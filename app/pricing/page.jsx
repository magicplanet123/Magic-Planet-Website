'use client';

import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for personal use',
      features: [
        '5 tools included',
        '1,000 monthly requests',
        'Community support',
        'Basic documentation',
        'Email support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'All 20+ tools',
        '100,000 monthly requests',
        'Priority support',
        'Advanced documentation',
        'Dedicated support email',
        'API access',
        'Custom integrations',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited tools',
        'Unlimited requests',
        '24/7 phone support',
        'Custom training',
        'On-premise option',
        'SLA guarantee',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <div>
      <section className="section-padding bg-slate-900">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-slate-400 text-xl">
            Choose the plan that fits your needs. All plans include 14-day free trial.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg border transition ${
                  plan.highlighted
                    ? 'border-primary bg-slate-800 ring-2 ring-primary scale-105'
                    : 'border-slate-700 bg-slate-900'
                }`}
              >
                <div className="p-8">
                  {plan.highlighted && (
                    <div className="mb-4 inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-slate-400 ml-2">{plan.period}</span>}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="border-t border-slate-700 pt-8">
                    <div className="space-y-4">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <FiCheck className="text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Can I upgrade or downgrade anytime?',
                  a: 'Yes! Change your plan anytime. We pro-rate charges automatically.',
                },
                {
                  q: 'Is there a free trial?',
                  a: '14-day free trial for all plans. No credit card required to start.',
                },
                {
                  q: 'What if I need more requests?',
                  a: 'Add-on packages available. Contact sales for custom limits.',
                },
                {
                  q: 'Do you offer discounts for annual billing?',
                  a: '20% discount when you pay annually. Pay monthly if you prefer.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                  <h3 className="font-bold mb-2">{item.q}</h3>
                  <p className="text-slate-400 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg mb-6 opacity-90">Start your 14-day free trial today. No credit card required.</p>
            <Link href="/marketplace" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition inline-block">
              Browse Tools Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
