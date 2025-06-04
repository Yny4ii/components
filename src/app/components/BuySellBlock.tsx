"use client";
import React, { useState } from "react";
import MainButton from "@/app/components/MainButton";
import Switcher from "@/app/components/Switcher";
import SlippageSelector from "@/app/components/SlippageSettings";
import ResetButton from "@/app/components/ResetButton";
import NumericInput from "@/app/components/NumericInput";
import { selectOptions } from "@/app/constants/selectOptions";
import Select from "@/app/components/Select";

const BuySellBlock = () => {
  const [side, setSide] = useState<"Buy" | "Sell">("Buy");
  const [selectedValue, setSelectedValue] = useState();

  return (
    <div className="py-6 px-5 rounded-lg shadow-main-shadow flex flex-column gap-5">
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
          <NumericInput />
          <Select
            options={selectOptions}
            value={selectedValue}
            onChange={setSelectedValue}
            defaultValue={selectOptions[0]}
          />
        </div>
        <MainButton>Deposit</MainButton>
      </div>
    </div>
  );
};

export default BuySellBlock;
