import { clsx, type ClassValue } from "clsx";
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
export function formatPrice(p: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(p);
}
