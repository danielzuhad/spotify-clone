"use client";

import { TrackItemType } from "../types";
import TableBodyPlaylist from "./TableBodyPlaylist";
import TableHeadPlaylist from "./TableHeadPlaylist";

type ContentPlaylistProps = {
  track: TrackItemType[];
};

const ContentPlaylist = ({ track }: ContentPlaylistProps) => {
  return (
    <>
      <div className="mt-10 h-full w-full">
        <div className="flex h-full w-full flex-col">
          <TableHeadPlaylist />
          <TableBodyPlaylist track={track} />
        </div>
      </div>
    </>
  );
};

export default ContentPlaylist;
