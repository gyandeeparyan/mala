export const STORAGE_KEY = "japa-minimal-v2";
export const DOT_CAP = 216;
export const MIN_SETTING = 11;
export const REWARD_SLOTS = 36;

export const labels = {
  en: {
    app: "Japa Sadhana",
    subtitle: "Counter and Rewards",
    counter: "Counter",
    rewards: "Rewards",
    tap: "Tap to count",
    target: "Target",
    todayRounds: "Today rounds",
    totalScore: "Devotion score",
    streak: "Day streak",
    resetRound: "Reset count",
    resetAll: "Reset all",
    lightDark: "Dark",
    lang: "हिंदी",
    settings: "Settings",
    theme: "Dark mode",
    language: "Language",
    thali: "Offering Thali",
    krishna: "Lord Krishna Appears",
    small: "Small rewards",
    growing: "Rewards growing",
    complete: "Basket full",
    keepChanting: "Keep chanting daily",
    malaCount: "Mala count",
    japaCount: "Japa count"
  },
  hi: {
    app: "जप साधना",
    subtitle: "काउंटर और रिवॉर्ड्स",
    counter: "काउंटर",
    rewards: "रिवॉर्ड्स",
    tap: "गिनती के लिए टैप करें",
    target: "लक्ष्य",
    todayRounds: "आज की मालाएँ",
    totalScore: "भक्ति स्कोर",
    streak: "दिनों की निरंतरता",
    resetRound: "गिनती रीसेट",
    resetAll: "सब रीसेट",
    lightDark: "डार्क",
    lang: "English",
    settings: "सेटिंग्स",
    theme: "डार्क मोड",
    language: "भाषा",
    thali: "अर्पण थाली",
    krishna: "भगवान कृष्ण दर्शन",
    small: "छोटे रिवॉर्ड्स",
    growing: "रिवॉर्ड्स बढ़ रहे हैं",
    complete: "टोकरी भर गई",
    keepChanting: "रोज जप जारी रखें",
    malaCount: "माला संख्या",
    japaCount: "जप संख्या"
  }
};

export const initialState = {
  count: 0,
  target: 108,
  malaCount: 108,
  japaCount: 108,
  roundsToday: 0,
  totalScore: 0,
  streakDays: 0,
  bestDayRounds: 0,
  dark: false,
  lang: "en",
  dayKey: ""
};
