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
          "hover:bg-primary-90 active:bg-primary-70 flex items-center justify-center rounded-md px-5 py-2 text-onPrimary-default",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};

export default AuthButton;
