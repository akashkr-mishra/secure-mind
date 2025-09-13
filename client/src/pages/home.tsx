import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LearnSection from "@/components/learn-section";
import KnowMoreSection from "@/components/know-more-section";
import GetHelpSection from "@/components/get-help-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LearnSection />
        <KnowMoreSection />
        <GetHelpSection />
      </main>
      <Footer />
    </div>
  );
}
