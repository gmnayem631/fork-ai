import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex">
      <DashboardSidebar
        role={(session.user as { role?: string })?.role ?? "user"}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardNavbar user={session.user ?? {}} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
