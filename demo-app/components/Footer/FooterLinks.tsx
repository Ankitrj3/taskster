import React from "react";

interface Link {
  title: string;
  href: string;
}

export default function FooterLinks({ links }: { links: Link[] }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 tracking-tight text-zinc-900 dark:text-zinc-50">
        Quick Links
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all duration-200 hover:translate-x-1"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
