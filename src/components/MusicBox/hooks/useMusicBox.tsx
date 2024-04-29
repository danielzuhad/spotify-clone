"use client";

import { axiosInstance } from "@/lib/spotify-api";
import { useState } from "react";
import { Album } from "../types";

type GetTrackType = {
  accessToken: string;
  uris: string;
};

export const useMusicBox = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentMusic, setCurrentMusic] = useState<Album | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playSong = async ({ accessToken, uris }: GetTrackType) => {
    try {
      const response = await axiosInstance.put(
        `/v1/me/player/play`,
        { uris: [uris] },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      setIsPlaying(true);
      return response;
    } catch (error) {
      console.error("Error fetching track:", error);
      throw error;
    }
  };

  const pauseSong = async ({ accessToken }: GetTrackType) => {
    try {
      const response = await axiosInstance.put(`/v1/me/player/play`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setIsPlaying(false);
      return response;
    } catch (error) {
      console.error("Error fetching track:", error);
      throw error;
    }
  };

  return {
    playSong,
    loading,
    setLoading,
    setCurrentMusic,
    currentMusic,
    isPlaying,
    setIsPlaying,
    pauseSong,
  };
};
