"use client";

import type React from "react";
import { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      <div
        className={`border-1 border-accent absolute z-10 px-3 py-2 text-sm text-light-gray bg-main-white rounded-lg shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap transition-all duration-200 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-1 pointer-events-none"
        }`}
      >
        {text}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          <div className="border-4 border-transparent border-t-accent"></div>
        </div>
      </div>
    </div>
  );
};
