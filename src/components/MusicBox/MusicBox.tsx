"use client";
import cn from "@/lib/cn";
import { RootState } from "@/redux/store";
import { DeviceType, SessionType } from "@/type";
import { ComponentProps } from "react";
import { useSelector } from "react-redux";
import MusicContent from "./MusicContent";

type MusicBoxProps = ComponentProps<"div"> & {
  className?: string;
  session: SessionType;
  deviceId: DeviceType;
};

const MusicBox = ({ className, session, deviceId }: MusicBoxProps) => {
  const track = useSelector((state: RootState) => state.player);

  return (
    <>
      <div
        className={cn(
          "glass h-full w-full rounded-lg max-sm:hidden ",
          className,
        )}
      >
        {/* Conditional Music Box */}
        {track.currentTrack?.uri ? (
          <MusicContent
            track={track}
            session={session}
            deviceId={deviceId.devices.length > 0 ? deviceId.devices[0].id : ""}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-1.5">
            <p className="px-10 text-center text-xl text-[#b1b1b1]">
              Please make sure to open ur spotify app to play music
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MusicBox;
