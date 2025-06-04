"use client";
import React from "react";

const MainButton = ({ ...props }: React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="border-2 border-accent text-accent px-15 bg-transparent py-3 rounded-lg cursor-pointer"
    />
  );
};

export default MainButton;
