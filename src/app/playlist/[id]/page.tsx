import { getServerSession } from "next-auth";
import "@/app/globals.css";
import { SessionType, TrackItemType } from "@/type";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { usePlaylist } from "../hooks/usePlaylist";
import HeaderPlaylist from "@/components/Playlist/HeaderPlaylist";
import ContentPlaylist from "@/components/Playlist/ContentPlaylist";

type Props = {
  params: {
    id: number;
  };
};

const Playlist = async ({ params }: Props) => {
  const session: SessionType | null = await getServerSession(authOptions);

  const { getPlaylist } = usePlaylist();

  const response = await getPlaylist({
    params,
    session,
  });

  const dataTracks: TrackItemType[] = response.data?.tracks?.items;

  return (
    <div className="relative w-full">
      <HeaderPlaylist playlist={response.data} />

      <ContentPlaylist track={dataTracks} />
    </div>
  );
};

export default Playlist;
