export function cn(...classes: Array<unknown>) {
  return classes.flatMap((value) => {
    if (!value) return [];
    if (typeof value === "string") return [value];
    if (typeof value === "object") return Object.entries(value as Record<string, unknown>).filter(([, enabled]) => Boolean(enabled)).map(([name]) => name);
    return [];
  }).join(" ");
}

export function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(date);
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}
