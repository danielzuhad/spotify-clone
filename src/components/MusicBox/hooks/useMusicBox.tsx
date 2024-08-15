"use client";

import { axiosInstance } from "@/lib/spotify-api";
import { useState } from "react";
import { Album } from "../types";

type GetTrackType = {
  accessToken: string;
  uris: string;
  deviceId: string;
};

type ResumeSongType = {
  accessToken: string;
  uris: string;
  position_ms: number;
};

type accessToken = string;

export const useMusicBox = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentMusic, setCurrentMusic] = useState<Album | null>(null);

  const getDeviceId = async (accessToken: string) => {
    const response = await axiosInstance.get("/me/player/devices", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  };

  const getCurrentTrack = async (accessToken: string) => {
    console.log({ accessToken });
    const response = await axiosInstance.get("/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log("getCurrent", response.data);
    return response;
  };

  const playSong = async ({ accessToken, uris, deviceId }: GetTrackType) => {
    try {
      const response = await axiosInstance.put(
        `/me/player/play?device_id=${deviceId}`,
        {
          uris: [uris],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      return response;
    } catch (error) {
      console.error("Error fetching track:", error);
      throw error;
    }
  };

  const pauseSong = async (accessToken: string) => {
    try {
      const response = await axiosInstance.put(`/me/player/pause`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching track:", error);
      throw error;
    }
  };

  const resumeSong = async ({
    accessToken,
    position_ms,
    uris,
  }: ResumeSongType) => {
    try {
      const response = await axiosInstance.put(`/me/player/play`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
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
    pauseSong,
    getCurrentTrack,
    resumeSong,
    getDeviceId,
  };
};
