import { useEffect, useRef, useState, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { AlertCircle, AlertTriangle, ArrowDown, ArrowUp, Bell, Building2, CalendarDays, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, CircleHelp, ClipboardCheck, Clock3, Command, Download, Eye, EyeOff, FileBarChart, FileText, FlaskConical, Grid2X2, HeartPulse, Hospital, Info, LayoutDashboard, LifeBuoy, LockKeyhole, LogOut, Mail, Menu, MoreHorizontal, Package, PanelLeftClose, PanelLeftOpen, Pill, Plus, Search, Settings, ShieldCheck, ShoppingCart, SlidersHorizontal, Sparkles, Stethoscope, Table2, UserPlus, UserRound, UsersRound, WalletCards, X, type LucideProps } from "lucide-react";
import { cn } from "../lib/utils";

export const iconMap: Record<string, LucideIcon> = { calendar: CalendarDays, file: FileText, pill: Pill, package: Package, wallet: WalletCards, users: UsersRound, shopping: ShoppingCart, chart: FileBarChart, building: Building2, heart: HeartPulse, flask: FlaskConical, contact: UserRound, settings: Settings, grid: Grid2X2, search: Search, bell: Bell, command: Command, menu: Menu, close: X, plus: Plus, arrow: ArrowUp, check: CheckCircle2, alert: AlertTriangle, shield: ShieldCheck, hospital: Hospital, stethoscope: Stethoscope, table: Table2, sparkles: Sparkles, support: LifeBuoy, logout: LogOut, userplus: UserPlus };

export function Icon({ name, size = 18, ...props }: { name: string; size?: number } & Omit<LucideProps, "size">) {
  const Component = iconMap[name] ?? CircleHelp;
  return <Component size={size} strokeWidth={1.8} {...props} />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "outline" | "danger" | "dark"; size?: "sm" | "md" | "lg"; loading?: boolean; icon?: ReactNode };
export function Button({ variant = "primary", size = "md", loading, icon, className, children, disabled, ...props }: ButtonProps) {
  return <button className={cn("inline-flex min-h-10 items-center justify-center gap-2 rounded-[10px] px-4 font-semibold transition-all duration-200 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-50", { "bg-primary-600 text-white shadow-[0_5px_14px_rgba(8,113,196,.2)] hover:bg-primary-700 hover:-translate-y-px": variant === "primary", "border border-neutral-200 bg-white text-neutral-700 shadow-sm hover:border-neutral-300 hover:bg-neutral-50": variant === "secondary", "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900": variant === "ghost", "border border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-100": variant === "outline", "bg-danger-500 text-white hover:bg-[#b93d50]": variant === "danger", "bg-[#102735] text-white hover:bg-[#193a4c]": variant === "dark", "h-9 min-h-9 px-3 text-[13px]": size === "sm", "h-11 min-h-11 px-5": size === "lg" }, className)} disabled={disabled || loading} {...props}>{loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" /> : icon}{children}</button>;
}

export function Badge({ children, tone = "neutral", dot = false, className }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" | "info" | "teal" | "purple"; dot?: boolean; className?: string }) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-semibold", { "bg-neutral-100 text-neutral-600": tone === "neutral", "bg-success-50 text-success-500": tone === "success", "bg-warning-50 text-warning-500": tone === "warning", "bg-danger-50 text-danger-500": tone === "danger", "bg-info-50 text-info-500": tone === "info", "bg-teal-50 text-teal-700": tone === "teal", "bg-[#f5f0ff] text-[#7151b8]": tone === "purple" }, className)}>{dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}{children}</span>;
}

export function Card({ children, className, padding = true }: { children: ReactNode; className?: string; padding?: boolean }) {
  return <section className={cn("rounded-[14px] border border-neutral-200/80 bg-white shadow-[0_2px_10px_rgba(17,48,70,.04)]", padding && "p-5", className)}>{children}</section>;
}

