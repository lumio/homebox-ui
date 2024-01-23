"use client";

import * as React from "react";
import Location from "@/app/components/location";
import {LocationProps} from "@/app/components/location/location";
import Button from "@/app/components/button";

export type SideNavigationProps = {
    locations: LocationProps[];
};

export default function SideNavigation(props: SideNavigationProps) {
    const locations = props.locations ?? [];
    return (
        <aside className="shadow-lg rounded bg-white h-full flex flex-col">
            <div className="text-center">[logo]</div>

            <div className="flex justify-between items-center p-2 -mb-4 relative z-10">
                <div className="text-sm text-gray-500">Locations:</div>
                <Button href="#add">add</Button>
            </div>
            <nav className="overflow-auto relative z-0">
                <ul>
                    {locations.map((item) => <Location key={item.id} {...item} />)}
                </ul>
            </nav>
        </aside>
    );
}
