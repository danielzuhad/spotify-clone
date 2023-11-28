"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface SessionProviderProps {
  children: React.ReactNode;
}

const SessionProviders = ({ children }: SessionProviderProps) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default SessionProviders;
