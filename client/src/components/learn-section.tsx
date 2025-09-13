import { useLanguage } from "@/hooks/use-language";
import { learningModules } from "@/data/learning-modules";
import { Button } from "@/components/ui/button";
import { Shield, KeyRound, Footprints, UserCheck, Fish, Bug, Smartphone, CheckCircle, Key } from "lucide-react";

const iconMap = {
  "shield-alt": Shield,
  "user-secret": KeyRound,
  "footprint": Footprints,
  "user-ninja": UserCheck,
  "fishing": Fish,
  "virus": Bug,
  "mobile-alt": Smartphone,
  "check-circle": CheckCircle,
  "key": Key,
};

export default function LearnSection() {
  const { language, t } = useLanguage();

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <Shield className="h-8 w-8" />;
  };

  // Show first 4 modules in detail
  const featuredModules = learningModules.slice(0, 4);

  return (
    <section id="learn" className="section-transition py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("learningModulesTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("learningModulesSubtitle")}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredModules.map((module) => (
            <div key={module.id} className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  {getIcon(module.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{module.title[language]}</h3>
                  <p className="text-muted-foreground">{module.description[language]}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">💡 Simple Explanation</h4>
                  <p className="text-sm text-muted-foreground">{module.explanation[language]}</p>
                </div>
                
                <div className="bg-accent/10 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">🌟 Real Example</h4>
                  <p className="text-sm text-muted-foreground">{module.example[language]}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <h5 className="font-medium text-accent mb-1">✅ Do's</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {module.dos[language].map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-destructive/10 rounded-lg p-3">
                    <h5 className="font-medium text-destructive mb-1">❌ Don'ts</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {module.donts[language].map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6"
                data-testid={`start-module-${module.id}`}
              >
                {t("startModule")}
              </Button>
            </div>
          ))}
        </div>
        
        {/* View All Modules Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            data-testid="view-all-modules"
          >
            {t("viewAllModules")}
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
