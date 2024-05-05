import { axiosInstance } from "@/lib/spotify-api";

type useHomeProps = {
  accessToken: string;
};

const useHome = () => {
  const getAlbum = async ({ accessToken }: { accessToken: string }) => {
    try {
      const response = await axiosInstance.get("/me/playlists", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getAlbum,
  };
};

export default useHome;
