"use client"

import React from 'react';
import {ITrack} from "@/types/track";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/navigation";
import MainLayout from "@/app/layout";

const TrackPage = () => {

    const router = useRouter();
    const track: ITrack =
        {
            _id: '1',
            name: 'Eat You Alive',
            artist: 'Limp Bizkit',
            text: 'Какой-то текст',
            listens: 6,
            audio: 'http://localhost:5000/audio/bc19005a-e11d-4e66-a36c-e63080db5434',
            picture: 'http://localhost:5000/image/65072608-3b89-4ea9-ad13-2aad659bf9b1',
            comments: []
        }

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>

            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{margin: '20px 10px'}}>
                    <h1>Название трека- {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова к треку</h1>
            <p>{track.text}</p>
            <h1>Коментарии</h1>
            <Grid container>
                <TextField
                    label="Ваше имя:"
                    fullWidth
                />
                <TextField
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;