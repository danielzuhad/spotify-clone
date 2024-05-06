import { axiosInstance } from "@/lib/spotify-api";

export const getDeviceId = async ({
  accessToken,
}: {
  accessToken: string | null;
}) => {
  try {
    const response = await axiosInstance.get("/me/player/devices", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    return null;
  }
};
