"use server";

import { axiosInstance } from "@/lib/spotify-api";

export const getCurrentTrack = async (accessToken: string) => {
  const response = await axiosInstance.get("/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
