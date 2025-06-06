"use client";
import React, { useState } from "react";
import MainButton from "@/app/components/MainButton";
import Switcher from "@/app/components/Switcher";
import SlippageSelector from "@/app/components/SlippageSettings";
import ResetButton from "@/app/components/ResetButton";
import NumericInput from "@/app/components/NumericInput";
import Select, { SelectOption } from "@/app/components/Select";

interface BuySellBlockProps {
  activeSelectOptions: SelectOption[];
  inactiveSelectOption: SelectOption;
  onSideChange?: (side: "Buy" | "Sell") => void;
  onValueChange?: (value: string, numericValue: number) => void;
  onSlippageChange?: (value: number) => void;
  onFirstSelectChange?: (option: SelectOption) => void;
  onSecondSelectChange?: (option: SelectOption) => void;
  onSubmit?: (
    side: "Buy" | "Sell",
    value: string,
    firstOption: SelectOption,
    secondOption: SelectOption
  ) => void;
  initialValue?: string;
  slippageValue?: number;
  maxValue?: number;
  secondaryValue?: string;
  disabled?: boolean;
}

const BuySellBlock = ({
  activeSelectOptions,
  inactiveSelectOption,
  onSideChange,
  onValueChange,
  onSlippageChange,
  onFirstSelectChange,
  onSecondSelectChange,
  onSubmit,
  initialValue = "",
  slippageValue = 0.1,
  maxValue = 100,
  secondaryValue = "$100.00",
  disabled = false,
}: BuySellBlockProps) => {
  const [side, setSide] = useState<"Buy" | "Sell">("Buy");
  const [value, setValue] = useState("");

  const [firstSelect, setFirstSelect] = useState<SelectOption>(
    side === "Buy" ? activeSelectOptions[0] : inactiveSelectOption
  );
  const [secondSelect, setSecondSelect] = useState<SelectOption>(
    side === "Buy" ? inactiveSelectOption : activeSelectOptions[0]
  );

  const handleSideChange = (newSide: string) => {
    if (newSide === "Buy" || newSide === "Sell") {
      setSide(newSide);
      const tempFirst = firstSelect;
      const tempSecond = secondSelect;
      setFirstSelect(tempSecond);
      setSecondSelect(tempFirst);
      onSideChange?.(newSide);
    }
  };
  const handleFirstSelectChange = (option: SelectOption) => {
    setFirstSelect(option);
    onFirstSelectChange?.(option);
  };

  const handleSecondSelectChange = (option: SelectOption) => {
    setSecondSelect(option);
    onSecondSelectChange?.(option);
  };

  const firstSelectOptions =
    side === "Buy" ? activeSelectOptions : [inactiveSelectOption];
  const secondSelectOptions =
    side === "Buy" ? [inactiveSelectOption] : activeSelectOptions;
  const isFirstSelectActive = side === "Buy";
  const isSecondSelectActive = side === "Sell";
  return (
    <div className="py-6 px-5 rounded-lg shadow-main-shadow flex  gap-5 flex-col">
      <div className="border-1 border-accent rounded-lg py-5 px-8 flex flex-col items-center gap-6">
        <div className="flex justify-between w-full">
          <Switcher
            options={["Buy", "Sell"]}
            active={side}
            onChange={handleSideChange}
          />
          <div className="flex gap-2">
            <SlippageSelector
              value={0.1}
              onChange={(value) => console.log("New slippage:", value)}
            />
            <ResetButton />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <NumericInput
            value={value}
            onChange={setValue}
            onValueChange={(num) => console.log("Numeric value:", num)}
            maxValue={maxValue}
            step={0.1}
            secondaryValue="$100.00"
            disabled={false}
            showMaxButton={true}
            formatOptions={{
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }}
            allowDecimals={true}
            maxDecimals={2}
          />
          <Select
            disabled={!isFirstSelectActive}
            options={firstSelectOptions}
            currentOption={firstSelect}
            onChange={handleFirstSelectChange}
          />
        </div>
        <MainButton>{side === "Buy" ? "Deposit" : "Withdraw"}</MainButton>
      </div>
      <div className="text-light-gray border-1 border-light-gray rounded-lg shadow-main-shadow py-2 px-8 bg-main-white flex items-center justify-between">
        <div className="text-xl font-normal">You Receive:</div>
        <div className="text-2xl font-bold flex items-center gap-2">
          <div>123</div>
          <Select
            disabled={!isSecondSelectActive}
            options={secondSelectOptions}
            currentOption={secondSelect}
            onChange={handleSecondSelectChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BuySellBlock;
