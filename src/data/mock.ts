export const modules = [
  { id: "appointments", label: "Appointments", description: "Schedules, queues & visits", icon: "calendar" },
  { id: "emr", label: "Patient EMR", description: "A complete patient story", icon: "file" },
  { id: "pharmacy", label: "Pharmacy", description: "Stock, batches & dispensing", icon: "pill" },
  { id: "inventory", label: "Inventory", description: "Supplies across branches", icon: "package" },
  { id: "billing", label: "Billing & Finance", description: "Revenue and invoices", icon: "wallet" },
  { id: "hr", label: "People & HR", description: "Teams, shifts & payroll", icon: "users" },
  { id: "procurement", label: "Procurement", description: "Purchase orders & vendors", icon: "shopping" },
  { id: "reports", label: "Reports", description: "Decision-ready insights", icon: "chart" },
  { id: "facilities", label: "Facilities", description: "Beds, rooms & assets", icon: "building" },
  { id: "programs", label: "Programs", description: "NGO initiatives & grants", icon: "heart" },
  { id: "laboratory", label: "Laboratory", description: "Orders and results", icon: "flask" },
  { id: "patients", label: "Patient Registry", description: "Relationships & history", icon: "contact" },
  { id: "settings", label: "Settings", description: "Workspace controls", icon: "settings" },
];

export const navGroups = [
  { label: "Workspace", items: [{ id: "dashboard", label: "Overview", icon: "grid" }, { id: "appointments", label: "Appointments", icon: "calendar" }, { id: "emr", label: "Patient EMR", icon: "file" }] },
  { label: "Operations", items: [{ id: "pharmacy", label: "Pharmacy", icon: "pill" }, { id: "inventory", label: "Inventory", icon: "package" }, { id: "billing", label: "Billing & Finance", icon: "wallet" }, { id: "hr", label: "People & HR", icon: "users" }] },
  { label: "Insights", items: [{ id: "reports", label: "Reports", icon: "chart" }, { id: "programs", label: "Programs", icon: "heart" }] },
];

export const branches = ["All branches", "Dhanmondi Medical Centre", "Uttara Family Clinic", "Chattogram Outreach Hub", "Sylhet Wellness Centre"];

export const appointments = [
  { time: "09:00", patient: "Nusrat Jahan", type: "Follow-up consultation", doctor: "Dr. Samira Rahman", status: "Confirmed", color: "teal" },
  { time: "10:30", patient: "Rahim Uddin", type: "Antenatal care · Visit 3", doctor: "Dr. Tanvir Ahmed", status: "In progress", color: "blue" },
  { time: "11:15", patient: "Maliha Chowdhury", type: "Family planning counselling", doctor: "Nurse Farzana", status: "Waiting", color: "amber" },
  { time: "13:00", patient: "Ayesha Khatun", type: "Lab results review", doctor: "Dr. Samira Rahman", status: "Confirmed", color: "teal" },
  { time: "14:45", patient: "Sajidul Islam", type: "Diabetes management", doctor: "Dr. Mahmud Hasan", status: "Cancelled", color: "rose" },
];

export const patients = [
  { initials: "NJ", name: "Nusrat Jahan", id: "CS-23841", service: "Antenatal care", branch: "Dhanmondi", lastVisit: "Today, 09:00", status: "Active" },
  { initials: "RU", name: "Rahim Uddin", id: "CS-23838", service: "Chronic care", branch: "Uttara", lastVisit: "Today, 10:30", status: "In consultation" },
  { initials: "MC", name: "Maliha Chowdhury", id: "CS-23829", service: "Family planning", branch: "Dhanmondi", lastVisit: "Yesterday", status: "Active" },
  { initials: "AK", name: "Ayesha Khatun", id: "CS-23817", service: "Laboratory review", branch: "Sylhet", lastVisit: "12 Jun 2024", status: "Follow-up" },
  { initials: "SI", name: "Sajidul Islam", id: "CS-23804", service: "Diabetes management", branch: "Chattogram", lastVisit: "11 Jun 2024", status: "Needs review" },
];

export const activities = [
  { initials: "FR", name: "Farzana Rahman", action: "dispensed 2 medicines", detail: "to Nusrat Jahan · Pharmacy", time: "4 min ago", tone: "teal" },
  { initials: "TA", name: "Tanvir Ahmed", action: "completed a consultation", detail: "for Rahim Uddin · EMR", time: "18 min ago", tone: "blue" },
  { initials: "SA", name: "Shahriar Alam", action: "approved a purchase order", detail: "PO-1048 · MedSupply BD", time: "42 min ago", tone: "purple" },
  { initials: "NM", name: "Nadia Mahmud", action: "added a new patient", detail: "Maliha Chowdhury · Registry", time: "1 hr ago", tone: "amber" },
];

export const faqItems = [
  { q: "Can CareSphere work across multiple branches?", a: "Yes. CareSphere is designed for distributed care networks. Each branch can manage its own queue, stock and team while leadership gets one live view across the organisation." },
  { q: "Is patient data secure?", a: "Your workspace includes role-based access, audit-ready activity logs and encryption in transit and at rest. We support operational controls aligned with HIPAA, GDPR and ISO 27001 practices." },
  { q: "How long does implementation take?", a: "Most teams are ready to invite their first users within a week. Our onboarding team helps map your services, branches and opening inventory before launch." },
  { q: "Do you support NGO programmes and grants?", a: "Yes. Programs connects field activities, beneficiaries, budgets and outcomes so operations and impact reporting live together." },
];
