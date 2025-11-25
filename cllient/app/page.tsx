"use client";
import React from "react";
import { Button, styled, Typography } from "@mui/material";

const Center = styled("div")(({ theme }) => ({
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const Page = () => {
    return (
        <Center>
            <Typography variant="h3">Добро пожаловать!</Typography>
            <Typography variant="h5">Здесь собраны лучшие треки!</Typography>
        </Center>
    );
};

export default Page;
