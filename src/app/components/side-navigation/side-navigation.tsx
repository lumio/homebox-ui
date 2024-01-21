"use client";

import * as React from "react";

export default function SideNavigation() {
    const onDragOver = (e: React.DragEvent) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.dropEffect = "move";
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent) => {
        console.log(e.dataTransfer.getData("application/json"));
        e.preventDefault();
    };

    return (
        <aside className="p-2 shadow-lg rounded bg-white h-full">
            <nav className="overflow-auto">
                <ul>
                    <li>Locations
                        <ul>
                            <li draggable>Room 1</li>
                            <li>
                                <span
                                    data-dropable="some-id"
                                    className="w-full inline-block bg-amber-500"
                                    onDragOver={onDragOver}
                                    onDrop={onDrop}
                                >
                                    Room 2
                                </span>
                                <ul>
                                    <li>Room 2.1</li>
                                    <li>Room 2.2</li>
                                    <li>Room 2.3</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
