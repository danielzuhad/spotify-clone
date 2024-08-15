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
};

const initialState: PlayerStateType = {
  currentTrack: {
    uri: "",
    image: "",
    musicName: "",
    artist: [],
  },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<PlayerPayloadType>) => {
      state.currentTrack = action.payload.currentTrack;
    },
    clearTrack: (state) => {
      state.currentTrack = null;
    },
    togglePlayPause: (state) => {},
  },
});

export const { setTrack, clearTrack, togglePlayPause } = playerSlice.actions;

export const selectCurrentTrack = (state: RootState) =>
  state.player.currentTrack;

export default playerSlice.reducer;