export function CardHeader({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return <div className="mb-5 flex items-start justify-between gap-4"><div><h2 className="font-display text-[15px] font-bold text-neutral-900">{title}</h2>{description && <p className="mt-1 text-[13px] text-neutral-500">{description}</p>}</div>{action}</div>;
}

export function Input({ label, hint, error, icon, type = "text", className, ...props }: InputHTMLAttributes<HTMLInputElement> & { label?: string; hint?: string; error?: string; icon?: ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}{props.required && <span className="ml-1 text-danger-500">*</span>}</span><span className="relative block">{icon && <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">{icon}</span>}<input type={type} className={cn("h-11 w-full rounded-[9px] border border-neutral-200 bg-white px-3.5 text-[14px] text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100", icon && "pl-10", error && "border-danger-500 focus:border-danger-500 focus:ring-danger-50", className)} {...props} /></span>{error ? <span className="mt-1.5 flex items-center gap-1 text-[12px] font-medium text-danger-500"><AlertCircle size={13} />{error}</span> : hint && <span className="mt-1.5 block text-[12px] text-neutral-500">{hint}</span>}</label>;
}

export function PasswordInput(props: InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }) {
  const [show, setShow] = useState(false);
  return <div className="relative"><Input {...props} type={show ? "text" : "password"} className="pr-11" /><button type="button" aria-label={show ? "Hide password" : "Show password"} onClick={() => setShow(!show)} className="absolute right-2 top-[29px] grid h-8 w-8 place-items-center rounded-md text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700">{show ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>;
}

export function Select({ label, children, className, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { label?: string }) {
  return <label className="block"><span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span><span className="relative block"><select className={cn("h-11 w-full appearance-none rounded-[9px] border border-neutral-200 bg-white px-3.5 pr-10 text-[14px] text-neutral-800 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100", className)} {...props}>{children}</select><ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400" /></span></label>;
}

export function Checkbox({ label, checked, onChange, className }: { label: ReactNode; checked?: boolean; onChange?: (checked: boolean) => void; className?: string }) {
  return <label className={cn("flex cursor-pointer items-start gap-2.5 text-[13px] text-neutral-600", className)}><span className={cn("mt-0.5 grid h-[17px] w-[17px] shrink-0 place-items-center rounded-[4px] border transition", checked ? "border-primary-600 bg-primary-600 text-white" : "border-neutral-300 bg-white hover:border-primary-400")}><input type="checkbox" className="sr-only" checked={checked} onChange={(event) => onChange?.(event.target.checked)} />{checked && <Check size={12} strokeWidth={3} />}</span><span>{label}</span></label>;
}

export function Switch({ checked, onChange, label }: { checked: boolean; onChange: (value: boolean) => void; label?: string }) {
  return <label className="inline-flex cursor-pointer items-center gap-2"><button type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)} className={cn("relative h-6 w-11 rounded-full p-1 transition-colors", checked ? "bg-teal-600" : "bg-neutral-300")}><span className={cn("block h-4 w-4 rounded-full bg-white shadow-sm transition-transform", checked && "translate-x-5")} /></button>{label && <span className="text-[13px] text-neutral-600">{label}</span>}</label>;
}

export function Avatar({ initials, tone = "blue", size = "md" }: { initials: string; tone?: "blue" | "teal" | "purple" | "amber" | "rose"; size?: "sm" | "md" | "lg" }) {
  return <span className={cn("inline-grid shrink-0 place-items-center rounded-full font-bold", { "bg-primary-100 text-primary-700": tone === "blue", "bg-teal-100 text-teal-700": tone === "teal", "bg-[#eee8ff] text-[#6b50ae]": tone === "purple", "bg-[#fff0c7] text-[#a96800]": tone === "amber", "bg-[#ffe3e4] text-[#bb4150]": tone === "rose", "h-7 w-7 text-[10px]": size === "sm", "h-9 w-9 text-[12px]": size === "md", "h-12 w-12 text-[15px]": size === "lg" })}>{initials}</span>;
}

export function Tabs({ tabs, active, onChange }: { tabs: Array<{ id: string; label: string; count?: number }>; active: string; onChange: (id: string) => void }) {
  return <div className="flex gap-1 overflow-x-auto border-b border-neutral-200" role="tablist">{tabs.map((tab) => <button key={tab.id} role="tab" aria-selected={active === tab.id} onClick={() => onChange(tab.id)} className={cn("relative whitespace-nowrap px-3 pb-3 pt-1 text-[13px] font-semibold text-neutral-500 transition hover:text-neutral-900", active === tab.id && "text-primary-700 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-primary-600")}>{tab.label}{tab.count !== undefined && <span className="ml-1.5 text-[11px] text-neutral-400">{tab.count}</span>}</button>)}</div>;
}

export function Dropdown({ trigger, children, align = "right" }: { trigger: ReactNode; children: ReactNode; align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const close = (event: MouseEvent) => { if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false); }; document.addEventListener("mousedown", close); return () => document.removeEventListener("mousedown", close); }, []);
  return <div className="relative" ref={ref}><span onClick={() => setOpen(!open)}>{trigger}</span>{open && <div className={cn("absolute top-[calc(100%+8px)] z-50 min-w-48 animate-in rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_18px_45px_rgba(10,46,70,.14)]", align === "right" ? "right-0" : "left-0")}>{children}</div>}</div>;
}

