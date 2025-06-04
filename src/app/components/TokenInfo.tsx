import React from "react";
import Wrapper from "@/app/components/Wrapper";
import Box from "@/app/components/Box";

interface TokenInfoProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  totalValueLocked: string;
  apy: string;
  incentive: React.ReactNode;
}

const TokenInfo = ({
  apy,
  description,
  incentive,
  subtitle,
  totalValueLocked,
  title,
  icon,
}: TokenInfoProps) => {
  return (
    <Wrapper>
      <div className="flex gap-5 justify-start text-light-gray flex-col">
        <div className="flex items-center gap-2 ">
          <div>{icon}</div>
          <h3 className="font-bold text-4xl">{title}</h3>
        </div>
        <h4 className="text-xl font-semibold">{description}</h4>
        <p className="font-normal">{description}</p>
        <div className="flex">
          <Box title={"Total Value Locked"}>
            <span>$8,656,455</span>
          </Box>
        </div>
      </div>
    </Wrapper>
  );
};

export default TokenInfo;
