"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Clock } from "lucide-react";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Contact Us
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              We&apos;d love to hear from you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-50 dark:bg-zinc-800 p-8 rounded-3xl space-y-5"
            >
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border dark:border-zinc-700"
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border dark:border-zinc-700"
              />

              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border dark:border-zinc-700"
              />

              <textarea
                rows={5}
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border dark:border-zinc-700"
              />

              <button className="w-full py-3 rounded-xl text-white bg-gradient-to-r from-orange-500 to-red-500">
                Send Message
              </button>
            </form>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "support@forkai.com",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Dhaka, Bangladesh",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  value: "Sun - Thu, 9AM - 6PM",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center gap-4"
                >
                  <item.icon className="text-orange-500" />

                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
