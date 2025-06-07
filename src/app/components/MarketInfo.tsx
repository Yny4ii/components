import Wrapper from "@/app/components/Wrapper";
import OverviewSection from "@/app/components/OverviewSection";
import MarketCard from "@/app/components/MarketCard";
import { marketCards, overviewSection } from "@/app/constants/marketsData";

const MarketInfo = () => {
  return (
    <Wrapper>
      <div className="text-light-gray">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-xl sm:text-4xl font-bold">
            How Does This Market Work?
          </h3>
          <div className="flex flex-col lg:flex-row justify-between w-full gap-4 lg:gap-0">
            {marketCards.map((card, index) => (
              <MarketCard
                key={`market-card-${index}`}
                title={card.title}
                content={card?.content}
                icon={card?.icon}
                className={`w-full ${
                  index === 0
                    ? "lg:w-[375px]"
                    : "lg:w-[252px] flex-row lg:flex-col"
                }`}
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
