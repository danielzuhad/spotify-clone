"use client";
import cn from "@/lib/cn";
import { RootState } from "@/redux/store";
import { DeviceType, SessionType } from "@/type";
import { ComponentProps } from "react";
import { useSelector } from "react-redux";
import SpotifyWebPlayer from "react-spotify-web-playback";

type MusicBoxProps = ComponentProps<"div"> & {
  className?: string;
  session: SessionType;
  deviceId: DeviceType;
};

const MusicBox = ({ className, session, deviceId }: MusicBoxProps) => {
  const track = useSelector((state: RootState) => state.player);

  return (
    <>
      {track.currentTrack?.uri && (
        <div
          className={cn(
            "absolute bottom-6 z-10 flex w-full justify-center max-sm:px-2   sm:bottom-0 sm:pr-2",
          )}
        >
          <div className=" glass w-full  rounded-md px-3 shadow-lg  ">
            <SpotifyWebPlayer
              styles={{
                bgColor: "transparent",
                height: 100,
              }}
              token={session?.user?.accessToken}
              uris={track.currentTrack?.uri ? [track.currentTrack?.uri] : []}
              play={true}
              initialVolume={0.2}
              inlineVolume={true}
              showSaveIcon
              syncExternalDevice={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MusicBox;

{
  /* Conditional Music Box */
}
{
  /* {track.currentTrack?.uri && (
          <MusicContent
          track={track}
          session={session}
          deviceId={deviceId.devices.length > 0 ? deviceId.devices[0].id : ""}
          />
        )} */
}
