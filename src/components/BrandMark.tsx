import { cn } from "../lib/utils";

export default function BrandMark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return <span className={cn("inline-flex items-center gap-2.5", compact && "gap-2")}><span className={cn("brand-mark grid h-9 w-9 place-items-center rounded-xl", compact && "h-8 w-8")} aria-hidden="true"><svg viewBox="0 0 36 36" className="h-7 w-7" fill="none"><path d="M9 28V16.5C9 11.8 12.8 8 17.5 8h1C23.2 8 27 11.8 27 16.5V28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M13 28V17.5c0-2.8 2.2-5 5-5s5 2.2 5 5V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".55" /></svg></span><span className={cn("font-display text-[17px] font-bold tracking-[-.03em]", dark ? "brand-wordmark-dark" : "brand-wordmark", compact && "text-[15px]")}>Marie Stopes Bangladesh <small className="brand-sub-label ml-1 text-[12px] font-bold uppercase tracking-[.16em]">ERP</small></span></span>;
}
