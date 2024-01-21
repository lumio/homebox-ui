"use client";

import * as React from "react";
import Location from "@/app/components/location";
import {LocationProps} from "@/app/components/location/location";

export type SideNavigationProps = {
    locations: LocationProps[];
};

export default function SideNavigation(props: SideNavigationProps) {
    const locations = props.locations ?? [];
    return (
        <aside className="p-2 shadow-lg rounded bg-white h-full">
            <nav className="overflow-auto">
                <ul>
                    <li>Locations:
                        <ul className='pl-4'>
                            {locations.map((item) => <Location key={item.id} {...item} />)}
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
