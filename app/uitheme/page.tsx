"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "@/utils/cookieManager";
import { Button } from "@/components/ui/button";

const ThemeSelection: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const theme = getCookie("selectedTheme");
    if (theme) {
      router.push("/");
    }
  }, []);

  const selectTheme = (theme: "minimal" | "techy") => {
    setCookie("selectedTheme", theme);
    window.location.href="/";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Choose Your Theme</h1>
      <div className="flex space-x-4">
        <Button onClick={() => selectTheme("minimal")} variant="outline">
          Minimal
        </Button>
        <Button onClick={() => selectTheme("techy")} variant="outline">
          Techy
        </Button>
      </div>
    </div>
  );
};

export default ThemeSelection;
