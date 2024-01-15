import React from "react";
import {Inter} from "next/font/google";
import {Container} from "@mui/material";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Container component="main" maxWidth="xs">
                    {children}
                </Container>
            </body>
        </html>
    );
}
