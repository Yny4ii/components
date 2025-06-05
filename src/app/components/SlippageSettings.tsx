"use client";
import { useEffect, useRef, useState } from "react";
import SettingsIcon from "@/app/icons/SettingsIcon";

const presetValues = [0.1, 0.5, 1.0];

interface SlippageSelectorProps {
  value?: number;
  onChange?: (value: number) => void;
}

export default function SlippageSelector({
  value = 0.1,
  onChange,
}: SlippageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [slippage, setSlippage] = useState(value);
  const [customValue, setCustomValue] = useState("");
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handlePresetClick = (preset: number) => {
    setSlippage(preset);
    setCustomValue("");
    onChange?.(preset);
    setIsOpen(false);
  };

  const handleCustomValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCustomValue(inputValue);

    const numValue = parseFloat(inputValue);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      setSlippage(numValue);
      onChange?.(numValue);
    }
  };

  const handleCustomSubmit = (e: React.KeyboardEvent | React.FormEvent) => {
    e.preventDefault();
    const numValue = parseFloat(customValue);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      setSlippage(numValue);
      onChange?.(numValue);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-[95px] group  cursor-pointer text-accent shadow-main-shadow flex items-center justify-between px-3 py-1 gap-1 text-sm font-medium  bg-transparent  rounded-2xl hover:bg-gray-50 focus:outline-none"
      >
        <span>{slippage}%</span>
        <div className="flex items-center justify-center transition-transform duration-300 group-hover:-rotate-180">
          <SettingsIcon />
        </div>
      </button>
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute top-full left-0 mt-2 w-max bg-white z-50 py-3 px-6
          border border-gray-300 rounded-2xl shadow-main-shadow"
        >
          <div className="">
            <h4 className="font-medium leading-none text-dark-gray text-sm mb-5">
              Max Spillage:
            </h4>
            <div className="grid grid-cols-4 gap-3">
              {presetValues.map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePresetClick(preset)}
                  className={`hover:bg-gray-50 px-2 col-span-1 border-accent border-1 rounded-xl  text-dark-gray flex items-center justify-center font-semibold text-sm py-[1px] cursor-pointer`}
                >
                  {preset}%
                </button>
              ))}
              <button className="hover:bg-gray-50  col-span-1 border-accent border-1 rounded-xl  text-dark-gray flex items-center justify-center font-semibold text-sm py-[1px] cursor-pointer">
                Auto
              </button>
              <input
                type="number"
                value={customValue}
                onChange={handleCustomValueChange}
                placeholder="Enter value"
                min="0"
                max="5"
                step="0.05"
                className="focus:outline-none no-spin-button px-2 col-span-2 border-accent border-1 bg-transparent rounded-xl text-dark-gray flex items-center justify-center font-semibold text-sm py-[1px] cursor-pointer"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCustomSubmit(e);
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
