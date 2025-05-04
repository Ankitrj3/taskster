import React from "react";
import NavbarLinks from "./NavbarLinks";
import { NavItem } from "@/types/navbar";

interface NavbarMobileMenuProps {
  readonly navItems: ReadonlyArray<NavItem>;
  readonly isScrolled: boolean;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function NavbarMobileMenu({
  navItems,
  isScrolled,
  isOpen,
  onClose,
}: NavbarMobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="md:hidden transition-all duration-300 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavbarLinks
          navItems={navItems}
          onClick={onClose}
          className="block px-3 py-2 rounded-md text-base font-medium"
        />
      </div>
    </div>
  );
}
