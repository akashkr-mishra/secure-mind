import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Shield, Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Shield className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-foreground">Security Assisters</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-home"
            >
              {t("home")}
            </button>
            <button 
              onClick={() => scrollToSection("learn")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-learn"
            >
              {t("learn")}
            </button>
            <button 
              onClick={() => scrollToSection("know-more")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-know-more"
            >
              {t("knowMore")}
            </button>
            <button 
              onClick={() => scrollToSection("get-help")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-get-help"
            >
              {t("getHelp")}
            </button>
          </nav>
          
          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 rounded-lg bg-secondary p-1">
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="px-3 py-1 text-sm font-medium rounded-md"
                data-testid="language-en"
              >
                EN
              </Button>
              <Button
                variant={language === "hi" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("hi")}
                className="px-3 py-1 text-sm font-medium rounded-md"
                data-testid="language-hi"
              >
                हिं
              </Button>
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
              data-testid="theme-toggle"
            >
              {theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9 md:hidden"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection("home")}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              data-testid="mobile-nav-home"
            >
              {t("home")}
            </button>
            <button 
              onClick={() => scrollToSection("learn")}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              data-testid="mobile-nav-learn"
            >
              {t("learn")}
            </button>
            <button 
              onClick={() => scrollToSection("know-more")}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              data-testid="mobile-nav-know-more"
            >
              {t("knowMore")}
            </button>
            <button 
              onClick={() => scrollToSection("get-help")}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              data-testid="mobile-nav-get-help"
            >
              {t("getHelp")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
