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
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextIsDark ? "#2E2E2E" : "#F7F4EF");
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    setIsDark(nextIsDark);
  }

  return (
    <button type="button" role="switch" aria-checked={isDark} aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"} title={isDark ? "Tema claro" : "Tema escuro"} onClick={toggleTheme} className="theme-toggle-motion grid h-10 w-10 shrink-0 place-items-center border border-line bg-transparent text-ink hover:border-caramel hover:text-caramel">
      {isDark ? <FiSun className="theme-icon-motion" aria-hidden="true" /> : <FiMoon className="theme-icon-motion" aria-hidden="true" />}
    </button>
  );
}
