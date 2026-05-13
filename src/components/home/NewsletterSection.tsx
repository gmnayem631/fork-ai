"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSuccess(true);
    setEmail("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Stay Updated with ForkAI
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">
          Get weekly AI recipes, meal plans, and cooking tips
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-900 w-full sm:w-80"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-lg text-white bg-linear-to-r from-orange-500 to-red-500"
          >
            Subscribe
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-500 font-medium">
            Successfully subscribed!
          </p>
        )}
      </div>
    </section>
  );
}
