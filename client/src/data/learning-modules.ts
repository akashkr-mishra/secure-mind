export interface LearningModule {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  icon: string;
  explanation: {
    en: string;
    hi: string;
  };
  example: {
    en: string;
    hi: string;
  };
  dos: {
    en: string[];
    hi: string[];
  };
  donts: {
    en: string[];
    hi: string[];
  };
}

export const learningModules: LearningModule[] = [
  {
    id: "internet-security",
    title: {
      en: "Why Internet Security Matters",
      hi: "इंटरनेट सुरक्षा क्यों जरूरी है"
    },
    description: {
      en: "Understanding the importance of staying safe online and protecting your personal information.",
      hi: "ऑनलाइन सुरक्षित रहने और अपनी व्यक्तिगत जानकारी की सुरक्षा के महत्व को समझना।"
    },
    icon: "shield-alt",
    explanation: {
      en: "Just like you lock your house to keep burglars out, you need to protect your computer and phone from digital criminals who want to steal your information or money.",
      hi: "जैसे आप चोरों को बाहर रखने के लिए अपने घर को बंद करते हैं, वैसे ही आपको अपने कंप्यूटर और फोन को डिजिटल अपराधियों से बचाना होगा जो आपकी जानकारी या पैसे चुराना चाहते हैं।"
    },
    example: {
      en: "Priya received a fake email claiming to be from her bank asking for her password. Because she learned about internet security, she didn't fall for this trick and reported it instead.",
      hi: "प्रिया को एक नकली ईमेल मिला जिसमें दावा किया गया कि यह उसके बैंक की ओर से है और उसके पासवर्ड की मांग की गई। इंटरनेट सुरक्षा के बारे में जानने के कारण, वह इस जाल में नहीं फंसी और इसकी रिपोर्ट की।"
    },
    dos: {
      en: ["Use strong passwords", "Keep software updated", "Think before clicking"],
      hi: ["मजबूत पासवर्ड का उपयोग करें", "सॉफ्टवेयर को अपडेट रखें", "क्लिक करने से पहले सोचें"]
    },
    donts: {
      en: ["Share passwords", "Click suspicious links", "Ignore security warnings"],
      hi: ["पासवर्ड साझा न करें", "संदिग्ध लिंक पर क्लिक न करें", "सुरक्षा चेतावनियों को नजरअंदाज न करें"]
    }
  },
  {
    id: "digital-identity",
    title: {
      en: "Digital Identity",
      hi: "डिजिटल पहचान"
    },
    description: {
      en: "Learn what digital identity means and how to protect your online presence.",
      hi: "डिजिटल पहचान का क्या अर्थ है और अपनी ऑनलाइन उपस्थिति की सुरक्षा कैसे करें।"
    },
    icon: "user-secret",
    explanation: {
      en: "Your digital identity is like your online fingerprint - it includes all the information about you that exists on the internet.",
      hi: "आपकी डिजिटल पहचान आपके ऑनलाइन फिंगरप्रिंट की तरह है - इसमें आपके बारे में सभी जानकारी शामिल है जो इंटरनेट पर मौजूद है।"
    },
    example: {
      en: "When Ravi applied for a job, the company searched his name online and found his professional social media profiles, which helped him get hired.",
      hi: "जब रवि ने नौकरी के लिए आवेदन किया, तो कंपनी ने उसका नाम ऑनलाइन खोजा और उसकी पेशेवर सोशल मीडिया प्रोफाइल पाई, जिससे उसे नौकरी मिली।"
    },
    dos: {
      en: ["Create professional profiles", "Use consistent usernames", "Monitor your online presence"],
      hi: ["पेशेवर प्रोफाइल बनाएं", "संगत उपयोगकर्ता नाम का उपयोग करें", "अपनी ऑनलाइन उपस्थिति की निगरानी करें"]
    },
    donts: {
      en: ["Use inappropriate usernames", "Share too much personal info", "Forget to check privacy settings"],
      hi: ["अनुचित उपयोगकर्ता नाम का उपयोग न करें", "बहुत अधिक व्यक्तिगत जानकारी साझा न करें", "गोपनीयता सेटिंग्स की जांच करना न भूलें"]
    }
  },
  {
    id: "digital-footprints",
    title: {
      en: "Digital Footprints",
      hi: "डिजिटल पदचिह्न"
    },
    description: {
      en: "Understanding how your online activities leave permanent traces and how to manage them.",
      hi: "समझना कि आपकी ऑनलाइन गतिविधियां कैसे स्थायी निशान छोड़ती हैं और उन्हें कैसे प्रबंधित करें।"
    },
    icon: "footprint",
    explanation: {
      en: "Everything you do online leaves digital footprints - like tracks in sand. These include your photos, comments, searches, and even the websites you visit.",
      hi: "आप ऑनलाइन जो कुछ भी करते हैं, वह डिजिटल पदचिह्न छोड़ता है - रेत में पटरियों की तरह। इसमें आपकी तस्वीरें, टिप्पणियां, खोजें और यहां तक कि आपकी देखी गई वेबसाइटें भी शामिल हैं।"
    },
    example: {
      en: "Rahul posted a photo with his school uniform and location tag. Later, he learned that strangers could figure out which school he attended and when he would be there.",
      hi: "राहुल ने अपनी स्कूल की वर्दी और स्थान टैग के साथ एक तस्वीर पोस्ट की। बाद में, उसे पता चला कि अजनबी यह पता लगा सकते हैं कि वह कौन से स्कूल में जाता है और कब वहां होगा।"
    },
    dos: {
      en: ["Check privacy settings", "Think before posting", "Review old posts"],
      hi: ["गोपनीयता सेटिंग्स की जांच करें", "पोस्ट करने से पहले सोचें", "पुराने पोस्ट की समीक्षा करें"]
    },
    donts: {
      en: ["Share personal details", "Post without thinking", "Ignore location settings"],
      hi: ["व्यक्तिगत विवरण साझा न करें", "बिना सोचे पोस्ट न करें", "स्थान सेटिंग्स को नजरअंदाज न करें"]
    }
  },
  {
    id: "hackers",
    title: {
      en: "Who Are Hackers?",
      hi: "हैकर कौन हैं?"
    },
    description: {
      en: "Learn about different types of hackers and how they operate online.",
      hi: "विभिन्न प्रकार के हैकर्स और वे ऑनलाइन कैसे काम करते हैं, इसके बारे में जानें।"
    },
    icon: "user-ninja",
    explanation: {
      en: "Hackers are people who try to break into computers, phones, or websites without permission. Some are criminals, but others help make technology safer.",
      hi: "हैकर्स वे लोग हैं जो बिना अनुमति के कंप्यूटर, फोन या वेबसाइट में घुसने की कोशिश करते हैं। कुछ अपराधी हैं, लेकिन अन्य तकनीक को सुरक्षित बनाने में मदद करते हैं।"
    },
    example: {
      en: "A criminal hacker sent fake lottery emails to thousands of people, tricking them into sharing bank details. Always be suspicious of 'too good to be true' offers.",
      hi: "एक अपराधी हैकर ने हजारों लोगों को नकली लॉटरी ईमेल भेजे, उन्हें बैंक विवरण साझा करने के लिए धोखा दिया। हमेशा 'सच होने के लिए बहुत अच्छे' ऑफर्स पर संदेह करें।"
    },
    dos: {
      en: ["Be skeptical of free offers", "Verify sender identity", "Report suspicious activity"],
      hi: ["मुफ्त ऑफर्स पर संदेह करें", "भेजने वाले की पहचान सत्यापित करें", "संदिग्ध गतिविधि की रिपोर्ट करें"]
    },
    donts: {
      en: ["Trust unknown contacts", "Share sensitive data", "Download unknown files"],
      hi: ["अज्ञात संपर्कों पर भरोसा न करें", "संवेदनशील डेटा साझा न करें", "अज्ञात फ़ाइलें डाउनलोड न करें"]
    }
  },
  {
    id: "phishing",
    title: {
      en: "Phishing Attacks",
      hi: "फिशिंग हमले"
    },
    description: {
      en: "Recognize and avoid fraudulent emails, messages, and websites that steal information.",
      hi: "धोखाधड़ी वाले ईमेल, संदेश और वेबसाइटों को पहचानें और बचें जो जानकारी चुराती हैं।"
    },
    icon: "fishing",
    explanation: {
      en: "Phishing is like digital fishing - criminals use fake emails or websites as bait to catch your personal information like passwords and credit card numbers.",
      hi: "फिशिंग डिजिटल मछली पकड़ने की तरह है - अपराधी आपकी पासवर्ड और क्रेडिट कार्ड नंबर जैसी व्यक्तिगत जानकारी को पकड़ने के लिए नकली ईमेल या वेबसाइट का उपयोग चारा के रूप में करते हैं।"
    },
    example: {
      en: "Sneha received an email saying her bank account would be closed unless she clicked a link and entered her details. She recognized this as phishing and deleted the email.",
      hi: "स्नेहा को एक ईमेल मिला जिसमें कहा गया कि जब तक वह एक लिंक पर क्लिक नहीं करती और अपना विवरण दर्ज नहीं करती, तब तक उसका बैंक खाता बंद हो जाएगा। उसने इसे फिशिंग के रूप में पहचाना और ईमेल को हटा दिया।"
    },
    dos: {
      en: ["Check sender's email carefully", "Visit websites directly", "Use two-factor authentication"],
      hi: ["भेजने वाले का ईमेल ध्यान से देखें", "वेबसाइट पर सीधे जाएं", "दो-कारक प्रमाणीकरण का उपयोग करें"]
    },
    donts: {
      en: ["Click suspicious links", "Enter passwords from emails", "Share OTP with anyone"],
      hi: ["संदिग्ध लिंक पर क्लिक न करें", "ईमेल से पासवर्ड दर्ज न करें", "किसी के साथ OTP साझा न करें"]
    }
  },
  {
    id: "malware",
    title: {
      en: "Viruses and Malware",
      hi: "वायरस और मैलवेयर"
    },
    description: {
      en: "Learn about viruses, malware, and how to keep your devices safe.",
      hi: "वायरस, मैलवेयर के बारे में जानें और अपने उपकरणों को सुरक्षित कैसे रखें।"
    },
    icon: "virus",
    explanation: {
      en: "Malware is like a digital disease that can infect your computer or phone, making it slow, stealing your data, or damaging your files.",
      hi: "मैलवेयर एक डिजिटल बीमारी की तरह है जो आपके कंप्यूटर या फोन को संक्रमित कर सकती है, इसे धीमा बना सकती है, आपका डेटा चुरा सकती है, या आपकी फ़ाइलों को नुकसान पहुंचा सकती है।"
    },
    example: {
      en: "Amit downloaded a free game from an untrusted website. It contained malware that made his computer very slow and started showing strange pop-up ads everywhere.",
      hi: "अमित ने एक अविश्वसनीय वेबसाइट से एक मुफ्त गेम डाउनलोड किया। इसमें मैलवेयर था जिसने उसके कंप्यूटर को बहुत धीमा कर दिया और हर जगह अजीब पॉप-अप विज्ञापन दिखाने लगे।"
    },
    dos: {
      en: ["Use antivirus software", "Download from official sources", "Keep software updated"],
      hi: ["एंटीवायरस सॉफ्टवेयर का उपयोग करें", "आधिकारिक स्रोतों से डाउनलोड करें", "सॉफ्टवेयर को अपडेट रखें"]
    },
    donts: {
      en: ["Download from unknown sites", "Ignore antivirus warnings", "Use pirated software"],
      hi: ["अज्ञात साइटों से डाउनलोड न करें", "एंटीवायरस चेतावनियों को नजरअंदाज न करें", "पायरेटेड सॉफ्टवेयर का उपयोग न करें"]
    }
  },
  {
    id: "trusted-sources",
    title: {
      en: "Trusted vs Untrusted Sources",
      hi: "विश्वसनीय बनाम अविश्वसनीय स्रोत"
    },
    description: {
      en: "Learn how to identify and choose reliable sources for downloads and information.",
      hi: "डाउनलोड और जानकारी के लिए विश्वसनीय स्रोतों की पहचान और चयन करना सीखें।"
    },
    icon: "check-circle",
    explanation: {
      en: "Just like you trust certain shops for quality products, you should only download apps and files from trusted, official sources online.",
      hi: "जैसे आप गुणवत्तापूर्ण उत्पादों के लिए कुछ दुकानों पर भरोसा करते हैं, वैसे ही आपको केवल विश्वसनीय, आधिकारिक स्रोतों से ऐप्स और फ़ाइलें डाउनलोड करनी चाहिए।"
    },
    example: {
      en: "When Deepak needed photo editing software, he downloaded it from the official website instead of a random download site, ensuring he got the genuine, safe version.",
      hi: "जब दीपक को फोटो एडिटिंग सॉफ्टवेयर की जरूरत थी, तो उसने इसे किसी रैंडम डाउनलोड साइट के बजाय आधिकारिक वेबसाइट से डाउनलोड किया, यह सुनिश्चित करते हुए कि उसे वास्तविक, सुरक्षित संस्करण मिले।"
    },
    dos: {
      en: ["Use official websites", "Check digital signatures", "Read user reviews"],
      hi: ["आधिकारिक वेबसाइटों का उपयोग करें", "डिजिटल हस्ताक्षर की जांच करें", "उपयोगकर्ता समीक्षा पढ़ें"]
    },
    donts: {
      en: ["Download from random sites", "Trust pop-up ads", "Skip verification steps"],
      hi: ["रैंडम साइटों से डाउनलोड न करें", "पॉप-अप विज्ञापनों पर भरोसा न करें", "सत्यापन चरणों को छोड़ें नहीं"]
    }
  },
  {
    id: "otp-security",
    title: {
      en: "OTP Security",
      hi: "OTP सुरक्षा"
    },
    description: {
      en: "Understand One Time Passwords and why they should never be shared.",
      hi: "वन टाइम पासवर्ड को समझें और क्यों इन्हें कभी साझा नहीं करना चाहिए।"
    },
    icon: "key",
    explanation: {
      en: "OTP is like a special key that only works once and only for you. It's sent to your phone to prove that you're really you when doing important things online.",
      hi: "OTP एक विशेष चाबी की तरह है जो केवल एक बार और केवल आपके लिए काम करती है। यह आपके फोन पर भेजी जाती है यह साबित करने के लिए कि ऑनलाइन महत्वपूर्ण काम करते समय आप वास्तव में आप ही हैं।"
    },
    example: {
      en: "Someone called Kavya pretending to be from her bank and asked for the OTP she just received. She remembered never to share OTP and hung up, then called her bank directly.",
      hi: "किसी ने कव्या को फोन करके अपने को उसके बैंक का कहा और उससे अभी मिला OTP मांगा। उसे याद था कि OTP कभी साझा नहीं करना चाहिए और उसने फोन काट दिया, फिर सीधे अपने बैंक को फोन किया।"
    },
    dos: {
      en: ["Keep OTP private", "Use it quickly", "Verify requests independently"],
      hi: ["OTP को निजी रखें", "इसका जल्दी उपयोग करें", "अनुरोधों को स्वतंत्र रूप से सत्यापित करें"]
    },
    donts: {
      en: ["Share OTP with anyone", "Give it over phone", "Screenshot and save it"],
      hi: ["किसी के साथ OTP साझा न करें", "फोन पर न दें", "स्क्रीनशॉट लेकर सेव न करें"]
    }
  }
];
