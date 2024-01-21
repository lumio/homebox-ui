import * as React from "react";

export default function Navigation() {
    return (
        <nav className="py-4">
            <ul className="flex flex-nowrap justify-end items-center bg-white p-2 pr-2 shadow-lg rounded">
                <li>Logout</li>
                <li>
                    <div className="-space-x-2 overflow-hidden">
                        <img className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
                            src="https://picsum.photos/100"
                            alt=""/>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
