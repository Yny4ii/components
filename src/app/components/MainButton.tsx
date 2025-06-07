"use client";
import React from "react";

const MainButton = ({
  className = "",
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={`hover:shadow-main-shadow transition-shadow duration-300 border-2 border-accent text-accent px-15 bg-transparent py-3 rounded-lg cursor-pointer ${className}`}
    />
  );
};

export default MainButton;
