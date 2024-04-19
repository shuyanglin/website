'use client';
import { Inter } from "next/font/google";
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
    palette: {
        primary: {
            main: grey[900]
        }
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontSize: "3rem",
            fontWeight: 600,
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 600,
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 600,
        },

    }
});

export default theme;