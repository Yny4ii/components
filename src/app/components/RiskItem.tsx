import React from "react";

export interface RiskItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RiskItem = ({ icon, title, description }: RiskItemProps) => {
  return (
    <div className="flex items-start gap-1 text-xs sm:text-base">
      <div className="flex justify-center items-center">{icon}</div>
      <span className="font-normal">
        <span className="font-bold">{title}</span> {description}
      </span>
    </div>
  );
};
export default RiskItem;
