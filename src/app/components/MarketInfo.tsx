import React from "react";
import Wrapper from "@/app/components/Wrapper";
import OverviewSection from "@/app/components/OverviewSection";
import MarketCard from "@/app/components/MarketCard";
import { marketCards, overviewSection } from "@/app/constants/marketsData";

const MarketInfo = () => {
  return (
    <Wrapper>
      <div className="text-light-gray">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-4xl font-bold">How Does This Market Work?</h3>
          <div className="flex justify-between w-full">
            {marketCards.map((card, index) => (
              <MarketCard
                key={`market-card-${index}`}
                title={card.title}
                content={card?.content}
                icon={card?.icon}
                width={card.width}
              />
            ))}
          </div>
        </div>
        <OverviewSection
          title={"Overview"}
          leftCards={overviewSection.leftCards}
          rightCards={overviewSection.rightCards}
        />
      </div>
    </Wrapper>
  );
};

export default MarketInfo;
