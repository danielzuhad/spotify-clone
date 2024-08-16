"use client";
import { TrackItemType } from "@/type";
import { useDispatch } from "react-redux";
import { PlayerPayloadType, setTrack } from "@/redux/playerSlice";
import TrackItemRow from "./TrackItemRow";

type TableBodyPlaylistProps = {
  track: TrackItemType[];
};

const TableBodyPlaylist = ({ track }: TableBodyPlaylistProps) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-2 max-sm:pb-32">
      <div>
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
            number={index + 1}
            track={item}
          />
        ))}
      </div>

      {/* {track.length < 10 ? null : (
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
      )} */}
    </div>
  );
};

export default TableBodyPlaylist;
