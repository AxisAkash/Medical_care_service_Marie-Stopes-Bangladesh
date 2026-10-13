export const organizationProfile = {
  name: "Marie Stopes Bangladesh",
  shortName: "MSB",
  founded: 1988,
  headquarters: "Lalmatia, Dhaka",
  phone: "+880 2-5815-1234",
  email: "info@mariestopes.org.bd",
};

export const modules = [
  { id: "patient-management", label: "Patient Management", description: "Registration, EMR, visits & service billing", icon: "contact" },
  { id: "appointments", label: "Appointments", description: "Schedules, queues & visits", icon: "calendar" },
  { id: "emr", label: "Patient EMR", description: "A complete patient story", icon: "file" },
  { id: "finance", label: "Finance", description: "GL, budgets, AP/AR & grants", icon: "wallet" },
  { id: "inventory-procurement", label: "Inventory & Procurement", description: "FIFO stock, suppliers & POs", icon: "package" },
  { id: "hr-payroll", label: "HR & Payroll", description: "People, attendance & payroll", icon: "users" },
  { id: "reporting-analytics", label: "Reporting & Analytics", description: "MIS dashboards & exports", icon: "chart" },
  { id: "security-compliance", label: "Security & Compliance", description: "RBAC, audit logs & backup", icon: "shield" },
  { id: "ticket-management", label: "Ticket Management", description: "IT, HR, Admin & Procurement", icon: "ticket" },
  { id: "kpi-management", label: "KPI Management", description: "Goals, scorecards & reviews", icon: "target" },
  { id: "pharmacy", label: "Pharmacy", description: "IPD, OPD, OTC, batches & expiry", icon: "pill" },
  { id: "programs-grants", label: "Programs & Grants", description: "Donor reporting & field reach", icon: "heart" },
  { id: "facilities-assets", label: "Facilities & Assets", description: "Rooms, equipment & locations", icon: "building" },
];

export const navGroups = [
  { label: "Care delivery", items: [{ id: "dashboard", label: "Overview", icon: "grid" }, { id: "patient-management", label: "Patient Management", icon: "contact" }, { id: "appointments", label: "Appointments", icon: "calendar" }, { id: "emr", label: "Patient EMR", icon: "file" }, { id: "pharmacy", label: "Pharmacy", icon: "pill" }] },
  { label: "Operations", items: [{ id: "finance", label: "Finance", icon: "wallet" }, { id: "inventory-procurement", label: "Inventory & Procurement", icon: "package" }, { id: "hr-payroll", label: "HR & Payroll", icon: "users" }, { id: "facilities-assets", label: "Facilities & Assets", icon: "building" }] },
  { label: "Governance & insight", items: [{ id: "reporting-analytics", label: "Reporting & Analytics", icon: "chart" }, { id: "programs-grants", label: "Programs & Grants", icon: "heart" }, { id: "ticket-management", label: "Ticket Management", icon: "ticket" }, { id: "kpi-management", label: "KPI Management", icon: "target" }, { id: "security-compliance", label: "Security & Compliance", icon: "shield" }] },
];

export const branches = ["All branches", "Dhaka · Lalmatia HQ", "Chattogram · Agrabad", "Sylhet · Zindabazar", "Rajshahi · Boalia", "Khulna · Sonadanga", "Barishal · Sadar Road", "Rangpur · Modern Mor", "Mymensingh · Ganginarpar"];

export const appointments = [
  { time: "09:00", patient: "Nusrat Jahan", type: "Follow-up consultation", doctor: "Dr. Samira Rahman", status: "Confirmed", color: "teal" },
  { time: "10:30", patient: "Md. Rahim Uddin", type: "Antenatal care · Visit 3", doctor: "Dr. Tanvir Ahmed", status: "In progress", color: "blue" },
  { time: "11:15", patient: "Maliha Chowdhury", type: "Family planning counselling", doctor: "Nurse Farzana Akter", status: "Waiting", color: "amber" },
  { time: "13:00", patient: "Ayesha Khatun", type: "Lab results review", doctor: "Dr. Samira Rahman", status: "Confirmed", color: "teal" },
  { time: "14:45", patient: "Sajidul Islam", type: "Diabetes management", doctor: "Dr. Mahmud Hasan", status: "Cancelled", color: "rose" },
];

