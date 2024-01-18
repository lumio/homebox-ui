import React from "react";
import {Inter} from "next/font/google";
import Navigation from "@/app/components/navigation";
import SideNavigation from "@/app/components/side-navigation";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    <Navigation/>
                </header>

                <SideNavigation/>

                <main>

                    {children}
                </main>

                <footer>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    );
}
