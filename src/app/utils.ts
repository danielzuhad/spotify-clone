import { axiosInstance } from "@/lib/spotify-api";

export const getDeviceId = async ({
  accessToken,
}: {
  accessToken: string | null;
}) => {
  if (!accessToken) {
    console.error("Access token is null or empty");
    return null; // Return null or throw an error
  }

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
