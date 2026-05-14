"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Camera } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  bio: z.string().max(160, "Bio must be under 160 characters").optional(),
  location: z.string().optional(),
  website: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      bio: "",
      location: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    await update({ name: data.name });
    toast.success("Profile updated successfully!");
    setLoading(false);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
        Profile
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Manage your personal information
      </p>

      {/* Avatar */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700 mb-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="w-20 h-20 ring-4 ring-orange-100 dark:ring-orange-900">
              <AvatarImage src={session?.user?.image ?? ""} />
              <AvatarFallback className="brand-gradient text-white text-2xl font-bold">
                {session?.user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 w-7 h-7 brand-gradient rounded-full flex items-center justify-center shadow-md">
              <Camera className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <div>
            <p className="font-bold text-zinc-900 dark:text-white text-lg">
              {session?.user?.name}
            </p>
            <p className="text-zinc-500 text-sm">{session?.user?.email}</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Full Name</Label>
              <Input {...register("name")} className="mt-1" />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label>Email</Label>
              <Input
                {...register("email")}
                disabled
                className="mt-1 opacity-60"
              />
            </div>
          </div>

          <div>
            <Label>Bio</Label>
            <Input
              {...register("bio")}
              placeholder="Tell us about yourself..."
              className="mt-1"
            />
            {errors.bio && (
              <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Location</Label>
              <Input
                {...register("location")}
                placeholder="City, Country"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input
                {...register("website")}
                placeholder="https://yoursite.com"
                className="mt-1"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="brand-gradient text-white border-0"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </div>
    </div>
  );
}
