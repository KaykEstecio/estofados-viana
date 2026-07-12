import { useState } from "react";

const THEME_STORAGE_KEY = "aconche-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  function toggleTheme() {
    const nextIsDark = !isDark;
    const theme = nextIsDark ? "dark" : "light";

    document.documentElement.classList.toggle("dark", nextIsDark);
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextIsDark ? "#1c1917" : "#4A3328");
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    setIsDark(nextIsDark);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Tema claro" : "Tema escuro"}
      onClick={toggleTheme}
      className="flex h-9 w-14 shrink-0 items-center rounded-full border border-line bg-linen p-1 transition"
    >
      <span
        aria-hidden="true"
        className={`h-6 w-6 rounded-full bg-porcelain shadow-sm transition-transform ${isDark ? "translate-x-5" : "translate-x-0"}`}
      />
    </button>
  );
}
