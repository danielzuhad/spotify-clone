import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TrackType } from "@/types/track";

export type PlayerPayloadType = TrackType[];

export type PlayerStateType = {
  track: TrackType[];
};

const initialState: PlayerStateType = {
  track: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<PlayerPayloadType>) => {
      state.track = [...action.payload.map((track) => track)];
    },
    clearTrack: (state) => {
      state.track = [];
    },
    togglePlayPause: (state) => {},
  },
});

export const { setTrack, clearTrack, togglePlayPause } = playerSlice.actions;

export const selectTrack = (state: RootState) => state.player.track;

export default playerSlice.reducer;
