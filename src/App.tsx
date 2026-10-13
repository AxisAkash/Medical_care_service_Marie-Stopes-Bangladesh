import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import ModulePage from "./pages/ModulePage";
import ClientRegistrationPage from "./pages/ClientRegistrationPage";
import NoAccessPage from "./pages/NoAccessPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import PatientServicesPage from "./pages/PatientServicesPage";

export default function App() {
  return <Routes><Route path="/" element={<LandingPage />} /><Route path="/login" element={<AuthPage mode="login" />} /><Route path="/register" element={<AuthPage mode="register" />} /><Route path="/forgot-password" element={<AuthPage mode="forgot" />} /><Route element={<ProtectedRoute />}><Route path="/app" element={<AppShell />}><Route index element={<Navigate to="dashboard" replace />} /><Route path="dashboard" element={<DashboardPage />} /><Route path="register-client" element={<ClientRegistrationPage />} /><Route path=":module/no-access" element={<NoAccessPage />} /><Route path="patient-management" element={<PatientServicesPage />} /><Route path="patient-management/:subpage" element={<PatientServicesPage />} /><Route path=":module/:subpage" element={<ModulePage />} /><Route path=":module" element={<ModulePage />} /></Route></Route><Route path="*" element={<Navigate to="/" replace />} /></Routes>;
}
