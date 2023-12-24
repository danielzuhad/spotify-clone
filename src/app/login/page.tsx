import React from "react";
import { PiSpotifyLogoLight } from "react-icons/pi";
import { getServerSession } from "next-auth";

import AuthButton from "@/components/AuthButton";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center">
          <PiSpotifyLogoLight size={250} />

          <AuthButton
            className="bg-primary-default/20 px-6 py-4 text-2xl hover:bg-primary-low/50"
            auth="signIn"
          >
            Login
          </AuthButton>
        </div>
      </div>
    </>
  );
};

export default Login;
