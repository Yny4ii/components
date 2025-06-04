import React from "react";
interface BoxProps {
  title: string;
  children: React.ReactNode;
}
const Box = ({ children, title }: BoxProps) => {
  return (
    <div className="shadow-main-shadow border-1 border-light-gray rounded-lg text-light-gray py-6 px-10 bg-main-white flex flex-col gap-1 items-center">
      <span className="text-xl font-normal">{title}</span>
      {children}
    </div>
  );
};

export default Box;
