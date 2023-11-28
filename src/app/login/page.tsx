"use client";

import AuthButton from "@/components/AuthButton";
import { signIn } from "next-auth/react";
import React from "react";
import { PiSpotifyLogoLight } from "react-icons/pi";

const Login = () => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[15em]">
            <PiSpotifyLogoLight />
          </h1>

          <AuthButton onClick={() => signIn("spotify", { callbackUrl: "/" })}>
            Sign In
          </AuthButton>
        </div>
      </div>
    </>
  );
};

export default Login;
