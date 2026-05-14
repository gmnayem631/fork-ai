"use client";

import { signOut } from "next-auth/react";
import { Bell, LogOut, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  user: { name?: string | null; email?: string | null; image?: string | null };
}

export default function DashboardNavbar({ user }: Props) {
  return (
    <header className="h-16 bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 px-6 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="w-4 h-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer w-9 h-9 ring-2 ring-orange-400">
              <AvatarImage src={user.image ?? ""} />
              <AvatarFallback className="brand-gradient text-white text-sm font-bold">
                {user.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <div className="px-3 py-2">
              <p className="font-semibold text-sm">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/user/profile" className="gap-2">
                <User className="w-4 h-4" /> Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-red-500 focus:text-red-500 gap-2"
            >
              <LogOut className="w-4 h-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
