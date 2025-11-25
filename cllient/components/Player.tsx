"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import styles from "../styles/Player.module.scss";
import { ITrack } from "@/types/track";
import { Grid } from "@mui/material";
import TrackProgress from "@/components/TrackProgress";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { play, pause } from "@/store/slices/playerSlice";

const Player = () => {
    const dispatch = useDispatch();
    const { pause: isPaused } = useTypedSelector((state) => state.player);

    const track: ITrack = {
        _id: "1",
        name: "Eat You Alive",
        artist: "Limp Bizkit",
        text: "Какой-то текст",
        listens: 6,
        audio: "http://localhost:5000/audio/bc19005a-e11d-4e66-a36c-e63080db5434",
        picture: "http://localhost:5000/image/65072608-3b89-4ea9-ad13-2aad659bf9b1",
        comments: [],
    };

    const togglePlay = () => {
        if (isPaused) {
            dispatch(play());
        } else {
            dispatch(pause());
        }
    };

    return (
        <div className={styles.player}>
            <IconButton onClick={togglePlay}>
                {isPaused ? <PlayArrow /> : <Pause />}
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{ marginLeft: "auto" }} />
            <TrackProgress left={0} right={100} onChange={() => ({})} />
        </div>
    );
};

export default Player;
