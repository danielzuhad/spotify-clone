"use client";

import { TrackItemType } from "@/types/playlist";
import { useState } from "react";

const useTracks = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMore = (track: TrackItemType[]) => {
    setVisibleCount(track.length);
  };

  const showLess = () => {
    setVisibleCount(10);
  };
  return { visibleCount, showMore, showLess, setVisibleCount };
};

export default useTracks;
