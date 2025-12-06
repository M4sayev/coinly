import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPage(page: string): string {
  return page.split("-").join(" ");
}

export function formatPercent(num: number | null | undefined) {
  if (num === null || num === undefined || Number.isNaN(num)) return "—";
  return num.toFixed(2) + "%";
}

export function formatBigNumber(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return "";
  if (value >= 1e12) return (value / 1e12).toFixed(1) + "T";
  if (value >= 1e9) return (value / 1e9).toFixed(1) + "B";
  if (value >= 1e6) return (value / 1e6).toFixed(1) + "M";
  if (value >= 1e3) return (value / 1e3).toFixed(1) + "K";
  return value.toString();
}
