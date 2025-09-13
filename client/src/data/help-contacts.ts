export interface HelpContact {
  title: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  number?: string;
  email?: string;
  website?: string;
}

export const emergencyContacts: HelpContact[] = [
  {
    title: {
      en: "National Helpline",
      hi: "राष्ट्रीय हेल्पलाइन"
    },
    subtitle: {
      en: "24/7 Cybercrime Support",
      hi: "24/7 साइबर अपराध सहायता"
    },
    number: "1930"
  },
  {
    title: {
      en: "Police Emergency",
      hi: "पुलिस आपातकाल"
    },
    subtitle: {
      en: "General Emergency",
      hi: "सामान्य आपातकाल"
    },
    number: "100"
  },
  {
    title: {
      en: "Women Helpline",
      hi: "महिला हेल्पलाइन"
    },
    subtitle: {
      en: "For harassment cases",
      hi: "उत्पीड़न के मामलों के लिए"
    },
    number: "181"
  }
];

export const onlinePortals: HelpContact[] = [
  {
    title: {
      en: "Cybercrime.gov.in",
      hi: "Cybercrime.gov.in"
    },
    subtitle: {
      en: "Official portal to report cybercrimes",
      hi: "साइबर अपराधों की रिपोर्ट के लिए आधिकारिक पोर्टल"
    },
    website: "https://cybercrime.gov.in"
  },
  {
    title: {
      en: "CERT-In Portal",
      hi: "CERT-In पोर्टल"
    },
    subtitle: {
      en: "Report security incidents",
      hi: "सुरक्षा घटनाओं की रिपोर्ट करें"
    },
    website: "https://cert-in.org.in"
  },
  {
    title: {
      en: "I4C Portal",
      hi: "I4C पोर्टल"
    },
    subtitle: {
      en: "Indian Cyber Crime Coordination Centre",
      hi: "भारतीय साइबर अपराध समन्वय केंद्र"
    },
    website: "https://i4c.gov.in"
  }
];

export const stateCyberCells: HelpContact[] = [
  {
    title: {
      en: "Delhi Cyber Cell",
      hi: "दिल्ली साइबर सेल"
    },
    subtitle: {
      en: "Delhi Police Cyber Crime Unit",
      hi: "दिल्ली पुलिस साइबर अपराध इकाई"
    },
    number: "011-2579-1000",
    email: "cyber@delhipolice.gov.in"
  },
  {
    title: {
      en: "Mumbai Cyber Cell",
      hi: "मुंबई साइबर सेल"
    },
    subtitle: {
      en: "Mumbai Police Cyber Crime Unit",
      hi: "मुंबई पुलिस साइबर अपराध इकाई"
    },
    number: "022-2262-1111",
    email: "cyber@mumpolice.gov.in"
  },
  {
    title: {
      en: "Bangalore Cyber Cell",
      hi: "बैंगलोर साइबर सेल"
    },
    subtitle: {
      en: "Bangalore Police Cyber Crime Unit",
      hi: "बैंगलोर पुलिस साइबर अपराध इकाई"
    },
    number: "080-2294-2222",
    email: "cyber@bangalorepolice.gov.in"
  }
];

export const trustecResources: HelpContact[] = [
  {
    title: {
      en: "CERT-In (India)",
      hi: "CERT-In (भारत)"
    },
    subtitle: {
      en: "India's national cybersecurity agency providing alerts and guidelines.",
      hi: "भारत की राष्ट्रीय साइबर सुरक्षा एजेंसी जो अलर्ट और दिशानिर्देश प्रदान करती है।"
    },
    website: "https://cert-in.org.in"
  },
  {
    title: {
      en: "Cybercrime Portal",
      hi: "साइबर अपराध पोर्टल"
    },
    subtitle: {
      en: "Official portal to report cybercrimes in India.",
      hi: "भारत में साइबर अपराधों की रिपोर्ट के लिए आधिकारिक पोर्टल।"
    },
    website: "https://cybercrime.gov.in"
  },
  {
    title: {
      en: "Educational Videos",
      hi: "शैक्षिक वीडियो"
    },
    subtitle: {
      en: "Curated collection of cybersecurity awareness videos.",
      hi: "साइबर सुरक्षा जागरूकता वीडियो का क्यूरेटेड संग्रह।"
    }
  },
  {
    title: {
      en: "Infographics",
      hi: "इन्फोग्राफिक्स"
    },
    subtitle: {
      en: "Visual guides and posters for easy understanding.",
      hi: "आसान समझ के लिए दृश्य गाइड और पोस्टर।"
    }
  }
];

