"use client";

import * as React from "react";

export default function SideNavigation() {
    return (
        <aside className="p-2 shadow-lg rounded bg-white h-full">
            <nav className="overflow-auto">
                <ul>
                    <li>Logout</li>
                </ul>
            </nav>
        </aside>
    );
}
