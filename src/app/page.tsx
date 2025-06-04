"use client";
import Navbar from "@/app/components/Navbar";
import { ReactNode, useState } from "react";
import Switcher from "@/app/components/Switcher";
import TotalValueLocked from "@/app/components/TotalValueLocked";
import Footer from "@/app/components/Footer";
import Select from "@/app/components/Select";
import { allowedDisplayValues } from "next/dist/compiled/@next/font/dist/constants";
import UsdcIcon from "@/app/icons/UsdcIcon";
import MainButton from "@/app/components/MainButton";
import SlippageSelector from "@/app/components/SlippageSettings";
import ResetButton from "@/app/components/ResetButton";
import NumericInput from "@/app/components/NumericInput";
import { selectOptions } from "@/app/constants/selectOptions";
import Wrapper from "@/app/components/Wrapper";
import TokenInfo from "@/app/components/TokenInfo";
import SavusdIcon from "@/app/icons/SavusdIcon";
import BuySellBlock from "@/app/components/BuySellBlock";

export const linksAArray = [
  { href: "/", title: "Markets" },
  { href: "/leaderboard", title: "Leaderboard" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/jack", title: "$Jack" },
  { href: "/education", title: "Education" },
];
export default function Home() {
  const [side, setSide] = useState<"Buy" | "Sell">("Buy");
  const [selectedValue, setSelectedValue] = useState();
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Navbar links={linksAArray} />
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
      <NumericInput />
      <MainButton>Deposit</MainButton>
      <TokenInfo
        icon={(<SavusdIcon />) as ReactNode}
        title={"YT-savUSD"}
        subtitle={"built on Avant's"}
        description={"lorem"}
        totalValueLocked={"12"}
        apy={"12"}
        incentive={<></>}
      />
      <BuySellBlock />
    </main>
  );
}
