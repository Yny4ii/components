"use client";
import React from "react";
import { mobileMenuLinks } from "@/app/constants/mobileMenuLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathName = usePathname();
  return (
    <div className="fixed bottom-0 left-0 w-full h-32 px-5 pb-4 flex lg:hidden items-end bg-gradient-to-t from-[#d3caca] from-0% to-[#f7f2f2] to-87.5% z-[999]">
      <div className="flex justify-between w-full items-center">
        {mobileMenuLinks.map((e) => (
          <Link
            className={`text-accent text-xs font-normal cursor-pointer flex flex-col items-center gap-3 ${
              pathName.includes(e.href) ? "opacity-100" : "opacity-60"
            }`}
            key={e.title}
            href={e.title}
          >
            {e.icon as React.ReactNode}
            {e.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
