"use client";
import TrackItemRow from "./TrackItemRow";
import { TrackItemType } from "@/type";
import useTracks from "../hooks/useTracks";
import { useDispatch } from "react-redux";
import { setTrack } from "@/redux/playerSlice";

type TableBodyPlaylistProps = {
  track: TrackItemType[];
};

const TableBodyPlaylist = ({ track }: TableBodyPlaylistProps) => {
  const { visibleCount, setVisibleCount, showMore, showLess } = useTracks();

  const dispatch = useDispatch();

  return (
    <div className="mt-2 ">
      <div>
        {track.slice(0, visibleCount).map((item, index) => (
          <TrackItemRow
            onClick={() => {
              dispatch(setTrack(item.track));
            }}
            key={index}
            number={index + 1}
            track={item}
          />
        ))}
      </div>

      {track.length < 10 ? null : (
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
      )}
    </div>
  );
};

export default TableBodyPlaylist;
