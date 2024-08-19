"use client";

import TrackItemRow from "./TrackItemRow";
import { TrackItemType } from "@/types/playlist";
import useSetTrack from "@/hooks/useSetTrack";
import { useState } from "react";

type TableBodyPlaylistProps = {
  track: TrackItemType[];
};

const TableBodyPlaylist = ({ track }: TableBodyPlaylistProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const setTrack = useSetTrack();

  const handleSetTrack = (index: number) => {
    setCurrentIndex(index);

    const items = track.map((item) => {
      return {
        uri: item.track.uri,
        image: item.track.album.images[0].url,
        musicName: item.track.name,
        artist: item.track.album.artists.map((artist) => artist.name),
      };
    });

    const reorderedTracks = [...items.slice(index), ...items.slice(0, index)];
    setTrack(reorderedTracks);
  };

  return (
    <div className=" max-sm:pb-32">
      <div className="h-full w-full ">
        {track.map((item, index) => (
          <TrackItemRow
            onClick={() => handleSetTrack(index)}
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

// () => {
//   const trackPayload: TrackType = {
//     artist: item.track.artists.map((artist) => artist.name),
//     image: item.track.album.images[0].url,
//     musicName: item.track.name,
//     uri: item.track.uri,
//   };

//   dispatch(setTrack([trackPayload]));
// };
