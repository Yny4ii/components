"use client";
import React from "react";
import ResetIcon from "@/app/icons/ResetIcon";

const ResetButton = ({ ...props }: React.ComponentProps<"button">) => {
  return (
    <button
      className="hover:bg-gray-50 cursor-pointer flex items-center justify-center shadow-main-shadow rounded-full w-6 h-6 sm:w-8.5 sm:h-8.5 group"
      {...props}
    >
      <div className="flex items-center justify-center transition-transform duration-300 group-hover:-rotate-180">
        <ResetIcon />
      </div>
    </button>
  );
};

export default ResetButton;
