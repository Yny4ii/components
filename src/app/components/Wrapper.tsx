import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      className={`w-full bg-secondary-bg border-b border-r border-accent py-10 px-13 rounded-lg shadow-main-shadow`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
