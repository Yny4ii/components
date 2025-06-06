"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import ArrowIcon from "@/app/icons/ArrowIcon";
import Image from "next/image";

export interface SelectOption {
  value: string;
  label: string;
  imageSrc?: string;
}

export interface SelectProps {
  options: SelectOption[];
  currentOption: SelectOption;
  onChange: (value: SelectOption) => void;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  currentOption,
  onChange,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClick = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
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
    <div className="relative">
      <div ref={selectRef} className="relative text-dark-gray text-xl">
        <div
          onClick={handleClick}
          className={`max-h-17 h-[68px] max-w-41 w-41 flex items-center gap-2 
            relative rounded-2xl py-4 px-5 transition-all
            justify-between
           ${
             disabled
               ? "cursor-not-allowed"
               : "bg-transparent cursor-pointer shadow-secondary-shadow"
           }
          `}
        >
          <div className="flex items-center gap-2">
            {currentOption.imageSrc && (
              <Image
                className="rounded-full"
                width={35}
                height={35}
                src={currentOption.imageSrc}
                alt={currentOption.label}
              />
            )}
            <span
              className={` ${
                currentOption.imageSrc ? "max-w-[53px]" : "max-w-[120px]"
              }`}
            >
              {currentOption.label}
            </span>
          </div>

          <div
            className={`transition-all duration-300 ${
              isOpen ? "rotate-180" : ""
            } 
              ${disabled ? "opacity-0" : "opacity-100"}
            `}
          >
            <ArrowIcon />
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-main-white border border-gray-300 rounded-2xl shadow-main-shadow overflow-auto">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`
                     py-4 px-5 cursor-pointer flex items-center gap-2
                    ${isSelected(option) ? "bg-secondary-bg text-accent" : ""}
                  `}
              >
                {option.imageSrc && (
                  <Image
                    className="rounded-full"
                    width={35}
                    height={35}
                    src={option.imageSrc}
                    alt={option.label}
                  />
                )}
                <div className="flex items-center gap-2">
                  <span
                    className={option.imageSrc ? "max-w-[53px] truncate" : ""}
                  >
                    {option.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
