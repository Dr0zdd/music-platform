'use client';

import React, {useState} from 'react';
import MainLayout from "@/app/layout";
import StepWrapper from "@/components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "@/components/FileUpload";

const Page = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const totalSteps = 3;

    const next = () => {
        if (activeStep < totalSteps - 1) {
            setActiveStep(prev => prev + 1);
        }
    }

    const back = () => {
        if (activeStep > 0) {
            setActiveStep(prev => prev - 1);
        }
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction="column" style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label={"Название трека"}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={"Автор"}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={"Текст"}
                            multiline={true}
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept={"image/*"}>
                        <Button>Загрузить изображение</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept={"audio/*"}>
                        <Button>Загрузить аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button disabled={activeStep === totalSteps - 1} onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Page;