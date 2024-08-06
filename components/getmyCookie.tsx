"use client";
import { getCookie } from "@/utilis/cookieManager";

export default function getmyCookie() {
    if (typeof document === "undefined") return null;
    return getCookie("selectedTheme");
}