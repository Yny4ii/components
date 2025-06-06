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
    <nav className="rounded-full px-18.5 py-3 bg-main-bg shadow-main-shadow">
      <ul className="flex items-center gap-[30px]">
        {links.map((e) => (
          <li key={e.title}>
            <Link
              className={`duration-300  block text-xl py-5 px-14 rounded-full ${
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
