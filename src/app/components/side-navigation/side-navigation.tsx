"use client";

import * as React from "react";

export default function SideNavigation() {
    return (
        <aside className="m-2 p-2 shadow-lg rounded bg-white">
            <nav className="overflow-auto">
                <ul>
                    <li>Logout</li>
                </ul>
            </nav>
        </aside>
    );
}
