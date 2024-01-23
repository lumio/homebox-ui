import React from "react";

export type ButtonProps = {
    href?: string;
    children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
    return (
        <a href={props.href} className="bg-green-800 rounded text-white py-1 px-2">
            {props.children}
        </a>
    );
}
