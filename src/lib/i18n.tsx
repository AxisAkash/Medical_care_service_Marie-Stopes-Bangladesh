import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "bn";
type TranslationMap = Record<string, string>;

const translations: Record<Language, TranslationMap> = {
  en: {
    workspace: "Workspace", careDelivery: "Care delivery", operations: "Operations", governance: "Governance & insight", overview: "Overview", patientManagement: "Patient Management", appointments: "Appointments", patientEmr: "Patient EMR", pharmacy: "Pharmacy", finance: "Finance", inventoryProcurement: "Inventory & Procurement", hrPayroll: "HR & Payroll", facilitiesAssets: "Facilities & Assets", reportingAnalytics: "Reporting & Analytics", programsGrants: "Programs & Grants", ticketManagement: "Ticket Management", kpiManagement: "KPI Management", securityCompliance: "Security & Compliance", reports: "Reports & insights", search: "Search anything", notifications: "Notifications", signIn: "Sign in", startFree: "Start free", heroEyebrow: "Marie Stopes Bangladesh · since 1988", heroTitle: "The calm operating system for better care.", heroBody: "CareSphere ERP brings Marie Stopes Bangladesh clinics, people, patients and programmes into one living workspace, so every team can spend less time chasing updates and more time delivering care.", newVisit: "New visit", liveWorkspace: "Live workspace", security: "Security", impact: "Impact", platform: "Platform", pricing: "Pricing", goodMorning: "Good morning", branch: "Branch", allBranches: "All branches", noCreditCard: "No credit card required", client: "Client", organization: "Organisation",
  },
  bn: {
    workspace: "কর্মপরিসর", careDelivery: "সেবা প্রদান", operations: "কার্যক্রম", governance: "শাসন ও বিশ্লেষণ", overview: "ওভারভিউ", patientManagement: "রোগী ব্যবস্থাপনা", appointments: "অ্যাপয়েন্টমেন্ট", patientEmr: "রোগীর EMR", pharmacy: "ফার্মেসি", finance: "অর্থ ও হিসাব", inventoryProcurement: "ইনভেন্টরি ও ক্রয়", hrPayroll: "এইচআর ও পেরোল", facilitiesAssets: "সুবিধা ও সম্পদ", reportingAnalytics: "রিপোর্ট ও বিশ্লেষণ", programsGrants: "প্রোগ্রাম ও অনুদান", ticketManagement: "টিকিট ব্যবস্থাপনা", kpiManagement: "KPI ব্যবস্থাপনা", securityCompliance: "নিরাপত্তা ও কমপ্লায়েন্স", reports: "রিপোর্ট ও বিশ্লেষণ", search: "যেকোনো কিছু খুঁজুন", notifications: "নোটিফিকেশন", signIn: "সাইন ইন", startFree: "ফ্রি শুরু করুন", heroEyebrow: "মেরি স্টোপস বাংলাদেশ · ১৯৮৮ থেকে", heroTitle: "উন্নত সেবার জন্য শান্ত, নির্ভরযোগ্য অপারেটিং সিস্টেম।", heroBody: "CareSphere ERP মেরি স্টোপস বাংলাদেশের ক্লিনিক, কর্মী, রোগী ও কার্যক্রমকে একটি জীবন্ত কর্মপরিসরে যুক্ত করে, যাতে টিম তথ্য খোঁজার বদলে সেবা দেওয়ায় মন দিতে পারে।", newVisit: "নতুন ভিজিট", liveWorkspace: "লাইভ কর্মপরিসর", security: "নিরাপত্তা", impact: "প্রভাব", platform: "প্ল্যাটফর্ম", pricing: "মূল্য", goodMorning: "শুভ সকাল", branch: "শাখা", allBranches: "সব শাখা", noCreditCard: "ক্রেডিট কার্ড লাগবে না", client: "ক্লায়েন্ট", organization: "প্রতিষ্ঠান",
  },
};

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: string) => string }>({ language: "en", setLanguage: () => undefined, t: (key) => key });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => (localStorage.getItem("caresphere-language") as Language) || "en");
  const setLanguage = (next: Language) => { setLanguageState(next); localStorage.setItem("caresphere-language", next); document.documentElement.lang = next === "bn" ? "bn" : "en"; };
  useEffect(() => { document.documentElement.lang = language === "bn" ? "bn" : "en"; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (key: string) => translations[language][key] ?? translations.en[key] ?? key }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
