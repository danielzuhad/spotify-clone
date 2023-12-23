import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";

import { authOptions } from "./api/auth/[...nextauth]/route";
import Playlist from "@/components/Home/Playlist";
import Welcome from "@/components/Home/Welcome";
import { SessionType } from "@/type";

const Home = async () => {
  const session: SessionType | null = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div className="flex w-full flex-col items-center p-2">
        <Welcome user={session.user} />
        <Playlist accessToken={session?.user?.accessToken} />
      </div>
    </>
  );
};

export default Home;
