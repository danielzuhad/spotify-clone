"use client";

import TrackItemRow from "./TrackItemRow";
import { albumName, artistName, time, title } from "../utils";
import { useState } from "react";
import { TrackItemType } from "@/type";

type TableBodyPlaylistProps = {
  track: TrackItemType[];
};

const TableBodyPlaylist = ({ track }: TableBodyPlaylistProps) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMore = () => {
    setVisibleCount(track.length);
  };

  const showLess = () => {
    setVisibleCount(10);
  };

  return (
    <>
      <div className="mt-2">
        {track.slice(0, visibleCount).map((item, index) => (
          <TrackItemRow
            key={index}
            number={index + 1}
            title={title(item)}
            albumName={albumName(item)}
            artist={artistName(item)}
            time={time(item)}
          />
        ))}
      </div>

      {track.length < 10 ? null : (
        <div className="mt-2 flex w-full text-[#b1b1b1]">
          <button
            onClick={visibleCount < track.length ? showMore : showLess}
            className="hover:underline"
          >
            {visibleCount < track.length ? "Show More" : "Show Less"}
          </button>
        </div>
      )}
    </>
  );
};

export default TableBodyPlaylist;
