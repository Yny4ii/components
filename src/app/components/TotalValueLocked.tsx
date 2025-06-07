import React from "react";

interface TotalValueLockedProps {
  value: string;
}

const TotalValueLocked = ({ value }: TotalValueLockedProps) => {
  return (
    <div className="bg-main-bg rounded-lg py-2 px-2 sm:py-3 sm:px-8.5 shadow-main-shadow w-full flex items-center text-accent justify-between">
      <p className="text-sm sm:text-3xl font-medium">Total Value Locked:</p>
      <p className="text-xl sm:text-4xl font-bold">${value}</p>
    </div>
  );
};

export default TotalValueLocked;
