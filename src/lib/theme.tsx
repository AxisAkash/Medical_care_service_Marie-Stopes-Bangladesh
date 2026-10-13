import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "system";
type ThemeContextValue = { mode: ThemeMode; resolvedTheme: "light" | "dark"; setMode: (mode: ThemeMode) => void };
const ThemeContext = createContext<ThemeContextValue>({ mode: "system", resolvedTheme: "light", setMode: () => undefined });

function readMode(): ThemeMode {
  try { const stored = localStorage.getItem("msb-theme"); return stored === "light" || stored === "dark" || stored === "system" ? stored : "system"; } catch { return "system"; }
}

function systemTheme(): "light" | "dark" { return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(readMode); const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => { const initial = readMode(); return initial === "system" ? systemTheme() : initial; });
  const setMode = (next: ThemeMode) => { setModeState(next); try { localStorage.setItem("msb-theme", next); } catch { /* Keep the preference in memory when storage is unavailable. */ } };
  useEffect(() => { const apply = () => { const resolved = mode === "system" ? systemTheme() : mode; setResolvedTheme(resolved); document.documentElement.dataset.theme = resolved; document.documentElement.style.colorScheme = resolved; }; apply(); const media = window.matchMedia("(prefers-color-scheme: dark)"); media.addEventListener("change", apply); return () => media.removeEventListener("change", apply); }, [mode]);
  const value = useMemo(() => ({ mode, resolvedTheme, setMode }), [mode, resolvedTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() { return useContext(ThemeContext); }
