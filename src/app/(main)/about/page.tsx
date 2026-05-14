import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const team = [
  {
    name: "Sophia Carter",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
  {
    name: "Daniel Lee",
    role: "AI Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    name: "Emma Wilson",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
  },
  {
    name: "James Brown",
    role: "Recipe Specialist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <section className="text-center mb-20">
            <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              About ForkAI
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              ForkAI combines artificial intelligence with modern cooking to
              help people discover smarter recipes and personalized meal plans.
            </p>
          </section>

          {/* Mission */}
          <section className="mb-20">
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our mission is to simplify cooking using AI-powered tools that
                generate recipes, meal plans, and cooking inspiration based on
                real user needs and available ingredients.
              </p>
            </div>
          </section>

          {/* Team */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-10">
              Meet the Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl overflow-hidden"
                >
                  <div className="relative h-72 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="font-bold text-zinc-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-10">
              Our Values
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {["Innovation", "Accessibility", "Healthy Living"].map(
                (value) => (
                  <div
                    key={value}
                    className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800"
                  >
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                      {value}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      We focus on building modern AI-powered experiences that
                      make cooking easier for everyone.
                    </p>
                  </div>
                ),
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
