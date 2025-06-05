import React from "react";
import { footerLinks } from "@/app/constants/footerLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center">
      <div className="bg-accent flex items-center justify-center rounded-tl-[50px] rounded-tr-[50px] py-5 gap-12 min-w-[679px] w-full">
        {footerLinks.map((e, i) => (
          <Link
            className="hover:scale-115 transition-transform duration-300"
            key={i}
            href={e.href}
          >
            {e.icon as React.ReactNode}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
