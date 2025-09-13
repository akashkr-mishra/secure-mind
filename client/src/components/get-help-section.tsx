import { useLanguage } from "@/hooks/use-language";
import { emergencyContacts, onlinePortals, stateCyberCells } from "@/data/help-contacts";
import { Button } from "@/components/ui/button";
import { Phone, Laptop, MapPin, AlertTriangle, FileText, Users } from "lucide-react";

export default function GetHelpSection() {
  const { language, t } = useLanguage();

  return (
    <section id="get-help" className="section-transition py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t("getHelpTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("getHelpSubtitle")}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Emergency Helplines */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive mr-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("emergencyHelplines")}</h3>
            </div>
            
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">{contact.title[language]}</div>
                    <div className="text-sm text-muted-foreground">{contact.subtitle[language]}</div>
                  </div>
                  <div className="text-lg font-bold text-destructive">{contact.number}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Online Complaint Portals */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mr-4">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("onlinePortals")}</h3>
            </div>
            
            <div className="space-y-4">
              {onlinePortals.map((portal, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-foreground mb-2">{portal.title[language]}</div>
                  <div className="text-sm text-muted-foreground mb-3">{portal.subtitle[language]}</div>
                  <Button 
                    className="w-full"
                    onClick={() => portal.website && window.open(portal.website, '_blank')}
                    data-testid={`portal-link-${index}`}
                  >
                    {index === 0 ? "File Complaint" : index === 1 ? "Report Incident" : "Get Support"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          {/* State Cyber Cells */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mr-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t("stateCyberCells")}</h3>
            </div>
            
            <div className="space-y-4">
              {stateCyberCells.map((cell, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-foreground mb-2">{cell.title[language]}</div>
                  <div className="text-sm text-muted-foreground mb-1">📞 {cell.number}</div>
                  <div className="text-sm text-muted-foreground">✉️ {cell.email}</div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full mt-4"
                data-testid="view-all-states"
              >
                View All States
              </Button>
            </div>
          </div>
        </div>
        
        {/* What to Do Section */}
        <div className="mt-12 bg-card rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{t("whatToDo")}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive mx-auto mb-4">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Immediate Action</h4>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Don't panic</li>
                <li>• Stop all transactions</li>
                <li>• Change passwords immediately</li>
                <li>• Take screenshots of evidence</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">File Complaint</h4>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Visit cybercrime.gov.in</li>
                <li>• File detailed complaint</li>
                <li>• Upload evidence</li>
                <li>• Note complaint number</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Follow Up</h4>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Contact local cyber cell</li>
                <li>• Inform your bank</li>
                <li>• Monitor accounts regularly</li>
                <li>• Keep evidence safe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
