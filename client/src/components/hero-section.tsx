import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { GraduationCap, LifeBuoy } from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="section-transition">
      <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t("heroTitle").split("Stay Smart")[0]}
              <span className="text-primary">Stay Smart</span>
              {t("heroTitle").split("Stay Smart")[1]}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => scrollToSection("learn")}
                className="text-lg font-semibold"
                data-testid="button-start-learning"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                {t("startLearning")}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("get-help")}
                className="text-lg font-semibold"
                data-testid="button-get-help"
              >
                <LifeBuoy className="mr-2 h-5 w-5" />
                {t("getHelpNow")}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">{t("peopleProtected")}</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="text-3xl font-bold text-accent mb-2">8</div>
              <div className="text-sm text-muted-foreground">{t("coreTopics")}</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">{t("languages")}</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">{t("support")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
