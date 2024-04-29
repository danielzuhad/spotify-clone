"use client";
import cn from "@/lib/cn";
import React, { ReactNode } from "react";

interface AuthButtonProps {
  children?: React.ReactNode;
  className?: string;
  auth?: "signIn" | "signOut";
  icon?: ReactNode;
  loading?: boolean;
  handleLogin?: () => void;
}

const AuthButton = ({
  children,
  className,
  auth,
  icon,
  loading,
  handleLogin,
}: AuthButtonProps) => {
  return (
    <button
      onClick={handleLogin}
      className={cn(
        "hover:bg-primary-90 active:bg-primary-70 text-onPrimary-default flex items-center justify-center gap-5  rounded-md border-2 border-black/50 px-5 py-1 text-xl font-medium hover:cursor-pointer",
        className,
        loading &&
          "animate-pulse bg-[#d3d3d3] text-black hover:cursor-wait hover:bg-[#d3d3d3]",
      )}
    >
      {children}

      {icon}
    </button>
  );
};

export default AuthButton;
