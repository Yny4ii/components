import React from "react";
import Image from "next/image";

interface MobileTokenCardProps {
  market: string;
  imageSrc: string;
  tokenName: string;
  chainImageSrc: string;
  apy: string;
  tvl: string;
  incentive: string;
}

const MobileTokenCard = ({
  tokenName,
  market,
  incentive,
  tvl,
  chainImageSrc,
  imageSrc,
  apy,
}: MobileTokenCardProps) => {
  const leftColumnItems = [
    {
      label: "Chain",
      imageSrc: chainImageSrc,
      imageAlt: "chain",
    },
    {
      label: "APY",
      value: `${apy}%`,
      valueClassName: "text-lg",
    },
  ];

  const rightColumnItems = [
    {
      label: "TVL",
      value: tvl,
      valueClassName: "text-lg",
    },
    {
      label: "Incentive",
      imageSrc: incentive,
      imageAlt: tokenName,
    },
  ];
  return (
    <div className="flex flex-col w-full bg-main-bg shadow-main-shadow rounded-lg p-6 text-dark-gray gap-3.5">
      <div className="flex justify-between items-center pb-3.5 border-b-1 border-dark-gray">
        <div className="gap-2 flex items-center">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            src={imageSrc}
            alt={tokenName}
          />
          <span className="text-2xl">{tokenName}</span>
        </div>
        <div className=" text-sm rounded-lg border-1 border-dark-gray py-0.5 px-7">
          {market}
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <InfoColumn items={leftColumnItems} />
        <InfoColumn items={rightColumnItems} />
      </div>
    </div>
  );
};

interface InfoRowProps {
  label: string;
  value?: string;
  imageSrc?: string;
  imageAlt?: string;
  valueClassName?: string;
}

const InfoRow = ({
  label,
  value,
  imageSrc,
  imageAlt,
  valueClassName = "text-lg",
}: InfoRowProps) => {
  return (
    <div className="h-5 flex justify-between items-center">
      <span>{label}</span>
      {imageSrc ? (
        <Image
          width={20}
          height={20}
          className="rounded-full"
          src={imageSrc}
          alt={imageAlt || label}
        />
      ) : (
        <span className={valueClassName}>{value}</span>
      )}
    </div>
  );
};

interface InfoItem {
  label: string;
  value?: string;
  imageSrc?: string;
  imageAlt?: string;
  valueClassName?: string;
}

interface InfoColumnProps {
  items: InfoItem[];
}

const InfoColumn = ({ items }: InfoColumnProps) => {
  return (
    <div className="flex flex-col gap-3.5 grow-1">
      {items.map((item, index) => (
        <InfoRow
          key={index}
          label={item.label}
          value={item.value}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          valueClassName={item.valueClassName}
        />
      ))}
    </div>
  );
};

export default MobileTokenCard;
