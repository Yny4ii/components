"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import Switcher from "@/app/components/Switcher";
import TotalValueLocked from "@/app/components/TotalValueLocked";
import Footer from "@/app/components/Footer";
import Select, { SelectOption } from "@/app/components/Select";
import MainButton from "@/app/components/MainButton";
import SlippageSelector from "@/app/components/SlippageSettings";
import ResetButton from "@/app/components/ResetButton";
import { selectOption, selectOptions } from "@/app/constants/selectOptions";
import TokenInfo from "@/app/components/TokenInfo";
import BuySellBlock from "@/app/components/BuySellBlock";
import Table from "@/app/components/Table";
import { navbarLinks } from "@/app/constants/navbarLinks";
import { columns, data } from "@/app/constants/tableData";
import type { ChartConfig } from "@/app/components/Chart";
import CustomChart from "@/app/components/CustomChart";
import Wrapper from "@/app/components/Wrapper";

const chartData = [
  { month: "January", desktop: 206 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 214 },
  { month: "August", desktop: 40 },
  { month: "September", desktop: 80 },
  { month: "October", desktop: 43 },
  { month: "November", desktop: 256 },
  { month: "December", desktop: 320 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
} satisfies ChartConfig;
export default function Home() {
  const [side, setSide] = useState<"Buy" | "Sell">("Buy");
  const [selectedValue, setSelectedValue] = useState<SelectOption>(
    selectOptions[0]
  );
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-5">
      <Navbar links={navbarLinks} />
      <TotalValueLocked value={"123"} />
      <Switcher
        options={["Buy", "Sell"]}
        active={side}
        onChange={(val) => setSide(val as "Buy" | "Sell")}
      />
      <Select
        options={selectOptions}
        currentOption={selectedValue}
        onChange={setSelectedValue}
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
      <BuySellBlock
        activeSelectOptions={selectOptions}
        inactiveSelectOption={selectOption}
        initialSide="Buy"
        slippageValue={0.1}
        maxValue={1000}
        secondaryValue="$1,000.00"
      />
      <Table
        title="Yield Market - "
        subtitle="Earn fixed or leveraged yield on any asset"
        columns={columns}
        data={data}
      />
      <Wrapper>
        <div className="flex items-center justify-between">
          <h3>Total Value Locked</h3>
          <Select
            options={[{ label: "All Time", value: "allTime" }]}
            currentOption={selectedValue}
            onChange={setSelectedValue}
          />
        </div>
        <CustomChart
          chartConfig={chartConfig}
          chartData={chartData}
          areaDataKey={"desktop"}
          axisDataKey={"month"}
        />
      </Wrapper>
    </main>
  );
}
