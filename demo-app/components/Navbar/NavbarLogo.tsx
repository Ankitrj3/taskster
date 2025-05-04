import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 px-3 py-1.5">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-full p-1"
      />
      <span className="flex flex-col leading-tight font-roboto">
        <span className="text-lg sm:text-xl font-extrabold tracking-widest text-zinc-900 dark:text-zinc-50 uppercase ls-tight">
          TASKSTER
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wider text-zinc-500 dark:text-zinc-300 uppercase ls-wider">
          SOLUTIONS
        </span>
      </span>
    </Link>
  );
}
