"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { setStoredTheme } from "@/utils/themeManager";

const ThemeSelector: React.FC = () => {
  const selectTheme = (theme: "minimal" | "techy") => {
    setStoredTheme(theme);
    window.location.reload(); // Reload to apply the selected theme
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">One Portfolio, Three Personalities</h1>
      <p className="mb-6">Choose one:</p>
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

export default ThemeSelector;
