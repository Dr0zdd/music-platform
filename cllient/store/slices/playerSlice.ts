import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "@/types/player";
import { ITrack } from "@/types/track";

const initialState: PlayerState = {
    active: null,
    volume: 0,
    duration: 0,
    currentTime: 0,
    pause: true,
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        play(state) {
            state.pause = false;
        },
        pause(state) {
            state.pause = true;
        },
        setActive(state, action: PayloadAction<ITrack>) {
            state.active = action.payload;
            state.currentTime = 0;
            state.duration = 0;
        },
        setDuration(state, action: PayloadAction<number>) {
            state.duration = action.payload;
        },
        setCurrentTime(state, action: PayloadAction<number>) {
            state.currentTime = action.payload;
        },
        setVolume(state, action: PayloadAction<number>) {
            state.volume = action.payload;
        },
    },
});

export const { play, pause, setActive, setDuration, setCurrentTime, setVolume } =
    playerSlice.actions;

export default playerSlice.reducer;
