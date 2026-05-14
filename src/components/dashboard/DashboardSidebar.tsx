"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChefHat,
  LayoutDashboard,
  BookOpen,
  Sparkles,
  CalendarDays,
  User,
  Settings,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const USER_LINKS = [
  { label: "Overview", href: "/dashboard/user", icon: LayoutDashboard },
  { label: "Saved Recipes", href: "/dashboard/user/saved", icon: BookOpen },
  { label: "AI Kitchen", href: "/dashboard/user/ai-kitchen", icon: Sparkles },
  {
    label: "Meal Planner",
    href: "/dashboard/user/meal-planner",
    icon: CalendarDays,
  },
  { label: "Profile", href: "/dashboard/user/profile", icon: User },
  { label: "Settings", href: "/dashboard/user/settings", icon: Settings },
];

const ADMIN_LINKS = [
  { label: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
  { label: "All Recipes", href: "/dashboard/admin/recipes", icon: BookOpen },
  { label: "Users", href: "/dashboard/admin/users", icon: Users },
  { label: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
  { label: "AI Logs", href: "/dashboard/admin/ai-logs", icon: Sparkles },
  {
    label: "Moderation",
    href: "/dashboard/admin/moderation",
    icon: ShieldCheck,
  },
  { label: "Profile", href: "/dashboard/user/profile", icon: User },
];

export default function DashboardSidebar({ role }: { role: string }) {
  const pathname = usePathname();
  const links = role === "admin" ? ADMIN_LINKS : USER_LINKS;

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 hidden md:flex flex-col">
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-700">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-white" />
          </div>
          <span className="brand-gradient-text">ForkAI</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
              pathname === href
                ? "brand-gradient text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700",
            )}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
        <p className="text-xs text-zinc-400 text-center">
          ForkAI v1.0 — {role}
        </p>
      </div>
    </aside>
  );
}
