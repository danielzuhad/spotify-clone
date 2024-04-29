"use client";
import { SessionType, TrackType } from "@/type";
import { useMusicBox } from "./hooks/useMusicBox";
import { useEffect } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

type MusicContentProps = {
  track: TrackType;
  session: SessionType;
};

const MusicContent = ({ track, session }: MusicContentProps) => {
  const {
    loading,
    setLoading,
    currentMusic,
    playSong,
    pauseSong,
    setCurrentMusic,
  } = useMusicBox();

  console.log({ currentMusic });

  // const music = await getTrack({
  //   accessToken: session?.user?.accessToken,
  //   id: track.id,
  // });

  // console.log({ music });

  useEffect(() => {
    const fetchCurrentMusic = async () => {
      setLoading(true);
      try {
        await playSong({
          accessToken: session?.user?.accessToken,
          uris: track.uri,
        });
      } catch (error) {
        console.error("fetch track failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentMusic();
    console.log("song =>");
  }, [track]);

  if (loading) {
    return (
      <div
        className={`h-full w-full animate-pulse rounded-lg bg-[#afafaf25] p-3 transition-all`}
      />
    );
  }

  return (
    <>
      <div className="h-full w-full p-3 ">
        {/* Image */}
        <img
          className="aspect-square w-full rounded-lg border-[2px] border-white bg-secondary-default object-cover"
          alt="music"
          src={track.album.images[0].url}
        />

        {/* Information */}
        <div className="mt-5 flex w-full flex-col items-center justify-center text-black ">
          <p className="text-center text-lg  font-bold md:text-xl">
            {track.name}
          </p>
          <p className="text-xs text-[#b1b1b1] md:text-sm">
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>

          {/* Play Button */}
        </div>

        <div className="mt-20 flex w-full justify-center">
          <FaRegCirclePlay size={40} color="#2A313C" />
          <FaRegCirclePause size={40} color="#2A313C" />
        </div>
      </div>
    </>
  );
};

export default MusicContent;
