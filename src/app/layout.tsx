import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import Theme from "@/app/components/theme";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "HomeBox",
    description: "A custom UI for HomeBox",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppRouterCacheProvider>
                    <Theme>
                        {children}
                    </Theme>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
