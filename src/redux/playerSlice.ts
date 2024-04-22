// features/player/playerSlice.ts
import { TrackType } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface PlayerState {
  currentTrack: TrackType | null;
  isPlaying: boolean;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true; // Mungkin ingin memulai langsung pemutaran
    },
    clearTrack: (state) => {
      state.currentTrack = null;
      state.isPlaying = false;
    },
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setTrack, clearTrack, togglePlayPause } = playerSlice.actions;

export const selectCurrentTrack = (state: RootState) =>
  state.player.currentTrack;
export const selectIsPlaying = (state: RootState) => state.player.isPlaying;

export default playerSlice.reducer;
