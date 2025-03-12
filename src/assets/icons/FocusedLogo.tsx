"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

const FocusedLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-[38px] h-[38px] bg-[#201a55] rounded-full flex items-center justify-center">
        <span className="text-white text-lg font-bold">F</span>
      </div>
      <span className="ml-2.5 text-xl font-bold tracking-wide text-[#201a55]">
        FOCUSED
      </span>
    </div>
  );
};

export default FocusedLogo;
