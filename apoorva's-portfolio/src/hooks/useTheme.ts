import { useContext } from "react";
import { ThemeContext, type Theme } from "../components/context/ThemeContext";

export type { Theme };

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    // Return fallback if called outside provider
    const isDark =
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark");
    return {
      theme: (isDark ? "dark" : "light") as Theme,
      toggleTheme: () => {
        if (typeof window !== "undefined") {
          const next = document.documentElement.classList.contains("dark")
            ? "light"
            : "dark";
          document.documentElement.classList.toggle("dark", next === "dark");
          localStorage.setItem("theme", next);
        }
      },
      setTheme: (theme: Theme) => {
        if (typeof window !== "undefined") {
          document.documentElement.classList.toggle("dark", theme === "dark");
          localStorage.setItem("theme", theme);
        }
      },
    };
  }

  return context;
};
