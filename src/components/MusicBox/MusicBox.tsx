"use client";
import cn from "@/lib/cn";
import { RootState } from "@/redux/store";
import { SessionType } from "@/type";
import { ComponentProps } from "react";
import { useSelector } from "react-redux";
import MusicContent from "./MusicContent";

type MusicBoxProps = ComponentProps<"div"> & {
  className?: string;
  session: SessionType;
};

const MusicBox = ({ className, session }: MusicBoxProps) => {
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack,
  );

  return (
    <>
      <div
        className={cn(
          "glass h-[450px] w-full rounded-lg max-sm:hidden  lg:h-full",
          className,
        )}
      >
        {/* Conditional Music Box */}
        {currentTrack && (
          <MusicContent track={currentTrack} session={session} />
        )}
      </div>
    </>
  );
};

export default MusicBox;
