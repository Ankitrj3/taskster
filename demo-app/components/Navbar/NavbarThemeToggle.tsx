import React from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarThemeToggleProps {
  theme: string | undefined;
  toggleTheme: () => void;
  mounted: boolean;
}

export default function NavbarThemeToggle({
  theme,
  toggleTheme,
  mounted,
}: NavbarThemeToggleProps) {
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
}
