export function cn(...classes: Array<unknown>) {
  return classes.flatMap((value) => {
    if (!value) return [];
    if (typeof value === "string") return [value];
    if (typeof value === "object") return Object.entries(value as Record<string, unknown>).filter(([, enabled]) => Boolean(enabled)).map(([name]) => name);
    return [];
  }).join(" ");
}

export function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "Asia/Dhaka" }).format(date);
}

export function formatDateOffset(offsetDays: number) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return formatDate(date);
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en-BD", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export function formatBDT(value: number) {
  return `৳${new Intl.NumberFormat("en-BD", { maximumFractionDigits: 0 }).format(value)}`;
}

export function formatShortBDT(value: number | string) {
  const amount = Number(value);
  if (amount >= 10000000) return `৳${(amount / 10000000).toFixed(amount >= 100000000 ? 0 : 1)} Cr`;
  if (amount >= 100000) return `৳${(amount / 100000).toFixed(amount >= 1000000 ? 0 : 1)} Lakh`;
  return formatBDT(amount);
}

export function formatPhone(phone: string) {
  const digits = phone.replace(/[\s-]/g, "");
  return digits.replace(/^(\+880)(\d{4})(\d{3})(\d{3})$/, "$1 $2-$3-$4");
}
