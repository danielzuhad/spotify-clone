import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";

import { authOptions } from "./api/auth/[...nextauth]/route";
import Welcome from "@/components/Home/Welcome";
import { SessionType } from "@/type";
import AlbumList from "@/components/Home/AlbumList";

const Home = async () => {
  const session: SessionType | null = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div>
        <Welcome user={session.user} />
        <AlbumList accessToken={session?.user?.accessToken} />
      </div>
    </>
  );
};

export default Home;
