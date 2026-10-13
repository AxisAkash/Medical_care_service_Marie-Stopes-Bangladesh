import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import ModulePage from "./pages/ModulePage";
import ClientRegistrationPage from "./pages/ClientRegistrationPage";

export default function App() {
  return <Routes><Route path="/" element={<LandingPage />} /><Route path="/login" element={<AuthPage mode="login" />} /><Route path="/register" element={<AuthPage mode="register" />} /><Route path="/forgot-password" element={<AuthPage mode="forgot" />} /><Route path="/app" element={<AppShell />}><Route index element={<Navigate to="dashboard" replace />} /><Route path="dashboard" element={<DashboardPage />} /><Route path="register-client" element={<ClientRegistrationPage />} /><Route path=":module" element={<ModulePage />} /></Route><Route path="*" element={<Navigate to="/" replace />} /></Routes>;
}
