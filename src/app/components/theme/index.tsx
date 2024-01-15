"use client";

import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";

const defaultTheme = createTheme();

export default function Theme({children}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            {children}
        </ThemeProvider>
    );
}
