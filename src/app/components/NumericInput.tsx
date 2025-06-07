"use client";
import React, { useEffect, useState } from "react";

interface NumericInputProps {
  value: string;
  onChange: (value: string) => void;
  onValueChange?: (numericValue: number) => void;
  maxValue?: number;
  minValue?: number;
  step?: number;
  placeholder?: string;
  secondaryValue?: string;
  disabled?: boolean;
  showMaxButton?: boolean;
  formatOptions?: Intl.NumberFormatOptions;
  allowDecimals?: boolean;
  maxDecimals?: number;
}

const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onChange,
  onValueChange,
  maxValue,
  minValue = 0,
  step = 0.01,
  placeholder = "0.00",
  secondaryValue,
  disabled = false,
  showMaxButton = true,
  formatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  },
  allowDecimals = true,
  maxDecimals = 6,
}) => {
  const [localValue, setLocalValue] = useState<string>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^\d.,-]/g, "");

    if (!allowDecimals && sanitizedValue.includes(".")) {
      return;
    }

    const [_, decimal] = sanitizedValue.split(".");
    if (decimal && decimal.length > maxDecimals) {
      return;
    }

    if (sanitizedValue === "" || /^\d*\.?\d*$/.test(sanitizedValue)) {
      const numValue = parseFloat(sanitizedValue);

      if (
        sanitizedValue === "" ||
        isNaN(numValue) ||
        ((minValue === undefined || numValue >= minValue) &&
          (maxValue === undefined || numValue <= maxValue))
      ) {
        setLocalValue(sanitizedValue);
        onChange(sanitizedValue);
        if (onValueChange && !isNaN(numValue)) {
          onValueChange(numValue);
        }
      }
    }
  };

  const handleBlur = () => {
    if (localValue) {
      const numValue = parseFloat(localValue);
      if (!isNaN(numValue)) {
        const formattedValue = numValue.toFixed(
          formatOptions.maximumFractionDigits
        );
        setLocalValue(formattedValue);
        onChange(formattedValue);
        if (onValueChange) {
          onValueChange(numValue);
        }
      }
    }
  };

  const handleMaxClick = () => {
    if (maxValue !== undefined && !disabled) {
      const formattedValue = maxValue.toFixed(
        formatOptions.maximumFractionDigits
      );
      setLocalValue(formattedValue);
      onChange(formattedValue);
      if (onValueChange) {
        onValueChange(maxValue);
      }
    }
  };

  return (
    <div className="relative">
      <div
        className={`bg-main-white flex items-center overflow-hidden focus-within:border-blue-500 text-light-gray py-1.5 px-4 sm:px-9 shadow-main-shadow rounded-[20px] ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <div className="flex flex-col justify-between flex-1">
          <input
            type="text"
            value={localValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={`text-lg sm:text-xl font-bold bg-main-white outline-none ${
              disabled ? "cursor-not-allowed" : ""
            }`}
            step={step}
            min={minValue}
            max={maxValue}
          />
          {secondaryValue && (
            <div className="text-xs sm:text-sm font-normal sm:mt-1">
              {secondaryValue}
            </div>
          )}
        </div>

        {showMaxButton && maxValue !== undefined && (
          <button
            onClick={handleMaxClick}
            disabled={disabled}
            className={`cursor-pointer hover:bg-gray-50 transition-colors shadow-main-shadow rounded-full text-base font-medium py-1 px-5 ${
              disabled ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Max
          </button>
        )}
      </div>
    </div>
  );
};

export default NumericInput;
