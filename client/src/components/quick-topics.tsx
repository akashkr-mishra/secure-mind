import { useLanguage } from "@/hooks/use-language";
import { learningModules } from "@/data/learning-modules";
import { ArrowRight, KeyRound, Fish, Key, Bug } from "lucide-react";

const iconMap = {
  "user-secret": KeyRound,
  "fishing": Fish,
  "key": Key,
  "virus": Bug,
};

export default function QuickTopics() {
  const { language, t } = useLanguage();

  const quickTopics = learningModules.slice(1, 5); // Digital Identity, Phishing, OTP, Malware

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : <KeyRound className="h-6 w-6" />;
  };

  const scrollToLearnSection = () => {
    const element = document.getElementById("learn");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("quickTopicsTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("quickTopicsSubtitle")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickTopics.map((topic) => (
            <div 
              key={topic.id}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-lg transition-shadow cursor-pointer"
              onClick={scrollToLearnSection}
              data-testid={`quick-topic-${topic.id}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mr-4">
                  {getIcon(topic.icon)}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{topic.title[language]}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{topic.description[language]}</p>
              <div className="flex items-center text-primary text-sm font-medium">
                <span>{t("learnMore")}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
