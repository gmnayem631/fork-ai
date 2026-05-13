import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-screen brand-gradient-soft flex items-center justify-center">
        <h1 className="text-4xl font-bold brand-gradient-text">
          ForkAI is coming...
        </h1>
      </div>
    </main>
  );
}
