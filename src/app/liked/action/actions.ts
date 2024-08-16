"use server";

import { axiosInstance } from "@/lib/spotify-api";

export const getLikedTracks = async () => {
  const response = await axiosInstance.get("/me/tracks", {
    params: {
      limit: 50,
    },
  });
  return response;
};
