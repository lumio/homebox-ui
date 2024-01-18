"use client";

import * as React from "react";
import {styled} from "@mui/material/styles";

const StylisticBackgroundRoot = styled(
    "div",
    {
        name: "StylisticBackground",
        slot: "root",
    }
)((props) => ({
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: props.theme.palette.primary.main,
}));

export default function StylisticBackground() {
    return (
        <StylisticBackgroundRoot>
        </StylisticBackgroundRoot>
    );
}
