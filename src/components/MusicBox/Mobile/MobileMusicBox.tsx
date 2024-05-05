"use client";

import { RootState } from "@/redux/store";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useMusicBox } from "../hooks/useMusicBox";
import { SessionType } from "@/type";
import { togglePlayPause } from "@/redux/playerSlice";

type MobileMusicBoxProps = {
  session: SessionType;
};

const MobileMusicBox = ({ session }: MobileMusicBoxProps) => {
  const { pauseSong, resumeSong } = useMusicBox();
  const track = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  if (!track.currentTrack?.uri) return null;

  return (
    <>
      <div className="absolute bottom-6 flex w-full justify-center pl-2 pr-1  sm:hidden">
        <div className="glass flex h-full w-full justify-between rounded-md border-2">
          <div className="flex h-full w-[65%]  items-center gap-1">
            <img
              className="aspect-square h-full  w-20 rounded-md border-[2px] border-white bg-secondary-default object-cover"
              alt="music"
              src={track?.currentTrack?.image}
            />

            {/* Information */}
            <div className="flex h-full w-full  flex-col items-start justify-start text-black">
              <p className="line-clamp-3 text-start  text-sm font-bold">
                {track?.currentTrack?.musicName}
              </p>
              <p className="text-xs text-[#7a7a7a] md:text-sm">
                {track?.currentTrack?.artist.join(", ")}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className=" flex  items-center justify-center pr-5">
            <div className="hover:cursor-pointer">
              {track.isPlaying ? (
                <FaRegCirclePause
                  onClick={async () => {
                    await pauseSong({
                      accessToken: session?.user?.accessToken,
                    });

                    dispatch(togglePlayPause());
                  }}
                  size={35}
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
                  size={35}
                  color="#2A313C"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMusicBox;
