import { ReactNode } from "react";

export interface InfoCardProps {
  title: string;
  width?: string;
  children: ReactNode;
  className?: string;
}

const InfoCard = ({
  title,
  width = "auto",
  children,
  className = "",
}: InfoCardProps) => {
  return (
    <div
      className={`flex-shrink-0 border border-light-gray rounded-lg py-3 px-2 bg-white flex flex-col items-center justify-center gap-1 ${width} ${className}`}
    >
      <h5 className="text-xl font-bold">{title}</h5>
      {children}
    </div>
  );
};
export default InfoCard;
