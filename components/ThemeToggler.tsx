"use client";

import React, { useState, useEffect } from "react";
import getClientCookie from "@/utils/getClientCookie";
import { setCookie, getCookie } from "@/utils/cookieManager";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggler() {
    const selectTheme = (theme: "minimal" | "techy") => {
        setCookie("selectedTheme", theme);
        window.location.reload(); // Reload to apply the selected theme
      };
    
    const [CurrentTheme, setCurrentTheme] = useState<"minimal" | "techy" | null>(getClientCookie());

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        if (CurrentTheme === "techy") {
            selectTheme("minimal")
          return;
        }
        selectTheme("techy");
      }}
      className="rounded-xs rounded p-1 hover:bg-gray-200 hover:dark:bg-[#313131]"
    >
      {CurrentTheme === "minimal" ? (
        <span className="sun-icon">
          <SunIcon height={25} width={25} />
        </span>
      ) : (
        <span className="moon-icon">
          <MoonIcon height={25} width={25} />
        </span>
      )}
    </button>
  );
}
