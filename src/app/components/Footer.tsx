import React from "react";
import { footerLinks } from "@/app/constants/footerLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center">
      <div className="bg-accent flex items-center justify-center rounded-tl-[50px] rounded-tr-[50px] py-[20px] gap-12 min-w-[679px] w-full">
        {footerLinks.map((e) => (
          <Link href={e.href}>{e.icon as React.ReactNode}</Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
