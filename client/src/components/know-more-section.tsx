import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { trustecResources, faqs } from "@/data/help-contacts";
import { Button } from "@/components/ui/button";
import { Shield, Gavel, Video, FileText, ChevronDown, ChevronUp } from "lucide-react";

const resourceIcons = {
  0: Shield,
  1: Gavel,
  2: Video,
  3: FileText,
};

export default function KnowMoreSection() {
  const { language, t } = useLanguage();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="know-more" className="section-transition py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("knowMoreTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("knowMoreSubtitle")}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Resources Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">{t("trustedResources")}</h3>
            <div className="space-y-4">
              {trustecResources.map((resource, index) => {
                const IconComponent = resourceIcons[index as keyof typeof resourceIcons] || Shield;
                return (
                  <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{resource.title[language]}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{resource.subtitle[language]}</p>
                        {resource.website && (
                          <Button 
                            variant="link" 
                            className="p-0 h-auto text-primary hover:underline text-sm font-medium"
                            onClick={() => window.open(resource.website, '_blank')}
                            data-testid={`resource-link-${index}`}
                          >
                            Visit Website →
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">{t("frequentlyAsked")}</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-lg border border-border">
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                    data-testid={`faq-toggle-${index}`}
                  >
                    <span className="font-semibold text-foreground">{faq.question[language]}</span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6 text-sm text-muted-foreground">
                      {faq.answer[language]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
