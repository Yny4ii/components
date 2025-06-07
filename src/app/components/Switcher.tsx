"use client";
import React, { useEffect, useRef, useState } from "react";

interface SwitcherProps {
  options: string[];
  active: string;
  onChange: (value: string) => void;
}

const Switcher = ({ options, active, onChange }: SwitcherProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const activeIndex = options.indexOf(active);
    const buttons = containerRef.current.querySelectorAll("button");

    if (buttons[activeIndex]) {
      const button = buttons[activeIndex] as HTMLElement;
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      setIndicatorStyle({
        width: buttonRect.width,
        left: buttonRect.left - containerRect.left,
      });
    }
  }, [active, options]);

  return (
    <div
      ref={containerRef}
      className="relative flex rounded-full w-fit before:content-['']
  before:absolute
  before:w-[98%]
  before:h-full
  before:border-[0.5px]
  before:border-accent
  before:rounded-full
  before:z-[3]
  before:left-[1%]"
    >
      <div
        className="absolute top-0 h-full bg-accent rounded-full transition-all duration-300 ease-out z-0"
        style={{
          width: `${indicatorStyle.width}px`,
          left: `${indicatorStyle.left}px`,
        }}
      />

      {options.map((option) => {
        const isActive = active === option;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`relative z-10 border-1 cursor-pointer  rounded-full transition-all duration-300 text-xs py-1 px-7 sm:text-sm sm:px-10 sm:py-2 font-medium ${
              isActive
                ? "text-main-white border-main-white shadow-md"
                : "text-accent border-transparent hover:text-accent/80"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Switcher;