export const patients = [
  { initials: "NJ", name: "Nusrat Jahan", id: "MSB-23841", service: "Antenatal care", branch: "Dhaka", lastVisit: "Today, 09:00", status: "Active", phone: "+880 1712-345678", nid: "19981234567890123", address: "Lalmatia, Dhaka", district: "Dhaka", upazila: "Dhanmondi" },
  { initials: "RU", name: "Md. Rahim Uddin", id: "MSB-23838", service: "Chronic care", branch: "Chattogram", lastVisit: "Today, 10:30", status: "In consultation", phone: "+880 1812-456789", nid: "19871234567890124", address: "Pahartali, Chattogram", district: "Chattogram", upazila: "Pahartali" },
  { initials: "MC", name: "Maliha Chowdhury", id: "MSB-23829", service: "Family planning", branch: "Dhaka", lastVisit: "Yesterday", status: "Active", phone: "+880 1912-567890", nid: "20001234567890125", address: "Mirpur, Dhaka", district: "Dhaka", upazila: "Mirpur" },
  { initials: "AK", name: "Ayesha Khatun", id: "MSB-23817", service: "Laboratory review", branch: "Sylhet", lastVisit: "12 Jun 2024", status: "Follow-up", phone: "+880 1612-678901", nid: "19941234567890126", address: "Amberkhana, Sylhet", district: "Sylhet", upazila: "Sylhet Sadar" },
  { initials: "SI", name: "Sajidul Islam", id: "MSB-23804", service: "Diabetes management", branch: "Rajshahi", lastVisit: "11 Jun 2024", status: "Needs review", phone: "+880 1512-789012", nid: "19891234567890127", address: "Boalia, Rajshahi", district: "Rajshahi", upazila: "Boalia" },
];

export const suppliers = ["SMC Enterprise Ltd · Dhaka", "Beacon Pharmaceuticals · Dhaka", "Popular Pharmaceuticals · Tongi", "ACI Healthcare · Narayanganj", "Opsonin Pharma · Barishal"];
export const inventoryCategories = ["Medical", "Pharma", "Consumables", "Equipment", "IT", "Office"];
export const inventoryItems = [
  { item: "Oxytocin Injection 10 IU", batch: "OXY-2405", warehouse: "Good stock · Dhaka", quantity: 38, unitPrice: 42, expiry: "28 Feb 2026", status: "Good" },
  { item: "Surgical gloves · Medium", batch: "GLV-2411", warehouse: "Good stock · Chattogram", quantity: 480, unitPrice: 18, expiry: "30 Nov 2027", status: "Good" },
  { item: "Metformin 500mg", batch: "MET-2402", warehouse: "Bad stock · Dhaka", quantity: 24, unitPrice: 3.5, expiry: "31 Aug 2024", status: "Review" },
  { item: "Folic Acid 5mg", batch: "FOL-2406", warehouse: "Good stock · Sylhet", quantity: 920, unitPrice: 1.2, expiry: "31 Dec 2026", status: "Good" },
];
export const invoices = [
  { id: "INV-MSB-2048", payee: "Dhaka North outreach partner", amount: 84500, due: "15 Jun 2024", status: "Overdue" },
  { id: "INV-MSB-2051", payee: "MedSupply Bangladesh Ltd", amount: 264000, due: "28 Jun 2024", status: "Pending" },
  { id: "INV-MSB-2055", payee: "Chattogram field programme", amount: 128500, due: "30 Jun 2024", status: "Approved" },
];
export const paymentMethods = ["Cash", "Card", "Mobile payment · bKash", "Mobile payment · Nagad", "Mobile payment · Rocket"];

export const activities = [
  { initials: "FA", name: "Farzana Akter", action: "dispensed 2 medicines", detail: "to Nusrat Jahan · Dhaka Pharmacy", time: "4 min ago", tone: "teal" },
  { initials: "TA", name: "Tanvir Ahmed", action: "completed a consultation", detail: "for Md. Rahim Uddin · Chattogram EMR", time: "18 min ago", tone: "blue" },
  { initials: "SA", name: "Shahriar Alam", action: "approved a purchase order", detail: "PO-MSB-1048 · SMC Enterprise", time: "42 min ago", tone: "purple" },
  { initials: "NM", name: "Nadia Mahmud", action: "registered a new client", detail: "Maliha Chowdhury · Dhaka registry", time: "1 hr ago", tone: "amber" },
];

export const faqItems = [
  { q: "Can CareSphere ERP work across all MSB districts?", a: "Yes. CareSphere ERP is designed for distributed care networks, from Marie Stopes Bangladesh headquarters in Lalmatia to district branches across all eight divisions." },
  { q: "Does it support BDT and donor reporting?", a: "Yes. Finance includes BDT-first budgets, AP/AR, grants and donor reporting with an audit trail for every adjustment." },
  { q: "Can teams manage good and bad stock separately?", a: "Yes. Inventory & Procurement supports separate Good Stock and Bad Stock warehouses, FIFO valuation, batch and expiry alerts, reconciliation and exports." },
  { q: "Is the interface available in Bangla?", a: "Yes. Teams can switch between English and বাংলা from the landing page, login screen and workspace top bar." },
];
