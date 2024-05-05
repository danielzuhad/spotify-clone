import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type PlayerPayloadType = {
  currentTrack: {
    uri: string;
    image: string;
    musicName: string;
    artist: string[];
  } | null;
};

export type PlayerStateType = {
  currentTrack: {
    uri: string;
    image: string;
    musicName: string;
    artist: string[];
  } | null;
  isPlaying: boolean;
};

const initialState: PlayerStateType = {
  currentTrack: {
    uri: "",
    image: "",
    musicName: "",
    artist: [],
  },
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<PlayerPayloadType>) => {
      state.currentTrack = action.payload.currentTrack;
      state.isPlaying = true;
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
