"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChefHat, Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    setLoading(false);

    if (result?.error) {
      toast.error("Invalid email or password");
    } else {
      toast.success("Welcome back!");
      router.push("/dashboard/user");
    }
  };

  const fillDemo = (role: "user" | "admin") => {
    setValue(
      "email",
      role === "admin" ? "admin@forkai.com" : "user@forkai.com",
    );
    setValue("password", role === "admin" ? "admin123" : "user123");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white dark:bg-zinc-900">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl mb-8"
          >
            <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text" />
            </div>
            <span className="brand-gradient-text">ForkAI</span>
          </Link>

          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
            Welcome back
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">
            Sign in to your account to continue
          </p>

          {/* Demo buttons */}
          <div className="flex gap-2 mb-6">
            <Button
              variant="outline"
              size="lg"
              className="flex-1 text-base"
              onClick={() => fillDemo("user")}
            >
              Demo User
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 text-base"
              onClick={() => fillDemo("admin")}
            >
              Demo Admin
            </Button>
          </div>

          {/* Google */}
          <Button
            variant="outline"
            size="lg"
            className="w-full gap-2 mb-6 text-base"
            onClick={() => signIn("google", { callbackUrl: "/dashboard/user" })}
          >
            <FaGoogle className="w-4 h-4" />
            Continue with Google
          </Button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t dark:border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-sm text-zinc-400 bg-white dark:bg-zinc-900 px-2 w-fit mx-auto">
              or continue with email
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-base">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                className="mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <Label htmlFor="password" className="text-base">
                  Password
                </Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full brand-gradient text-white text-base border-0"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-base text-zinc-500 mt-6">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right — Visual */}
      <div className="hidden lg:flex flex-1 brand-gradient items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="relative text-center text-black px-12">
          <h2 className="text-4xl font-bold mb-4">Cook Smarter Today</h2>
          <p className="text-black text-lg">
            Join thousands of home cooks using AI to discover amazing recipes
            every day.
          </p>
        </div>
      </div>
    </div>
  );
}
