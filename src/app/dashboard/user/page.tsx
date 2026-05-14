import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import OverviewCards from "@/components/dashboard/OverviewCards";
import DashboardCharts from "@/components/dashboard/DashboardCharts";

export default async function UserDashboard() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        Welcome back, {session.user?.name?.split(" ")[0]} 👋
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        Here&apos;s what&apos;s cooking in your kitchen today.
      </p>
      <OverviewCards />
      <DashboardCharts />
    </div>
  );
}
