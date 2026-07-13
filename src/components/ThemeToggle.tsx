import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const THEME_STORAGE_KEY = "aconche-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  function toggleTheme() {
    const nextIsDark = !isDark;
    const theme = nextIsDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextIsDark);
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextIsDark ? "#1c1917" : "#f5f0e9");
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    setIsDark(nextIsDark);
  }

  return (
    <button type="button" role="switch" aria-checked={isDark} aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"} title={isDark ? "Tema claro" : "Tema escuro"} onClick={toggleTheme} className="grid h-10 w-10 shrink-0 place-items-center border border-line bg-transparent text-ink transition-colors hover:border-caramel hover:text-caramel">
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}
