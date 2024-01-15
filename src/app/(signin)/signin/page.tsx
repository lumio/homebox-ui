import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/Inventory2";
import Typography from "@mui/material/Typography";
import SignInForm from "../../components/signin-form";

export default function SignIn() {
    return (
        <Box
            sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Avatar sx={{
                m: 1,
                bgcolor: "primary.main",
                width: 64,
                height: 64,
            }}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>

            <SignInForm/>
        </Box>
    );
}
