import HeaderPlaylist from "@/components/Playlist/HeaderPlaylist";
import { SessionType } from "@/type";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { playlistData } from "./utils/playlist";

const Liked = async () => {
  const session: SessionType | null = await getServerSession(authOptions);

  // const tracks = await getLikedTracks();

  // console.log({ tracks });

  return (
    <>
      <div className="h-full w-full">
        <HeaderPlaylist playlist={playlistData(session)} showImage={false} />
      </div>
    </>
  );
};

export default Liked;
