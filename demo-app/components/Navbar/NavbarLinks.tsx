import React from "react";
import Link from "next/link";
import { NavItem } from "@/types/navbar";

interface NavbarLinksProps {
  readonly navItems: ReadonlyArray<NavItem>;
  readonly onClick?: () => void;
  readonly className?: string;
}

export default function NavbarLinks({
  navItems,
  onClick,
  className = "",
}: NavbarLinksProps) {
  return (
    <div className="ml-10 flex items-center space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 ${className}`}
          onClick={onClick}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
