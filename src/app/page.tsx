
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { RewardCalculator } from "@/components/sections/RewardCalculator";
import { Features } from "@/components/sections/Features";
import { Leaderboard } from "@/components/sections/Leaderboard";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <RewardCalculator />
      <Features />
      <Leaderboard />
      <RegistrationForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
