"use client";
import AuthButton from "@/components/AuthButton";
import { signIn } from "next-auth/react";
import React from "react";
import { PiSpotifyLogoLight } from "react-icons/pi";

const LoginButtonsSection = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLoginSpotify = async () => {
    setLoading(true);

    try {
      await signIn("spotify", { callbackUrl: "/" });
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
    }
  };
  return (
    <>
      <AuthButton
        handleLogin={handleLoginSpotify}
        loading={loading}
        icon={<PiSpotifyLogoLight size={50} />}
        auth="signIn"
        className="w-full bg-[#1ED760]/50  hover:bg-[#48d279]"
      >
        Login with Spotify
      </AuthButton>

      {/* <AuthButton
        loading={loading}
        icon={<FaGoogle size={30} />}
        auth="signIn"
        className="mt-2 w-full bg-white py-3.5  hover:bg-[#dcdcdc]"
      >
        Login with Google
      </AuthButton> */}
    </>
  );
};

export default LoginButtonsSection;
