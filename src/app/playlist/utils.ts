import { TrackItemType } from "@/types/playlist";

export const title = (item: TrackItemType) => {
  return String(item.track.name);
};

export const albumName = (item: TrackItemType) => {
  return String(item.track.album.name);
};

export const artistName = (item: TrackItemType) => {
  return item.track.artists;
};

export const time = (item: TrackItemType) => {
  return Number((item.track.duration_ms / 60000).toFixed(2));
};

export const changeOpacity = (
  scrollPosition: number,
  setOpacity: React.Dispatch<React.SetStateAction<number>>,
) => {
  const offset = 300;
  const textOffset = 10;

  if (scrollPosition < offset) {
    const newOpacity = 1 - (offset - scrollPosition) / offset;
    setOpacity(newOpacity);
  }
};
