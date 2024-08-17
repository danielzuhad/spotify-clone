"use client";
import { useDispatch } from "react-redux";
import { PlayerPayloadType, setTrack } from "@/redux/playerSlice";
import TrackItemRow from "./TrackItemRow";
import { TrackItemType } from "@/types/playlist";

type TableBodyPlaylistProps = {
  track: TrackItemType[];
};

const TableBodyPlaylist = ({ track }: TableBodyPlaylistProps) => {
  const dispatch = useDispatch();

  return (
    <div className=" max-sm:pb-32">
      <div className="h-full w-full ">
        {track.map((item, index) => (
          <TrackItemRow
            onClick={() => {
              const trackPayload: PlayerPayloadType = {
                currentTrack: {
                  artist: item.track.artists.map((artist) => artist.name),
                  image: item.track.album.images[0].url,
                  musicName: item.track.name,
                  uri: item.track.uri,
                },
              };

              dispatch(setTrack(trackPayload));
            }}
            key={index}
            index={index + 1}
            track={item}
          />
        ))}
      </div>
    </div>
  );
};

export default TableBodyPlaylist;

// filter limit
{
  /* {track.length < 10 ? null : (
        <div className="flex w-full pb-5 pt-7 text-[#b1b1b1]">
          <button
            onClick={() =>
              visibleCount < track.length ? showMore(track) : showLess()
            }
            className="hover:underline"
          >
            {visibleCount < track.length ? "Show More" : "Show Less"}
          </button>
        </div>
      )} */
}
