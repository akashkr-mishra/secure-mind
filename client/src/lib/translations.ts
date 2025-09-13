export const translations = {
  en: {
    // Header
    home: "Home",
    learn: "Learn",
    knowMore: "Know More",
    getHelp: "Get Help",
    
    // Hero
    heroTitle: "Stay Safe, Stay Smart Online",
    heroSubtitle: "Learn cybersecurity basics in simple language. Protect yourself and your family from online threats with expert guidance for all ages.",
    startLearning: "Start Learning",
    getHelpNow: "Get Help Now",
    
    // Stats
    peopleProtected: "People Protected",
    coreTopics: "Core Topics",
    languages: "Languages",
    support: "Support",
    
    // Quick Topics
    quickTopicsTitle: "Quick Safety Topics",
    quickTopicsSubtitle: "Get started with these essential cybersecurity topics that everyone should know about.",
    learnMore: "Learn more",
    
    // Learning Modules
    learningModulesTitle: "Complete Learning Modules",
    learningModulesSubtitle: "Comprehensive cybersecurity education designed for everyone, from kids to seniors.",
    startModule: "Start This Module",
    viewAllModules: "View All 8 Modules",
    simpleExplanation: "Simple Explanation",
    realExample: "Real Example",
    dos: "Do's",
    donts: "Don'ts",
    
    // Know More
    knowMoreTitle: "Know More Resources",
    knowMoreSubtitle: "Additional resources, FAQs, and links to trusted cybersecurity organizations.",
    trustedResources: "Trusted Resources",
    frequentlyAsked: "Frequently Asked Questions",
    
    // Get Help
    getHelpTitle: "Get Help Now",
    getHelpSubtitle: "Emergency contacts, cyber cells, and guidance for cybercrime victims in India.",
    emergencyHelplines: "Emergency Helplines",
    onlinePortals: "Online Portals",
    stateCyberCells: "State Cyber Cells",
    whatToDo: "What to Do If You're a Victim",
    
    // Footer
    footerTagline: "Empowering people of all ages to stay safe online through easy-to-understand cybersecurity education.",
    quickLinks: "Quick Links",
    resources: "Resources",
    emergency: "Emergency",
    copyright: "© 2024 Security Assisters. Made for safer internet for everyone.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    accessibility: "Accessibility"
  },
  hi: {
    // Header
    home: "होम",
    learn: "सीखें",
    knowMore: "और जानें",
    getHelp: "सहायता पाएं",
    
    // Hero
    heroTitle: "सुरक्षित रहें, ऑनलाइन स्मार्ट रहें",
    heroSubtitle: "साइबर सुरक्षा की मूल बातें सरल भाषा में सीखें। विशेषज्ञ मार्गदर्शन के साथ अपने और अपने परिवार को ऑनलाइन खतरों से बचाएं।",
    startLearning: "सीखना शुरू करें",
    getHelpNow: "अभी सहायता पाएं",
    
    // Stats
    peopleProtected: "सुरक्षित लोग",
    coreTopics: "मुख्य विषय",
    languages: "भाषाएं",
    support: "सहायता",
    
    // Quick Topics
    quickTopicsTitle: "त्वरित सुरक्षा विषय",
    quickTopicsSubtitle: "इन आवश्यक साइबर सुरक्षा विषयों के साथ शुरुआत करें जिन्हें हर किसी को जानना चाहिए।",
    learnMore: "और जानें",
    
    // Learning Modules
    learningModulesTitle: "संपूर्ण शिक्षा मॉड्यूल",
    learningModulesSubtitle: "बच्चों से बुजुर्गों तक सभी के लिए डिज़ाइन की गई व्यापक साइबर सुरक्षा शिक्षा।",
    startModule: "यह मॉड्यूल शुरू करें",
    viewAllModules: "सभी 8 मॉड्यूल देखें",
    simpleExplanation: "सरल व्याख्या",
    realExample: "वास्तविक उदाहरण",
    dos: "करें",
    donts: "न करें",
    
    // Know More
    knowMoreTitle: "अधिक संसाधन जानें",
    knowMoreSubtitle: "अतिरिक्त संसाधन, FAQ, और विश्वसनीय साइबर सुरक्षा संगठनों के लिंक।",
    trustedResources: "विश्वसनीय संसाधन",
    frequentlyAsked: "अक्सर पूछे जाने वाले प्रश्न",
    
    // Get Help
    getHelpTitle: "अभी सहायता पाएं",
    getHelpSubtitle: "आपातकालीन संपर्क, साइबर सेल, और भारत में साइबर अपराध पीड़ितों के लिए मार्गदर्शन।",
    emergencyHelplines: "आपातकालीन हेल्पलाइन",
    onlinePortals: "ऑनलाइन पोर्टल",
    stateCyberCells: "राज्य साइबर सेल",
    whatToDo: "यदि आप पीड़ित हैं तो क्या करें",
    
    // Footer
    footerTagline: "समझने में आसान साइबर सुरक्षा शिक्षा के माध्यम से सभी उम्र के लोगों को ऑनलाइन सुरक्षित रहने के लिए सशक्त बनाना।",
    quickLinks: "त्वरित लिंक",
    resources: "संसाधन",
    emergency: "आपातकाल",
    copyright: "© 2024 सिक्योरिटी असिस्टर्स। सभी के लिए सुरक्षित इंटरनेट के लिए बनाया गया।",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    accessibility: "पहुंच"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
