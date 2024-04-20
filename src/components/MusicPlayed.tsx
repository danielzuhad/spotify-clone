/* eslint-disable @next/next/no-img-element */

import "@/app/globals.css";
import { TrackType } from "@/app/playlist/types";

type MusicPlayedProps = {
  className?: string;
  track: TrackType;
};

const MusicPlayed = () => {
  return (
    <>
      <div className=" absolute bottom-7 flex w-full justify-center  px-1  sm:bottom-0 sm:px-0">
        <div className="glass h-full w-full rounded-md  p-1">
          <img
            alt="album-picture"
            className="aspect-square h-max w-16 rounded-md border-[1px] border-[#d8d8d8] "
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayed;
