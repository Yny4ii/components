import InfoCard from "./InfoCard";
import RiskItem, { RiskItemProps } from "@/app/components/RiskItem";

export interface OverviewSectionProps {
  title: string;
  leftCards: {
    title: string;
    content: string;
  }[];
  rightCards: {
    title: string;
    items: RiskItemProps[];
  }[];
}

export default function OverviewSection({
  title,
  leftCards,
  rightCards,
}: OverviewSectionProps) {
  return (
    <div className="mt-5 flex-col bg-white rounded-lg shadow-sm py-5 px-7 flex gap-2 items-center justify-center">
      <h3 className="text-4xl">{title}</h3>
      <div className="flex gap-5 w-full">
        <div className="flex flex-col gap-2 w-1/2">
          {leftCards.map((card, index) => (
            <InfoCard
              key={`left-card-${index}`}
              title={card.title}
              className="shadow-sm w-full "
            >
              <p className="font-normal">{card.content}</p>
            </InfoCard>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          {rightCards.map((card, index) => (
            <InfoCard
              key={`right-card-${index}`}
              title={card.title}
              className="shadow-main-shadow w-full "
            >
              <div className="flex flex-col gap-2">
                {card.items.map((item, itemIndex) => (
                  <RiskItem
                    key={`risk-item-${index}-${itemIndex}`}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </InfoCard>
          ))}
        </div>
      </div>
    </div>
  );
}
