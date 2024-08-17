"use server";

import { axiosInstance } from "@/lib/spotify-api";
import { SessionType } from "@/type";

export const getLikedTracks = async (session: SessionType) => {
  const response = await axiosInstance.get("/me/tracks", {
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken}`,
    },
    params: {
      limit: 50,
    },
  });
  return response;
};
