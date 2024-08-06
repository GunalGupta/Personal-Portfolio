// utils/themeManager.ts
export const getStoredTheme = (): "minimal" | "techy" | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("selectedTheme") as "minimal" | "techy" | null;
  };
  
  export const setStoredTheme = (theme: "minimal" | "techy") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTheme", theme);
    }
  };
  