export function MenuItem({ icon, children, onClick, danger = false }: { icon?: ReactNode; children: ReactNode; onClick?: () => void; danger?: boolean }) {
  return <button onClick={onClick} className={cn("flex min-h-10 w-full items-center gap-2.5 rounded-lg px-3 text-left text-[13px] font-medium transition hover:bg-neutral-50", danger ? "text-danger-500 hover:bg-danger-50" : "text-neutral-600 hover:text-neutral-900")}>{icon}{children}</button>;
}

export function Modal({ open, onClose, title, children, width = "max-w-lg" }: { open: boolean; onClose: () => void; title: string; children: ReactNode; width?: string }) {
  useEffect(() => { const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose(); if (open) { document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden"; } return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; }; }, [open, onClose]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[#071b34]/40 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><div className={cn("max-h-[calc(100vh-24px)] w-full animate-in overflow-y-auto rounded-t-2xl bg-white p-5 shadow-float sm:rounded-2xl", width)} role="dialog" aria-modal="true" aria-label={title}><div className="mb-5 flex items-center justify-between"><h2 className="font-display text-lg font-bold text-neutral-900">{title}</h2><button onClick={onClose} aria-label="Close dialog" className="grid h-9 w-9 place-items-center rounded-lg text-neutral-400 hover:bg-neutral-100 hover:text-neutral-800"><X size={18} /></button></div>{children}</div></div>;
}

export function Drawer({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => { const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose(); if (open) document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey); }, [open, onClose]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[90] bg-[#071b34]/35 backdrop-blur-[2px]" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><aside className="ml-auto flex h-full w-full max-w-md animate-in flex-col bg-white p-5 shadow-float"><div className="mb-5 flex items-center justify-between"><h2 className="font-display text-lg font-bold text-neutral-900">{title}</h2><button onClick={onClose} aria-label="Close drawer" className="grid h-9 w-9 place-items-center rounded-lg text-neutral-400 hover:bg-neutral-100"><X size={18} /></button></div><div className="min-h-0 flex-1 overflow-y-auto scrollbar-thin">{children}</div></aside></div>;
}

export function Toast({ message, tone = "success", onClose }: { message: string; tone?: "success" | "info" | "danger"; onClose: () => void }) {
  useEffect(() => { const timeout = window.setTimeout(onClose, 3800); return () => window.clearTimeout(timeout); }, [onClose]);
  const Mark = tone === "success" ? CheckCircle2 : tone === "danger" ? AlertCircle : Info;
  return <div className="fixed bottom-5 right-5 z-[120] flex max-w-[calc(100vw-40px)] animate-in items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[13px] font-semibold text-neutral-800 shadow-float"><Mark size={18} className={tone === "success" ? "text-success-500" : tone === "danger" ? "text-danger-500" : "text-primary-600"} />{message}<button onClick={onClose} className="ml-2 text-neutral-400 hover:text-neutral-800"><X size={15} /></button></div>;
}

export function EmptyState({ icon = <InboxIcon />, title, description, action }: { icon?: ReactNode; title: string; description: string; action?: ReactNode }) {
  return <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50/60 px-5 py-12 text-center"><span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-white text-neutral-400 shadow-sm">{icon}</span><h3 className="font-display text-[15px] font-bold text-neutral-800">{title}</h3><p className="mt-1 max-w-sm text-[13px] leading-5 text-neutral-500">{description}</p>{action && <div className="mt-4">{action}</div>}</div>;
}
function InboxIcon() { return <Mail size={21} />; }

export function LoadingRows({ rows = 4 }: { rows?: number }) {
  return <div className="space-y-3">{Array.from({ length: rows }).map((_, index) => <div key={index} className="flex items-center gap-3"><span className="skeleton h-9 w-9 rounded-full" /><span className="skeleton h-4 flex-1 rounded" /><span className="skeleton h-4 w-20 rounded" /></div>)}</div>;
}

export function ProgressBar({ value, color = "bg-primary-600" }: { value: number; color?: string }) { return <div className="h-2 overflow-hidden rounded-full bg-neutral-100"><div className={cn("h-full rounded-full transition-all duration-500", color)} style={{ width: `${value}%` }} /></div>; }

export function SearchField({ value, onChange, placeholder = "Search" }: { value?: string; onChange?: (value: string) => void; placeholder?: string }) { return <div className="relative"><Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" /><input value={value} onChange={(event) => onChange?.(event.target.value)} placeholder={placeholder} className="h-10 w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 text-[13px] outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100" /></div>; }

export { ArrowDown, ArrowUp, Bell, CalendarDays, ChevronLeft, ChevronRight, Clock3, Command, Download, LockKeyhole, Mail, Menu, MoreHorizontal, PanelLeftClose, PanelLeftOpen, SlidersHorizontal, UserRound, X, Plus, Settings, LogOut };
