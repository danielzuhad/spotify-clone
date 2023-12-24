"use client";

import cn from "@/utils/cn";
import { signIn, signOut } from "next-auth/react";
import React from "react";

interface AuthButtonProps {
  children?: React.ReactNode;
  className?: string;
  auth?: "signIn" | "signOut";
}

const AuthButton = ({ children, className, auth }: AuthButtonProps) => {
  return (
    <>
      <button
        onClick={
          auth === "signIn"
            ? () => signIn("spotify", { callbackUrl: "/" })
            : () => signOut()
        }
        className={cn(
          "hover:bg-primary-90 active:bg-primary-70 text-onPrimary-default flex items-center justify-center rounded-md px-5 py-2",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};

export default AuthButton;
