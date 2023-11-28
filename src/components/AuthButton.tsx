"use client";

import cn from "@/utils/cn";
import React from "react";

interface AuthButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AuthButton = ({ children, className, onClick }: AuthButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-center rounded-md bg-primary-80 px-4 py-2 text-onPrimary-30 hover:bg-primary-90 active:bg-primary-70",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};

export default AuthButton;
