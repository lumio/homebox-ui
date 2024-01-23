"use client";

import TagList from "@/app/components/tag-list";
import React from "react";

export type ItemProps = {
    id: string;
    locationId: string;
    name: string;
    coverImage?: string;
    description?: string;
    tags: string[];
    locked?: boolean;
};

export default function Item(props: ItemProps) {
    const onDragStart = (e: React.DragEvent) => {
        if (props.locked) {
            e.dataTransfer.effectAllowed = "none";
            e.dataTransfer.dropEffect = "none";
            e.preventDefault();
            return;
        }

        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData(
            "application/json",
            JSON.stringify({
                id: props.id,
                locationId: props.locationId,
                name: props.name,
            }),
        );
    };

    return (
        <a
            href="#"
            className="box-border bg-white rounded overflow-hidden shadow-lg pb-4 mr-4 mb-4"
            style={{width: "calc(20% - 1rem)"}}
            onDragStart={onDragStart}
            draggable
        >
            <div className="max-h-32 overflow-hidden">
                <img
                    className="w-full object-cover"
                    draggable="false"
                    src={props.coverImage
                        ? props.coverImage
                        : "https://picsum.photos/300"}
                    alt={props.name}
                />
            </div>
            <div className="p-4 pb-0">
                <h3 className="text-xl text-black">{props.name}</h3>
                {props.description
                    ? <div className="text-sm text-black">{props.description}</div>
                    : null}
            </div>
            {props.tags?.length
                ? <div className="p-4 pb-0">
                    <TagList tags={props.tags}/>
                </div>
                : null}
        </a>
    );
}
