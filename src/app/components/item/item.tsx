"use client";

import Tag from "@/app/components/tag";

export type ItemProps = {
    name: string;
    coverImage?: string;
    description?: string;
    tags: string[];
};

export default function Item(props: ItemProps) {
    return (
        <div className="w-52 bg-white rounded overflow-hidden shadow-lg pb-4 mr-4 mb-4">
            <div className="max-h-32 overflow-hidden">
                <img
                    className="w-full object-cover"
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
                    {props.tags?.map((tag) => <Tag key={tag} name={tag}/>)}
                </div>
                : null}
        </div>
    );
}
