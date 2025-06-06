import React from "react";

export interface RiskItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RiskItem = ({ icon, title, description }: RiskItemProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex justify-center items-center w-8 h-8">{icon}</div>
      <span className="font-normal">
        <span className="font-bold">{title}</span> {description}
      </span>
    </div>
  );
};
export default RiskItem;
