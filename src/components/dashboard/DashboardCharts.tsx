"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const weeklyData = [
  { day: "Mon", recipes: 4 },
  { day: "Tue", recipes: 7 },
  { day: "Wed", recipes: 3 },
  { day: "Thu", recipes: 9 },
  { day: "Fri", recipes: 6 },
  { day: "Sat", recipes: 12 },
  { day: "Sun", recipes: 8 },
];

const monthlyData = [
  { month: "Jan", meals: 18 },
  { month: "Feb", meals: 24 },
  { month: "Mar", meals: 30 },
  { month: "Apr", meals: 22 },
  { month: "May", meals: 35 },
  { month: "Jun", meals: 28 },
];

const cuisineData = [
  { name: "Italian", value: 30 },
  { name: "Thai", value: 20 },
  { name: "Mexican", value: 18 },
  { name: "Greek", value: 15 },
  { name: "Other", value: 17 },
];

const COLORS = ["#f97316", "#ea580c", "#fb923c", "#fdba74", "#fed7aa"];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Bar chart */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
        <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
          Recipes This Week
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weeklyData}>
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="recipes" fill="#f97316" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line chart */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
        <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
          Monthly Meal Plans
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={monthlyData}>
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="meals"
              stroke="#f97316"
              strokeWidth={2}
              dot={{ fill: "#f97316" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie chart */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border border-zinc-100 dark:border-zinc-700">
        <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
          Favorite Cuisines
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={cuisineData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
            >
              {cuisineData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
