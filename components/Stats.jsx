'use client';

export default function Stats() {
  const stats = [
    { label: 'Monthly Users', value: '2,500+' },
    { label: 'Tools Available', value: '8+' },
    { label: 'Total Downloads', value: '15K+' },
    { label: 'Avg Rating', value: '4.7/5' },
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-slate-700">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
