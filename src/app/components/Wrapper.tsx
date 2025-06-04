import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-secondary-bg border-b border-r border-accent py-10 px-13 rounded-lg shadow-main-shadow">
      {children}
    </div>
  );
};

export default Wrapper;
