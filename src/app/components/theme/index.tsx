"use client";

import {
    createTheme,
    ThemeProvider,
    THEME_ID,
    PaletteOptions,
} from "@mui/material/styles";
import React from "react";

const palette: PaletteOptions = {
    primary: {
        main: "#496552",
    },
};
const materialTheme = createTheme({
    palette,
});

export default function Theme({children}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={{[THEME_ID]: materialTheme}}>
            {children}
        </ThemeProvider>
    );
}
