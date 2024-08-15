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
            "absolute bottom-6 z-10 flex w-full justify-center   sm:bottom-0 sm:pr-2",
          )}
          // style={{
          //   backgroundImage: `url(${track.currentTrack?.image})`,
          //   backgroundSize: "cover", // Agar gambar mengisi background dengan baik
          //   backgroundPosition: "center", // Agar gambar berada di tengah
          // }}
        >
          <div
            className="glass w-full rounded-md "
            // style={{
            //   backgroundImage: `url(${track.currentTrack?.image})`,
            //   backgroundSize: "cover", // Agar gambar mengisi background dengan baik
            //   backgroundPosition: "center", // Agar gambar berada di tengah
            // }}
          >
            <div className="  w-full rounded-md px-3 shadow-lg backdrop-blur-3xl">
              <div className="w-full rounded-md ">
                <SpotifyWebPlayer
                  styles={{
                    bgColor: "transparent",
                    height: 100,
                  }}
                  token={session?.user?.accessToken}
                  uris={
                    track.currentTrack?.uri ? [track.currentTrack?.uri] : []
                  }
                  play={true}
                  initialVolume={0.2}
                  inlineVolume={true}
                  showSaveIcon
                  syncExternalDevice={true}
                />
              </div>
            </div>
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
