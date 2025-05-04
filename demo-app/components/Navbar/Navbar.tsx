"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { NavItem } from "@/types/navbar";
import NavbarSkeleton from "../skeletons/NavbarSkeleton";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarThemeToggle from "./NavbarThemeToggle";
import NavbarMobileMenu from "./NavbarMobileMenu";
import { motion, AnimatePresence } from "framer-motion";

const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Our Team", href: "#team" },
  { name: "How We Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = dynamic(() => Promise.resolve(NavbarComponent), {
  ssr: false,
  loading: () => <NavbarSkeleton />,
});

function NavbarComponent() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800 shadow-sm"
          />
        )}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavbarLogo />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavbarLinks navItems={navItems} isScrolled={isScrolled} />
              <NavbarThemeToggle
                theme={theme}
                toggleTheme={toggleTheme}
                mounted={mounted}
              />
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <NavbarThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
              mounted={mounted}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-200 ml-4 ${
                isScrolled
                  ? "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <NavbarMobileMenu
        navItems={navItems}
        isScrolled={isScrolled}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
}
