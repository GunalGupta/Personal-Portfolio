// utils/cookieManager.ts
import { parse } from "cookie";

export const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof document !== "undefined") {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  }
};

export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null; // Check if the code is running on the client side
  const cookies = parse(document.cookie || "");
  return cookies[name] || null;
};
