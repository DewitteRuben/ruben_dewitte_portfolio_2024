"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "work" },
  { href: "/projects", label: "projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href === "/projects" && pathname.startsWith("/project/"));

  return (
    <nav className="mb-16 flex items-center justify-between tracking-tight">
      <Link
        href="/"
        className="font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition-opacity"
      >
        ruben dewitte
      </Link>
      <div className="flex gap-5">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(href) ? "page" : undefined}
            className={
              isActive(href)
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            }
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
