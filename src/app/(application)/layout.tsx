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
    const limitWidthStyles = {
        width: "calc(100% - 18rem)",
    };

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen">
                    <div className="fixed flex-none h-full p-4 w-72">
                        <SideNavigation/>
                    </div>

                    <div className="flex justify-end">
                        <header className="fixed h-22" style={limitWidthStyles}>
                            <Navigation/>
                        </header>

                        <div className="p-2 flex flex-col" style={limitWidthStyles}>
                            <main className="flex-1 mt-16 pt-4">
                                {children}
                            </main>

                            <footer className="mb-2">
                                <p>Footer</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
