"use client";

import React from "react";
import { Button, Card, Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import {ITrack} from "@/types/track";
import TrackItem from "@/components/TrackItem";
import TrackList from "@/components/TrackList";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";

const Page = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Eat You Alive', artist: 'Limp Bizkit', text: 'Какой-то текст', listens: 6, audio: 'http://localhost:5000/audio/bc19005a-e11d-4e66-a36c-e63080db5434', picture: 'http://localhost:5000/image/65072608-3b89-4ea9-ad13-2aad659bf9b1', comments: []},
        {_id: '2', name: 'Снегурочка', artist: 'Сектор Газа', text: 'Какой-то текст', listens: 6,  audio: 'http://localhost:5000/audio/e3f4e0e3-f732-4676-8db7-a476e30c2acc', picture: 'http://localhost:5000/image/d8e2ea3e-4bcc-4d90-9e7f-47ef6dfbbaca', comments: []},
        {_id: '3', name: 'The Only Thing They Fear Is You', artist: 'Mick Gordon', text: 'Какой-то текст', listens: 6,  audio: 'http://localhost:5000/audio/9defe8b5-231e-410d-a847-86f3f6fef261', picture: 'http://localhost:5000/image/06e30d10-21bc-4130-9d64-cfc19cd5b147', comments: []},

    ]

    return (
        <Container>
            <Grid container justifyContent="center">
                <Card style={{ width: "900px" }}>
                    <Box p={2}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <h1>Список треков</h1>
                            <Button
                                variant="contained"
                                onClick={() => router.push("/tracks/create")}
                            >
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </Container>
    );
};

export default Page;

