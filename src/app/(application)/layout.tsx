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
                <div className="h-screen mt-2">
                    <div className="fixed flex-none min-h-full w-1/3">
                        <SideNavigation/>
                    </div>

                    <div className="flex justify-end">
                        <header className="fixed w-2/3 h-12">
                            <Navigation/>
                        </header>

                        <div className="w-2/3 p-2 pr-4 flex flex-col">
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
