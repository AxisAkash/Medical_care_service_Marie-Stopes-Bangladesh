import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { demoUsers, getDemoUser, getDemoUserByRole, type DemoRole, type DemoUser } from "../data/demoUsers";

type AuthContextValue = {
  user: DemoUser | null;
  activeUser: DemoUser;
  viewAsRole: DemoRole | null;
  login: (email: string, password: string) => Promise<DemoUser>;
  loginAs: (user: DemoUser) => Promise<DemoUser>;
  logout: () => void;
  setViewAsRole: (role: DemoRole | null) => void;
  canAccess: (moduleId: string) => boolean;
  demoUsers: DemoUser[];
};

const sessionKey = "msb-demo-session";
const viewRoleKey = "msb-demo-view-role";
const AuthContext = createContext<AuthContextValue | null>(null);

function readSession() {
  try {
    const id = sessionStorage.getItem(sessionKey);
    return id ? demoUsers.find((user) => user.id === id) ?? null : null;
  } catch {
    return null;
  }
}

function readViewRole(): DemoRole | null {
  try {
    return (sessionStorage.getItem(viewRoleKey) as DemoRole | null) || null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(readSession);
  const [viewAsRole, setViewAsRoleState] = useState<DemoRole | null>(readViewRole);
  const activeUser = viewAsRole && user?.role === "system-admin" ? getDemoUserByRole(viewAsRole) : user ?? demoUsers[0];
  const login = async (email: string, password: string) => {
    await new Promise((resolve) => window.setTimeout(resolve, 750));
    const next = getDemoUser(email, password);
    if (!next) throw new Error("The email or password does not match a demo account.");
    setUser(next);
    setViewAsRoleState(null);
    try { sessionStorage.setItem(sessionKey, next.id); sessionStorage.removeItem(viewRoleKey); } catch { /* Demo auth remains in memory if storage is unavailable. */ }
    return next;
  };
  const loginAs = async (next: DemoUser) => login(next.email, next.password);
  const logout = () => { setUser(null); setViewAsRoleState(null); try { sessionStorage.removeItem(sessionKey); sessionStorage.removeItem(viewRoleKey); } catch { /* Ignore unavailable storage in demo mode. */ } };
  const setViewAsRole = (role: DemoRole | null) => { if (user?.role !== "system-admin") return; setViewAsRoleState(role); try { role ? sessionStorage.setItem(viewRoleKey, role) : sessionStorage.removeItem(viewRoleKey); } catch { /* Keep the switcher usable in memory. */ } };
  const value = useMemo(() => ({ user, activeUser, viewAsRole, login, loginAs, logout, setViewAsRole, canAccess: (moduleId: string) => Boolean(activeUser?.allowedModules.includes(moduleId)), demoUsers }), [activeUser, user, viewAsRole]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
