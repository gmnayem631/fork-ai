const STATS = [
  {
    value: "10,000+",
    label: "Recipes Available",
    description: "From quick weeknight dinners to elaborate feasts",
  },
  {
    value: "50+",
    label: "World Cuisines",
    description: "Authentic recipes from every corner of the globe",
  },
  {
    value: "98%",
    label: "User Satisfaction",
    description: "Based on verified reviews from our community",
  },
  {
    value: "2 min",
    label: "AI Response Time",
    description: "Get a custom recipe generated in under 2 minutes",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 brand-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-white/5 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-xl font-semibold mb-1 text-orange-100">
                {stat.label}
              </p>
              <p className="text-orange-200 text-base">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
