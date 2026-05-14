import { UtensilsCrossed, BookMarked, CalendarDays, Star } from "lucide-react";

const CARDS = [
  {
    label: "Recipes Explored",
    value: "248",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-red-400",
  },
  {
    label: "Saved Recipes",
    value: "36",
    icon: BookMarked,
    color: "from-blue-400 to-indigo-400",
  },
  {
    label: "Meal Plans",
    value: "12",
    icon: CalendarDays,
    color: "from-green-400 to-teal-400",
  },
  {
    label: "Avg Rating Given",
    value: "4.7",
    icon: Star,
    color: "from-yellow-400 to-orange-400",
  },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {CARDS.map((card) => (
        <div
          key={card.label}
          className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700 flex items-center gap-4"
        >
          <div
            className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center shrink-0`}
          >
            <card.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              {card.value}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {card.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
