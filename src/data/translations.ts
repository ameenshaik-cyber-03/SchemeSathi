export type SupportedLanguage = 'en' | 'te' | 'hi' | 'ta' | 'kn';

export interface TranslationDict {
  appName: string;
  tagline: string;
  brandMessage: string;
  // Tabs
  forYou: string;
  jobs: string;
  schemes: string;
  education: string;
  farmers: string;
  women: string;
  saved: string;
  profile: string;
  aiChat: string;
  // Common UI
  searchPlaceholder: string;
  applyNow: string;
  viewDetails: string;
  viewOfficialNotification: string;
  officialNotification: string;
  checkEligibility: string;
  notSureEligible: string;
  tryEligibilityChecker: string;
  downloadApk: string;
  active: string;
  closingSoon: string;
  popularSchemes: string;
  latestJobs: string;
  scholarships: string;
  learningResources: string;
  exams: string;
  filterByGovt: string;
  selectState: string;
  selectParty: string;
  aiAssistantTitle: string;
  aiWelcome: string;
  aiDisclaimer: string;
  askYourQuestion: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDict> = {
  en: {
    appName: 'SchemeSathi',
    tagline: 'Government Schemes • Jobs • Your Rights',
    brandMessage: 'Discover. Apply. Grow.',
    forYou: 'For You',
    jobs: 'Jobs',
    schemes: 'Schemes',
    education: 'Education',
    farmers: 'Farmers',
    women: 'Women',
    saved: 'Saved',
    profile: 'Profile',
    aiChat: 'AI Chat',
    searchPlaceholder: 'Search Schemes, Jobs, Eligibility...',
    applyNow: 'Apply Now',
    viewDetails: 'View Details',
    viewOfficialNotification: 'View Official Notification & Apply',
    officialNotification: 'Official Notification',
    checkEligibility: 'Check Your Eligibility',
    notSureEligible: 'Not sure if you are eligible?',
    tryEligibilityChecker: 'Try our Eligibility Checker',
    downloadApk: 'Download APK (Latest Version)',
    active: 'Active',
    closingSoon: 'Closing Soon',
    popularSchemes: 'Popular Schemes',
    latestJobs: 'Latest Job Notifications',
    scholarships: 'Scholarships',
    learningResources: 'Learning Resources',
    exams: 'Exams',
    filterByGovt: 'Filter by Government & Administration',
    selectState: 'Select State / Central',
    selectParty: 'Select Political Administration',
    aiAssistantTitle: 'SchemeSathi AI Assistant',
    aiWelcome: 'Hello! I can help you with information about government schemes, eligibility, and more.',
    aiDisclaimer: 'AI answers are guidance, not a guarantee of eligibility. Check official sources.',
    askYourQuestion: 'Ask your question in English or regional language...'
  },
  te: {
    appName: 'స్కీమ్‌సాథి',
    tagline: 'ప్రభుత్వ పథకాలు • ఉద్యోగాలు • మీ హక్కులు',
    brandMessage: 'కనుగొనండి. దరఖాస్తు చేసుకోండి. ఎదగండి.',
    forYou: 'మీ కోసం',
    jobs: 'ఉద్యోగాలు',
    schemes: 'పథకాలు',
    education: 'విద్య',
    farmers: 'రైతులు',
    women: 'మహిళలు',
    saved: 'భద్రపరిచినవి',
    profile: 'ప్రొఫైల్',
    aiChat: 'ఏఐ చాట్',
    searchPlaceholder: 'పథకాలు, ఉద్యోగాలు, అర్హతలను వెతకండి...',
    applyNow: 'దరఖాస్తు చేసుకోండి',
    viewDetails: 'వివరాలు చూడండి',
    viewOfficialNotification: 'అధికారిక నోటిఫికేషన్ చూసి దరఖాస్తు చేయండి',
    officialNotification: 'అధికారిక నోటిఫికేషన్',
    checkEligibility: 'మీ అర్హతను తనిఖీ చేయండి',
    notSureEligible: 'మీరు అర్హులా కాదా తెలియలేదా?',
    tryEligibilityChecker: 'మా అర్హత తనిఖీని ప్రయత్నించండి',
    downloadApk: 'APK డౌన్‌లోడ్ చేయండి (తాజా వెర్షన్)',
    active: 'యాక్టివ్',
    closingSoon: 'త్వరలో ముగుస్తుంది',
    popularSchemes: 'ప్రజాదరణ పొందిన పథకాలు',
    latestJobs: 'తాజా ఉద్యోగ నోటిఫికేషన్లు',
    scholarships: 'స్కాలర్‌షిప్‌లు',
    learningResources: 'అభ్యాస వనరులు',
    exams: 'పరీక్షలు',
    filterByGovt: 'ప్రభుత్వ మరియు పరిపాలన వారీగా ఫిల్టర్',
    selectState: 'రాష్ట్రం / కేంద్రం ఎంచుకోండి',
    selectParty: 'పరిపాలనా విభాగం ఎంచుకోండి',
    aiAssistantTitle: 'స్కీమ్‌సాథి ఏఐ సహాయకుడు',
    aiWelcome: 'నమస్కారం! ప్రభుత్వ పథకాలు, ఉద్యోగాలు మరియు అర్హతల వివరాలతో నేను మీకు సహాయం చేయగలను.',
    aiDisclaimer: 'ఏఐ సమాధానాలు సమాచార మార్గదర్శనం మాత్రమే. అధికారిక వెబ్‌సైట్లను పరిశీలించండి.',
    askYourQuestion: 'మీ ప్రశ్నను తెలుగులో లేదా ఇంగ్లీషులో అడగండి...'
  },
  hi: {
    appName: 'स्कीमसाथी',
    tagline: 'सरकारी योजनाएं • नौकरियां • आपके अधिकार',
    brandMessage: 'खोजें. आवेदन करें. आगे बढ़ें.',
    forYou: 'आपके लिए',
    jobs: 'नौकरियां',
    schemes: 'योजनाएं',
    education: 'शिक्षा',
    farmers: 'किसान',
    women: 'महिलाएं',
    saved: 'सहेजे गए',
    profile: 'प्रोफ़ाइल',
    aiChat: 'एआई चैट',
    searchPlaceholder: 'योजनाएं, नौकरियां, पात्रता खोजें...',
    applyNow: 'आवेदन करें',
    viewDetails: 'विवरण देखें',
    viewOfficialNotification: 'आधिकारिक अधिसूचना देखें और आवेदन करें',
    officialNotification: 'आधिकारिक अधिसूचना',
    checkEligibility: 'अपनी पात्रता जांचें',
    notSureEligible: 'क्या आप पात्र हैं या नहीं?',
    tryEligibilityChecker: 'हमारा पात्रता चेकर आज़माएं',
    downloadApk: 'एपीके डाउनलोड करें (नवीनतम संस्करण)',
    active: 'सक्रिय',
    closingSoon: 'जल्द समाप्त',
    popularSchemes: 'लोकप्रिय योजनाएं',
    latestJobs: 'नवीनतम सरकारी नौकरियां',
    scholarships: 'छात्रवृत्तियां',
    learningResources: 'अध्ययन सामग्री',
    exams: 'प्रतियोगी परीक्षाएं',
    filterByGovt: 'सरकार और प्रशासन अनुसार फ़िल्टर',
    selectState: 'राज्य / केंद्र चुनें',
    selectParty: 'प्रशासनिक दल चुनें',
    aiAssistantTitle: 'स्कीमसाथी एआई सहायक',
    aiWelcome: 'नमस्ते! मैं आपको सरकारी योजनाओं, नौकरियों और पात्रता की जानकारी देने में मदद कर सकता हूँ।',
    aiDisclaimer: 'एआई उत्तर केवल मार्गदर्शन के लिए हैं। आधिकारिक स्रोतों से पुष्टि करें।',
    askYourQuestion: 'अपना सवाल हिंदी या अंग्रेजी में पूछें...'
  },
  ta: {
    appName: 'ஸ்கீம்சாதி',
    tagline: 'அரசு திட்டங்கள் • வேலைவாய்ப்புகள் • உங்கள் உரிமைகள்',
    brandMessage: 'கண்டறியுங்கள். விண்ணப்பியுங்கள். வளருங்கள்.',
    forYou: 'உங்களுக்காக',
    jobs: 'வேலைகள்',
    schemes: 'திட்டங்கள்',
    education: 'கல்வி',
    farmers: 'விவசாயிகள்',
    women: 'பெண்கள்',
    saved: 'சேமிக்கப்பட்டவை',
    profile: 'சுயவிவரம்',
    aiChat: 'AI அரட்டை',
    searchPlaceholder: 'திட்டங்கள், வேலைவாய்ப்புகளை தேடுங்கள்...',
    applyNow: 'விண்ணப்பிக்கவும்',
    viewDetails: 'விவரங்களை காண்க',
    viewOfficialNotification: 'அதிகாரப்பூர்வ அறிவிப்பை கண்டு விண்ணப்பிக்கவும்',
    officialNotification: 'அதிகாரப்பூர்வ அறிவிப்பு',
    checkEligibility: 'உங்கள் தகுதியை சரிபார்க்கவும்',
    notSureEligible: 'நீங்கள் தகுதியானவரா என்று தெரியவில்லையா?',
    tryEligibilityChecker: 'தகுதி சோதனையை முயற்சிக்கவும்',
    downloadApk: 'APK பதிவிறக்கவும்',
    active: 'செயலில் உள்ளது',
    closingSoon: 'விரைவில் முடிவடைகிறது',
    popularSchemes: 'பிரபலமான திட்டங்கள்',
    latestJobs: 'சமீபத்திய அரசு வேலைகள்',
    scholarships: 'கல்வி உதவித்தொகை',
    learningResources: 'கற்றல் வளங்கள்',
    exams: 'தேர்வுகள்',
    filterByGovt: 'அரசு மற்றும் நிர்வாகம் வடிகட்டல்',
    selectState: 'மாநிலம் / மையம் தேர்ந்தெடுக்கவும்',
    selectParty: 'அரசியல் நிர்வாகம் தேர்ந்தெடுக்கவும்',
    aiAssistantTitle: 'ஸ்கீம்சாதி AI உதவியாளர்',
    aiWelcome: 'வணக்கம்! அரசு திட்டங்கள் மற்றும் கல்வி வேலைவாய்ப்பு விவரங்களுக்கு நான் உதவுகிறேன்.',
    aiDisclaimer: 'AI பதில்கள் வழிகாட்டுதல் மட்டுமே. அதிகாரப்பூர்வ தளங்களை பார்வையிடவும்.',
    askYourQuestion: 'உங்கள் கேள்வியை கேட்கவும்...'
  },
  kn: {
    appName: 'ಸ್ಕೀಮ್‌ಸಾಥಿ',
    tagline: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು • ಉದ್ಯೋಗಗಳು • ನಿಮ್ಮ ಹಕ್ಕುಗಳು',
    brandMessage: 'ಶೋಧಿಸಿ. ಅರ್ಜಿ ಸಲ್ಲಿಸಿ. ಬೆಳೆಯಿರಿ.',
    forYou: 'ನಿಮಗಾಗಿ',
    jobs: 'ಉದ್ಯೋಗಗಳು',
    schemes: 'ಯೋಜನೆಗಳು',
    education: 'ಶಿಕ್ಷಣ',
    farmers: 'ರೈತರು',
    women: 'ಮಹಿಳೆಯರು',
    saved: 'ಉಳಿಸಿದವು',
    profile: 'ಪ್ರೊಫೈಲ್',
    aiChat: 'AI ಚಾಟ್',
    searchPlaceholder: 'ಯೋಜನೆಗಳು, ಉದ್ಯೋಗಗಳನ್ನು ಹುಡುಕಿ...',
    applyNow: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
    viewOfficialNotification: 'ಅಧಿಕೃತ ಅಧಿಸೂಚನೆ ನೋಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    officialNotification: 'ಅಧಿಕೃತ ಅಧಿಸೂಚನೆ',
    checkEligibility: 'ನಿಮ್ಮ ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ',
    notSureEligible: 'ನೀವು ಅರ್ಹರೇ ಎಂದು ಖಚಿತವಿಲ್ಲವೇ?',
    tryEligibilityChecker: 'ಅರ್ಹತಾ ಪರೀಕ್ಷಕ ಪ್ರಯತ್ನಿಸಿ',
    downloadApk: 'APK ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    active: 'ಸಕ್ರಿಯ',
    closingSoon: 'ಶೀಘ್ರದಲ್ಲೇ ಮುಕ್ತಾಯ',
    popularSchemes: 'ಜನಪ್ರಿಯ ಯೋಜನೆಗಳು',
    latestJobs: 'ಇತ್ತೀಚಿನ ಸರ್ಕಾರಿ ಉದ್ಯೋಗಗಳು',
    scholarships: 'ವೇತನಗಳು / ವಿದ್ಯಾರ್ಥಿವೇತನ',
    learningResources: 'ಕಲಿಕಾ ಸಂಪನ್ಮೂಲಗಳು',
    exams: 'ಪರೀಕ್ಷೆಗಳು',
    filterByGovt: 'ಸರ್ಕಾರ ಮತ್ತು ಆಡಳಿತ ಫಿಲ್ಟರ್',
    selectState: 'ರಾಜ್ಯ / ಕೇಂದ್ರ ಆಯ್ಕೆಮಾಡಿ',
    selectParty: 'ಆಡಳಿತ ಪಕ್ಷ ಆಯ್ಕೆಮಾಡಿ',
    aiAssistantTitle: 'ಸ್ಕೀಮ್‌ಸಾಥಿ AI ಸಹಾಯಕ',
    aiWelcome: 'ನಮಸ್ಕಾರ! ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಅರ್ಹತೆಗಳ ಬಗ್ಗೆ ನಾನು ನಿಮಗೆ ಮಾಹಿತಿ ನೀಡಬಲ್ಲೆ.',
    aiDisclaimer: 'AI ಉತ್ತರಗಳು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ಅಧಿಕೃತ ಮೂಲಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
    askYourQuestion: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ...'
  }
};
