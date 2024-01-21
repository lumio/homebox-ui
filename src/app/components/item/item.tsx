"use client";

import Typography from "@mui/material/Typography";
import Tag from "@/app/components/tag";

export type ItemProps = {
    name: string;
};

export default function Item(props: ItemProps) {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg pb-4">
            <div className="max-h-52 overflow-hidden">
                <img
                    className="w-full object-cover"
                    src={"https://picsum.photos/300"}
                    alt={props.name}
                />
            </div>
            <div className="p-4 pb-0">
                <Typography gutterBottom variant="h5" color="text.secondary">{props.name}</Typography>
                <Typography variant="body2" color="text.secondary">testing</Typography>
            </div>
            <div className="p-4 pb-0">
                <Tag name='test'/>
                <Tag name='foo'/>
                <Tag name='bar'/>
            </div>
        </div>
    );
}
