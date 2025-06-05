"use client";
import React, { useEffect, useRef, useState } from "react";
import ArrowIcon from "@/app/icons/ArrowIcon";
import Image from "next/image";

export interface SelectOption {
  value: string;
  label: string;
  imageSrc: string;
}

export interface SelectProps {
  options: SelectOption[];
  currentOption: SelectOption;
  onChange: (value: SelectOption) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  currentOption,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  const isSelected = (option: SelectOption) => {
    return currentOption.value === option.value;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const current = selectRef.current;
      if (current && !current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className={`relative`}>
      <div ref={selectRef} className="relative text-dark-gray text-xl">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 
            relative w-full rounded-2xl py-4 px-5 shadow-secondary-shadow cursor-pointer bg-transparent transition-colors
            justify-between
          `}
        >
          <div className=" flex items-center gap-2 ">
            <Image
              className="rounded-full"
              width={35}
              height={35}
              src={currentOption.imageSrc}
              alt={currentOption.label}
            />
            <span className={"max-w-[53px] truncate "}>
              {currentOption.label}
            </span>
          </div>

          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ArrowIcon />
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-main-white border border-gray-300 rounded-2xl shadow-main-shadow  overflow-auto">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`
                     py-4 px-5  cursor-pointer flex items-center justify-between
                    ${isSelected(option) ? "bg-gray-50 text-accent" : ""}
                  `}
              >
                <Image
                  className="rounded-full"
                  width={35}
                  height={35}
                  src={currentOption.imageSrc}
                  alt={currentOption.label}
                />
                <div className="flex items-center gap-2">{option.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
