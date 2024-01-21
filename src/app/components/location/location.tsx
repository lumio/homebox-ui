import React from "react";

const DRAG_HOVER_CLASSES: string[] = ["bg-red-400", "font-bold"];

export type LocationProps = {
    id: string;
    parentId?: string;
    name: string;
    description?: string;
    element?: string;
    subLocations?: LocationProps[];
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

    const subLocations = props.subLocations?.length
        ? props.subLocations.map((subLocation) => <Location key={subLocation.id} {...subLocation} />)
        : null;
    return (
        <DynamicElement>
            <a
                href="#"
                onDragOver={onDragOver}
                onDragLeave={resetStyles}
                onDrop={onDrop}
                className="block mb-1"
            >
                {props.name}
            </a>

            {subLocations
                ? <ul className="pl-4">{subLocations}</ul>
                : null}
        </DynamicElement>
    );
}
