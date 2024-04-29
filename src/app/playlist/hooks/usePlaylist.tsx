import { axiosInstance } from "@/lib/spotify-api";
import { SessionType } from "@/type";

type Props = {
  params: {
    id: number;
  };
  session: SessionType | null;
};

export const usePlaylist = () => {
  const getPlaylist = async ({ params, session }: Props) => {
    const response = await axiosInstance.get(`/playlists/${params.id}`, {
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
    });

    return response;
  };

  return {
    getPlaylist,
  };
};
