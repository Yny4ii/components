"use client";
import React, { useState } from "react";
import Wrapper from "@/app/components/Wrapper";
import Switcher from "@/app/components/Switcher";
import NumericInput from "@/app/components/NumericInput";
import MainButton from "@/app/components/MainButton";
import Image from "next/image";

const TokenOperationBlock = () => {
  const [activeOption, setActiveOption] = useState("Deposit");
  const [inputValue, setInputValue] = useState("");
  return (
    <Wrapper>
      <div className="flex flex-col gap-4 ">
        <Switcher
          options={["Deposit", "Withdraw", "Claim"]}
          active={activeOption}
          onChange={setActiveOption}
        />
        <div className="flex flex-col gap-5 lg:flex-row">
          {activeOption !== "Claim" && (
            <div className="flex flex-col gap-2 lg:gap-0  lg:grow-1">
              <div className="block  self-end text-xs text-dark-gray font-semibold">
                Balance: <span className="font-normal">0.5746</span>
              </div>
              <div className="flex flex-col gap-2">
                <NumericInput
                  secondaryValue={"$100"}
                  maxValue={100}
                  value={inputValue}
                  onChange={setInputValue}
                />
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2.5 lg:grow-1">
            <BalanceBlock />
            <BalanceBlock />
          </div>
        </div>

        <MainButton className="self-center">{activeOption}</MainButton>
        {activeOption !== "Claim" && (
          <div className="text-dark-gray flex flex-col items-center text-xs font-normal">
            If the CR drops below 147%, Rebalance Pool will be activated.
            <span className="font-bold">Now : 236.76%</span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const BalanceBlock = () => {
  return (
    <div className="rounded-full bg-main-white text-dark-gray shadow-secondary-shadow py-2 px-5.5 flex justify-between items-center">
      <div className="flex items-center gap-2.5 text-xs font-medium">
        <Image
          className={"w-5 h-w"}
          width={20}
          height={20}
          src={
            "https://app.stablejack.xyz/_next/static/media/usdc.28e4cab5.svg"
          }
          alt={"token"}
        />
        <span>Staked aUSD Balance</span>
      </div>
      <span className="text-sm">0.00</span>
    </div>
  );
};

export default TokenOperationBlock;
