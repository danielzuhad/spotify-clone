import HeaderPlaylist from "@/components/Playlist/HeaderPlaylist";
import { SessionType } from "@/type";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { playlistData } from "./utils/playlist";
import { getLikedTracks } from "./action/actions";
import LoadingSection from "@/components/Loading/LoadingSection";
import { TrackItemType } from "@/types/playlist";
import ContentPlaylist from "@/components/Playlist/ContentPlaylist";

const Liked = async () => {
  const session: SessionType | null = await getServerSession(authOptions);

  if (!session) {
    return <LoadingSection />;
  }

  const tracks = await getLikedTracks(session);

  const dataTracks: TrackItemType[] = tracks.data.items;

  return (
    <>
      <div className="relative w-full">
        <HeaderPlaylist playlist={playlistData(session)} showImage={false} />

        <ContentPlaylist track={dataTracks} />
      </div>
    </>
  );
};

export default Liked;
