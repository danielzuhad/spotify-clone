import { axiosInstance } from "@/lib/spotify-api";
import { SessionType } from "@/type";
import { useEffect, useState } from "react";

interface useMusicBoxProps {
  session: SessionType;
}

const useMusicBox = ({ session }: useMusicBoxProps) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  // Function to check the current playback state
  const checkPlaybackState = async () => {
    try {
      const response = await axiosInstance.get("/me/player", {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
      });
      const activeDevice = response.data.device;

      if (activeDevice && activeDevice.name === "Spotify Web Player") {
        setIsAvailable(true);
      } else {
        setIsAvailable(false);
      }
    } catch (error) {
      console.error("Error fetching playback state:", error);
    }
  };

  useEffect(() => {
    // Polling every 5 seconds
    const interval = setInterval(checkPlaybackState, 10000);
    return () => clearInterval(interval);
  }, [session?.user?.accessToken]);

  return {
    isAvailable,
  };
};

export default useMusicBox;
