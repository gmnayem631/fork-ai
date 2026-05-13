import { Search, Sparkles, CalendarDays, UtensilsCrossed } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Search or Browse",
    description:
      "Explore thousands of recipes by cuisine, category, difficulty, or ingredients you already have.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Ask the AI",
    description:
      "Type in ingredients from your fridge and let our AI instantly generate a custom recipe just for you.",
  },
  {
    icon: CalendarDays,
    step: "03",
    title: "Plan Your Week",
    description:
      "Generate a full weekly meal plan tailored to your dietary goals with one click.",
  },
  {
    icon: UtensilsCrossed,
    step: "04",
    title: "Cook & Enjoy",
    description:
      "Follow step-by-step instructions, save your favorites, and share your creations with the community.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 brand-gradient-soft dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            How ForkAI Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-linear-to-r from-orange-300 to-orange-100 dark:from-orange-700 dark:to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="w-20 h-20 brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200 dark:shadow-orange-900/30">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-orange-400 font-bold text-3xl">
                  {step.step}
                </span>
                <h3 className="font-bold text-zinc-900 dark:text-white text-xl mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
