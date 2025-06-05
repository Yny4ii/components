import React from "react";
import Wrapper from "@/app/components/Wrapper";
import Box from "@/app/components/Box";
import Image from "next/image";

interface TokenInfoProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  totalValueLocked: string;
  apy: string;
  incentiveSrc: string;
}

const TokenInfo = ({
  imageSrc,
  apy,
  description,
  incentiveSrc,
  subtitle,
  totalValueLocked,
  title,
}: TokenInfoProps) => {
  return (
    <Wrapper>
      <div className="flex gap-5 justify-start text-light-gray flex-col">
        <div className="flex items-center gap-2 ">
          <Image width={48} height={48} src={imageSrc} alt={title} />
          <h3 className="font-bold text-4xl">{title}</h3>
        </div>
        <h4 className="text-xl font-semibold">{subtitle}</h4>
        <p className="font-normal">{description}</p>
        <div className="flex gap-5">
          <Box title={"Total Value Locked"}>
            <span>${totalValueLocked}</span>
          </Box>
          <Box title={"APY"}>
            <span>{apy}%</span>
          </Box>
          <Box title={"Incentive"}>
            <Image
              width={36}
              height={36}
              className="rounded-full"
              src={incentiveSrc}
              alt={title}
            />
          </Box>
        </div>
      </div>
    </Wrapper>
  );
};

export default TokenInfo;
