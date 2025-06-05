"use client";
import React, { useState } from "react";
import MainButton from "@/app/components/MainButton";
import Switcher from "@/app/components/Switcher";
import SlippageSelector from "@/app/components/SlippageSettings";
import ResetButton from "@/app/components/ResetButton";
import NumericInput from "@/app/components/NumericInput";
import { selectOptions } from "@/app/constants/selectOptions";
import Select, { SelectOption } from "@/app/components/Select";
import Image from "next/image";

const BuySellBlock = () => {
  const [side, setSide] = useState<"Buy" | "Sell">("Buy");
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<SelectOption>(
    selectOptions[0]
  );

  return (
    <div className="py-6 px-5 rounded-lg shadow-main-shadow flex  gap-5 flex-col">
      <div className="border-1 border-accent rounded-lg py-5 px-8 flex flex-col items-center gap-6">
        <div className="flex justify-between w-full">
          <Switcher
            options={["Buy", "Sell"]}
            active={side}
            onChange={(val) => setSide(val as "Buy" | "Sell")}
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
            maxValue={100}
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
            options={selectOptions}
            currentOption={selectedValue}
            onChange={setSelectedValue}
            defaultValue={selectOptions[0]}
          />
        </div>
        <MainButton>{side === "Buy" ? "Deposit" : "Withdraw"}</MainButton>
      </div>
      <div className="text-light-gray border-1 border-light-gray rounded-lg shadow-shadow-main py-3 px-4 bg-main-white flex items-center justify-between">
        <div className="text-xl font-normal">You Receive:</div>
        <div className="text-2xl font-bold flex items-center gap-2">
          <div>123</div>
          <div>123</div>
          {/*<Image width={34} height={34} src={} alt={} />*/}
        </div>
      </div>
    </div>
  );
};

export default BuySellBlock;
