import * as React from "react";

export default function Navigation() {
    return (
        <nav className="py-4">
            <ul className="flex flex-nowrap justify-end items-center bg-white p-2 pr-2 shadow-lg rounded">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </li>
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
