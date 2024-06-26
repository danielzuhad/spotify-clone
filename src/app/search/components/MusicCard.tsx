import { Variants, motion } from "framer-motion";
import { TrackAlbum } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { PlayerPayloadType, setTrack } from "@/redux/playerSlice";
import { RootState } from "@/redux/store";

type MusicCardProps = {
  track: TrackAlbum;
  variant: Variants;
};

const MusicCard = ({ track, variant }: MusicCardProps) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack,
  );

  return (
    <>
      <motion.div
        onClick={() => {
          const trackPayload: PlayerPayloadType = {
            currentTrack: {
              artist: track.album.artists.map((artist) => artist.name),
              image: track.album.images[0].url,
              musicName: track.name,
              uri: track.uri,
            },
          };

          dispatch(setTrack(trackPayload));
        }}
        variants={variant}
        className="glass flex w-full items-center justify-between rounded-md p-1 hover:cursor-pointer"
      >
        <div className="flex h-full w-full items-center gap-1">
          {/* Image */}
          <img
            src={track.album.images[0].url}
            alt="music-card"
            className="aspect-square w-16 rounded-md bg-error object-cover"
          />

          {/* Title & Artist */}
          <div className="flex items-center gap-1.5   ">
            <p className="line-clamp-1  text-sm font-bold">{track.name},</p>
            <p className="line-clamp-1 text-sm font-thin text-[#b1b1b1]">
              {track.album.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        </div>

        {/* Duration */}
        <p className="text-sm text-[#b1b1b1] md:pr-5">
          {(track.duration_ms / 60000).toFixed(2)}
        </p>
      </motion.div>
    </>
  );
};

export default MusicCard;
