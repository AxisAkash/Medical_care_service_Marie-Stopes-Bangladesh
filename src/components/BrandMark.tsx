import { cn } from "../lib/utils";

export default function BrandMark({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return <span className={cn("inline-flex items-center gap-2.5", compact && "gap-2")}><span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-500 text-xl font-bold text-white shadow-[0_4px_18px_rgba(21,153,143,.28)]">+</span><span className={cn("font-display text-[17px] font-bold tracking-[-.03em]", dark ? "text-white" : "text-[#102735]", compact && "text-[15px]")}>Marie Stopes Bangladesh <small className={cn("ml-1 text-[10px] font-bold uppercase tracking-[.16em]", dark ? "text-teal-200" : "text-teal-700")}>ERP</small></span></span>;
}
