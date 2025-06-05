"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import Switcher from "@/app/components/Switcher";
import TotalValueLocked from "@/app/components/TotalValueLocked";
import Footer from "@/app/components/Footer";
import Select from "@/app/components/Select";
import MainButton from "@/app/components/MainButton";
import SlippageSelector from "@/app/components/SlippageSettings";
import ResetButton from "@/app/components/ResetButton";
import { selectOptions } from "@/app/constants/selectOptions";
import TokenInfo from "@/app/components/TokenInfo";
import BuySellBlock from "@/app/components/BuySellBlock";
import Table from "@/app/components/Table";
import { navbarLinks } from "@/app/constants/navbarLinks";
import { columns, data } from "@/app/constants/tableData";

export default function Home() {
  const [side, setSide] = useState<"Buy" | "Sell">("Buy");
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Navbar links={navbarLinks} />
      <TotalValueLocked value={"123"} />
      <Switcher
        options={["Buy", "Sell"]}
        active={side}
        onChange={(val) => setSide(val as "Buy" | "Sell")}
      />
      <Select
        options={selectOptions}
        value={selectedValue}
        onChange={setSelectedValue}
        defaultValue={selectOptions[0]}
      />
      <SlippageSelector
        value={0.1}
        onChange={(value) => console.log("New slippage:", value)}
      />
      <ResetButton />
      <Footer />

      <MainButton>Deposit</MainButton>
      <TokenInfo
        imageSrc={
          "https://app.stablejack.xyz/_next/static/media/savax-by-benqi.e373b019.svg"
        }
        title={"YT-savUSD"}
        subtitle={"built on Avant's"}
        description={
          "savUSD is the staked version of avUSD, functioning as a yield-bearing asset. The yield is generated via deploying market-neutral on-chain strategies."
        }
        totalValueLocked={"8,656,654"}
        apy={"12"}
        incentiveSrc={
          "https://app.stablejack.xyz/_next/static/media/savax-by-benqi.e373b019.svg"
        }
      />
      <BuySellBlock />
      <Table
        title="Yield Market - "
        subtitle="Earn fixed or leveraged yield on any asset"
        columns={columns}
        data={data}
      />
    </main>
  );
}
