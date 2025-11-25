import Navbar from "@/components/Navbar";
import {Container} from "@mui/material";
import Player from "@/components/Player";
import ReduxProvider from "@/store/Provider";

export default function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <ReduxProvider>
            <Navbar/>
            <Container>{children}</Container>
            <Player/>
        </ReduxProvider>
        </body>
        </html>
    );
}
