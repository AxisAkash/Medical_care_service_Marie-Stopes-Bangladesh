export type DemoRole = "system-admin" | "executive-director" | "clinic-doctor" | "frontdesk" | "pharmacist" | "store-procurement" | "finance-officer" | "hr-manager" | "employee";

export type DemoUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: DemoRole;
  title: string;
  initials: string;
  landingModule: string;
  allowedModules: string[];
};

const allModules = ["dashboard", "patient-management", "appointments", "emr", "pharmacy", "inventory-procurement", "finance", "hr", "payroll", "tickets", "kpi", "reports", "notifications", "administration", "help-support", "employee-self-service", "programs-grants", "facilities-assets"];

// DEMO ONLY - remove before production
export const demoUsers: DemoUser[] = [
  { id: "u-admin", name: "Sadia Rahman", email: "admin@mariestopesbd.demo", password: "Demo@12345", role: "system-admin", title: "System Administrator", initials: "SR", landingModule: "dashboard", allowedModules: allModules },
  { id: "u-director", name: "Mariam Hossain", email: "director@mariestopesbd.demo", password: "Demo@12345", role: "executive-director", title: "Executive Director", initials: "MH", landingModule: "dashboard", allowedModules: ["dashboard", "patient-management", "appointments", "finance", "inventory-procurement", "reports", "notifications", "administration", "help-support", "programs-grants", "facilities-assets"] },
  { id: "u-doctor", name: "Dr. Samira Rahman", email: "doctor@mariestopesbd.demo", password: "Demo@12345", role: "clinic-doctor", title: "Clinic Doctor", initials: "DR", landingModule: "emr", allowedModules: ["dashboard", "patient-management", "appointments", "emr", "pharmacy", "reports", "notifications", "help-support"] },
  { id: "u-frontdesk", name: "Nadia Mahmud", email: "frontdesk@mariestopesbd.demo", password: "Demo@12345", role: "frontdesk", title: "Front Desk / Registration", initials: "NM", landingModule: "patient-management", allowedModules: ["dashboard", "patient-management", "appointments", "notifications", "help-support"] },
  { id: "u-pharmacist", name: "Farzana Akter", email: "pharmacist@mariestopesbd.demo", password: "Demo@12345", role: "pharmacist", title: "Pharmacist", initials: "FA", landingModule: "pharmacy", allowedModules: ["dashboard", "pharmacy", "inventory-procurement", "notifications", "help-support"] },
  { id: "u-store", name: "Shahriar Alam", email: "store@mariestopesbd.demo", password: "Demo@12345", role: "store-procurement", title: "Store & Procurement Officer", initials: "SA", landingModule: "inventory-procurement", allowedModules: ["dashboard", "inventory-procurement", "tickets", "notifications", "help-support"] },
  { id: "u-finance", name: "Fahim Chowdhury", email: "finance@mariestopesbd.demo", password: "Demo@12345", role: "finance-officer", title: "Finance Officer", initials: "FC", landingModule: "finance", allowedModules: ["dashboard", "finance", "reports", "notifications", "help-support"] },
  { id: "u-hr", name: "Tahmina Sultana", email: "hr@mariestopesbd.demo", password: "Demo@12345", role: "hr-manager", title: "HR Manager", initials: "TS", landingModule: "hr", allowedModules: ["dashboard", "hr", "payroll", "kpi", "tickets", "notifications", "help-support"] },
  { id: "u-employee", name: "Rafiq Hasan", email: "employee@mariestopesbd.demo", password: "Demo@12345", role: "employee", title: "Employee (Self-Service)", initials: "RH", landingModule: "employee-self-service", allowedModules: ["dashboard", "employee-self-service", "tickets", "kpi", "notifications", "help-support"] },
];

export function getDemoUser(email: string, password: string) {
  return demoUsers.find((user) => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password);
}

export function getDemoUserByRole(role: DemoRole) {
  return demoUsers.find((user) => user.role === role) ?? demoUsers[0];
}
