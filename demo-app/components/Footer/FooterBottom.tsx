import React from "react";
import { Sun, Moon } from "lucide-react";

interface FooterBottomProps {
  mounted: boolean;
  theme: string | undefined;
  toggleTheme: () => void;
}

export default function FooterBottom({
  mounted,
  theme,
  toggleTheme,
}: FooterBottomProps) {
  return (
    <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Taskster Solutions. All rights reserved.
      </p>
      <div className="mt-4 md:mt-0">
        {mounted ? (
          <button
            onClick={toggleTheme}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all duration-200 hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        ) : (
          <div className="w-5 h-5" />
        )}
      </div>
    </div>
  );
}
