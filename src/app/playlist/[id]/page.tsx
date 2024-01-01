import { getServerSession } from "next-auth";
import React from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { axiosInstance } from "@/lib/spotify-api";
import { SessionType } from "@/type";

type Props = {
  params: {
    id: number;
  };
};

const page = async ({ params }: Props) => {
  // const session: SessionType | null = await getServerSession(authOptions);

  // const response = await axiosInstance.get(`/playlists/${params.id}`, {
  //   headers: {
  //     Authorization: `Bearer ${session?.user.accessToken}`,
  //   },
  // });

  // console.log("response =>", response);

  return (
    <>
      <div>{params.id}</div>
    </>
  );
};

export default page;
