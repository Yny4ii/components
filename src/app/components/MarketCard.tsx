import Image from "next/image";
import InfoCard from "@/app/components/InfoCard";
import type { ReactNode } from "react";

export interface MarketCardProps {
  title: string;
  content?: string;
  icon?: string;
  className?: string;
}

const MarketCard = ({ title, content, icon, className }: MarketCardProps) => {
  return (
    <InfoCard title={title} className={className}>
      {content
        ? ((
            <p className="font-normal text-center text-sm text-gray-600">
              {content}
            </p>
          ) as ReactNode)
        : icon
        ? ((
            <Image
              className="w-10 h-10 sm:w-14 sm-h-14"
              width={56}
              height={56}
              src={icon}
              alt="token"
            />
          ) as ReactNode)
        : null}
    </InfoCard>
  );
};

export default MarketCard;
