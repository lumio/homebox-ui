import React from "react";

const LOCATION_PADDING_MIN = 0.5;
const LOCATION_PADDING_STEP = 1;
const DRAG_HOVER_CLASSES: string[] = ["bg-red-400"];

export type LocationProps = {
    id: string;
    parentId?: string;
    name: string;
    description?: string;
    element?: string;
    subLocations?: LocationProps[];
    indentation?: number;
};

type DynamicElementProps = {
    children: React.ReactNode;
    onDragOver?: React.DragEventHandler;
    onDrop?: React.DragEventHandler;
};

export default function Location(props: LocationProps) {
    const resetStyles = (e: React.DragEvent) => {
        const target = e.target as HTMLElement;
        target.classList.remove(...DRAG_HOVER_CLASSES);
    };

    const onDragOver = (e: React.DragEvent) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.dropEffect = "move";

        const target = e.target as HTMLElement;
        target.classList.add(...DRAG_HOVER_CLASSES);

        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent) => {
        console.log(e.dataTransfer.getData("application/json"));
        // resetStyles(e);
        e.preventDefault();
    };

    const DynamicElement = ({children, ...dynamicProps}: DynamicElementProps) => React.createElement(
        props.element ?? "li",
        dynamicProps,
        children
    );

    const indentation = props.indentation ?? 0;
    const subLocations = props.subLocations?.length
        ? props.subLocations.map((subLocation) => <Location key={subLocation.id}
            indentation={indentation + 1} {...subLocation} />)
        : null;
    return (
        <DynamicElement>
            <a
                href="#"
                onDragOver={onDragOver}
                onDragLeave={resetStyles}
                onDrop={onDrop}
                className="block p-2"
                style={{paddingLeft: `${LOCATION_PADDING_STEP * indentation + LOCATION_PADDING_MIN}rem`}}
            >
                {props.name}
            </a>

            {subLocations
                ? <ul>{subLocations}</ul>
                : null}
        </DynamicElement>
    );
}
