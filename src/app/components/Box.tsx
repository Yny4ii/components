import React from "react";
interface BoxProps {
  title: string;
  children: React.ReactNode;
}
const Box = ({ children, title }: BoxProps) => {
  return (
    <div className="w-full xl:w-[258px] justify-between shadow-main-shadow border-1 border-light-gray rounded-lg text-light-gray py-4 px-6 sm:py-5.5 sm:px-10 flex-row lg:flex-col bg-main-white flex  gap-1 items-center">
      <span className="font-base sm:text-xl font-normal">{title}</span>
      {children}
    </div>
  );
};

export default Box;
