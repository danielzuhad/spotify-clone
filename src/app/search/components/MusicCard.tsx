import { Variants, motion } from "framer-motion";
import { TrackAlbum } from "../types";
import { TrackType } from "@/types/track";
import useSetTrack from "@/hooks/useSetTrack";

type MusicCardProps = {
  track: TrackAlbum;
  variant: Variants;
};

const MusicCard = ({ track, variant }: MusicCardProps) => {
  const setTrack = useSetTrack();

  const trackPayload: TrackType = {
    uri: track.uri,
    image: track.album.images[0].url,
    musicName: track.name,
    artist: track.album.artists.map((artist) => artist.name),
  };

  return (
    <>
      <motion.div
        onClick={() => setTrack([trackPayload])}
        variants={variant}
        className="glass flex w-full items-center justify-between rounded-md p-1 transition-all hover:cursor-pointer hover:bg-[#b1b1b1]/10"
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
