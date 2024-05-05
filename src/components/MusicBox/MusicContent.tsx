"use client";
import { SessionType } from "@/type";
import { useMusicBox } from "./hooks/useMusicBox";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import { useEffect } from "react";
import { PlayerPayloadType, togglePlayPause } from "@/redux/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type MusicContentProps = {
  track: PlayerPayloadType;
  session: SessionType;
  deviceId: string;
};

const MusicContent = ({ track, session, deviceId }: MusicContentProps) => {
  const {
    loading,
    setLoading,
    currentMusic,
    playSong,
    pauseSong,
    setCurrentMusic,
    resumeSong,
    getCurrentTrack,
  } = useMusicBox();

  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentMusic = async () => {
      setLoading(true);
      try {
        await playSong({
          accessToken: session?.user?.accessToken,
          uris: track.currentTrack?.uri || "",
          deviceId: deviceId,
        });
      } catch (error) {
        console.error("fetch track failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentMusic();
  }, [track.currentTrack?.uri]);

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
          src={track.currentTrack?.image}
        />

        {/* Information */}
        <div className="mt-5 flex w-full flex-col items-center justify-center text-black ">
          <p className="text-center text-lg  font-bold md:text-xl">
            {track.currentTrack?.musicName}
          </p>
          <p className="text-xs text-[#b1b1b1] md:text-sm">
            {track.currentTrack?.artist.map((artist) => artist).join(", ")}
          </p>
        </div>

        {/* Play Button */}
        <div className="mt-20 flex  w-full justify-center md:mt-10 2xl:mt-16">
          <div className="hover:cursor-pointer">
            {isPlaying ? (
              <FaRegCirclePause
                onClick={async () => {
                  await pauseSong({ accessToken: session?.user?.accessToken });
                  dispatch(togglePlayPause());
                }}
                size={40}
                color="#2A313C"
              />
            ) : (
              <FaRegCirclePlay
                onClick={async () => {
                  await resumeSong({
                    accessToken: session?.user?.accessToken,
                    uris: track.currentTrack?.uri || "",
                    position_ms: 0,
                  });
                  dispatch(togglePlayPause());
                }}
                size={40}
                color="#2A313C"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicContent;
