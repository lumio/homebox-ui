import React from "react";
import {Inter} from "next/font/google";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import StylisticBackground from "@/app/components/stylistic-background/stylistic-background";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Grid container component="main" sx={{height: "100vh"}}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                    >
                        <StylisticBackground/>
                    </Grid>

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        {children}
                    </Grid>
                </Grid>
            </body>
        </html>
    );
}
