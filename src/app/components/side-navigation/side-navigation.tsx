"use client";

import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const SideNavigationRoot = styled(
    "aside",
    {
        name: "SideNavigation",
        slot: "root",
    }
)((props) => ({
    display: "block",
    background: props.theme.palette.primary.main,
}));

export default function SideNavigation() {
    return (
        <Grid>
            <SideNavigationRoot>
                test
            </SideNavigationRoot>
        </Grid>
    );
}
