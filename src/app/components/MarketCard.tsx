import Image from "next/image";
import InfoCard from "@/app/components/InfoCard";
import { ReactNode } from "react";

export interface MarketCardProps {
  title: string;
  content?: string;
  icon?: string;
  width?: string;
}

const MarketCard = ({ title, content, icon, width }: MarketCardProps) => {
  return (
    <InfoCard title={title} width={width}>
      {content
        ? ((
            <p className="font-normal text-center text-sm text-gray-600">
              {content}
            </p>
          ) as ReactNode)
        : icon
        ? ((
            <Image width={56} height={56} src={icon} alt="token" />
          ) as ReactNode)
        : null}
    </InfoCard>
  );
};
export default MarketCard;
