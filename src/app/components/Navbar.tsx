"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  links: {
    title: string;
    href: string;
  }[];
}

const Navbar = ({ links }: NavbarProps) => {
  const pathName = usePathname();
  return (
    <nav className="hidden lg:block rounded-full px-8 xl:px-16 xl:px-18.5 py-3 bg-main-bg shadow-main-shadow">
      <ul className="flex items-center gap-5 xl:gap-7.5">
        {links.map((e) => (
          <li key={e.title}>
            <Link
              className={`duration-300 px-6 py-4  block text-xl xl:py-5 xl:px-14 rounded-full ${
                pathName.includes(e.href)
                  ? "bg-accent text-gray-50"
                  : "text-soft-red hover:text-accent"
              }`}
              href={e.href}
            >
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
