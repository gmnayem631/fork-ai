import DashboardCharts from "@/components/dashboard/DashboardCharts";

export default function AdminAnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        Analytics
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        Platform performance and usage stats
      </p>
      <DashboardCharts />
    </div>
  );
}
