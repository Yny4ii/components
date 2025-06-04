"use client";
import React, { useState, useRef, useEffect } from "react";
import ArrowIcon from "@/app/icons/ArrowIcon";

export interface SelectOption {
  value: string;
  label: React.ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  defaultValue?: SelectOption;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  defaultValue,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const getSelectedOption = () => {
    return options.find((option) => option.value === value);
  };

  const handleSelect = (option: SelectOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const isSelected = (option: SelectOption) => {
    return value === option.value;
  };

  const displayValue = () => {
    const selectedOption = getSelectedOption();
    return selectedOption ? selectedOption.label : defaultValue?.label;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const selectedOption = getSelectedOption();
  return (
    <div className={`relative ${className}`}>
      <div ref={selectRef} className="relative text-dark-gray text-xl">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 
            relative w-full rounded-2xl py-4 px-5 shadow-secondary-shadow cursor-pointer bg-transparent transition-colors
            justify-between
          `}
        >
          <div className="flex-1 flex items-center overflow-hidden">
            <span className={"flex items-center gap-2"}>{displayValue()}</span>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ArrowIcon />
            </div>
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
