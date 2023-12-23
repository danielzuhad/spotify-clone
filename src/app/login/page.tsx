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
          <PiSpotifyLogoLight size={250} />

          <AuthButton
            className="bg-primary-default/20 px-6 py-4 text-2xl hover:bg-primary-low/50"
            onClick={() => signIn("spotify", { callbackUrl: "/" })}
          >
            Login
          </AuthButton>
        </div>
      </div>
    </>
  );
};

export default Login;