export const faqs = [
  {
    question: {
      en: "How can I create a strong password?",
      hi: "मैं एक मजबूत पासवर्ड कैसे बना सकता हूं?"
    },
    answer: {
      en: "Use a combination of uppercase and lowercase letters, numbers, and special characters. Make it at least 12 characters long and avoid using personal information like your name or birthdate.",
      hi: "बड़े और छोटे अक्षरों, संख्याओं और विशेष वर्णों का संयोजन उपयोग करें। इसे कम से कम 12 वर्ण लंबा बनाएं और अपने नाम या जन्मतिथि जैसी व्यक्तिगत जानकारी का उपयोग करने से बचें।"
    }
  },
  {
    question: {
      en: "What should I do if I think I've been phished?",
      hi: "यदि मुझे लगता है कि मैं फिशिंग का शिकार हुआ हूं तो मुझे क्या करना चाहिए?"
    },
    answer: {
      en: "Immediately change your passwords, contact your bank if financial information was shared, report the incident to cybercrime portal, and monitor your accounts for suspicious activity.",
      hi: "तुरंत अपने पासवर्ड बदलें, यदि वित्तीय जानकारी साझा की गई हो तो अपने बैंक से संपर्क करें, घटना की रिपोर्ट साइबर अपराध पोर्टल पर करें, और संदिग्ध गतिविधि के लिए अपने खातों की निगरानी करें।"
    }
  },
  {
    question: {
      en: "Is it safe to use public Wi-Fi?",
      hi: "क्या सार्वजनिक Wi-Fi का उपयोग करना सुरक्षित है?"
    },
    answer: {
      en: "Public Wi-Fi can be risky. Avoid accessing sensitive information like banking or personal accounts. Use a VPN if available, and stick to HTTPS websites only.",
      hi: "सार्वजनिक Wi-Fi जोखिम भरा हो सकता है। बैंकिंग या व्यक्तिगत खातों जैसी संवेदनशील जानकारी तक पहुंचने से बचें। यदि उपलब्ध हो तो VPN का उपयोग करें, और केवल HTTPS वेबसाइटों का ही उपयोग करें।"
    }
  },
  {
    question: {
      en: "How do I know if my device is infected with malware?",
      hi: "मैं कैसे जानूं कि मेरा डिवाइस मैलवेयर से संक्रमित है?"
    },
    answer: {
      en: "Signs include slow performance, unexpected pop-ups, new programs you didn't install, high data usage, and battery draining quickly. Run a full antivirus scan if you notice these symptoms.",
      hi: "संकेतों में धीमी गति, अनपेक्षित पॉप-अप, नए प्रोग्राम जो आपने इंस्टॉल नहीं किए, अधिक डेटा उपयोग, और बैटरी का जल्दी खत्म होना शामिल है। यदि आपको ये लक्षण दिखाई दें तो पूरा एंटीवायरस स्कैन चलाएं।"
    }
  },
  {
    question: {
      en: "Should I share my OTP with anyone?",
      hi: "क्या मुझे अपना OTP किसी के साथ साझा करना चाहिए?"
    },
    answer: {
      en: "Never share your OTP with anyone. Banks, companies, or legitimate services will never ask for your OTP over phone, email, or SMS. It's meant only for you to use.",
      hi: "कभी भी अपना OTP किसी के साथ साझा न करें। बैंक, कंपनियां, या वैध सेवाएं कभी भी फोन, ईमेल, या SMS पर आपका OTP नहीं मांगेंगी। यह केवल आपके उपयोग के लिए है।"
    }
  }
];
