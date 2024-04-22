import { getServerSession } from "next-auth";
import "@/app/globals.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { axiosInstance } from "@/lib/spotify-api";
import { SessionType, TrackItemType } from "@/type";
import HeaderPlaylist from "@/components/Playlist/HeaderPlaylist";
import ContentPlaylist from "../components/ContentPlaylist";

type Props = {
  params: {
    id: number;
  };
};

const page = async ({ params }: Props) => {
  const session: SessionType | null = await getServerSession(authOptions);

  const response = await axiosInstance.get(`/playlists/${params.id}`, {
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken}`,
    },
  });

  const dataTracks: TrackItemType[] = response.data?.tracks?.items;

  return (
    <div className="relative w-full">
      <HeaderPlaylist playlist={response.data} />

      <ContentPlaylist track={dataTracks} />
    </div>
  );
};

export default page;
