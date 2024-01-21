import * as React from "react";

export type TagProps = {
    name: string;
    link?: string;
    onClick?: () => void;
};
export default function Tag(props: TagProps) {
    const className =
        "inline-block bg-gray-200 text-left rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";

    const onClick = (e: React.MouseEvent) => {
        if (!props.onClick) {
            return;
        }

        props.onClick();
        e.preventDefault();
    };

    if (props.link) {
        return (
            <a onClick={onClick} href={props.link} className={className}>{props.name}</a>
        );
    }

    return (
        <span onClick={onClick} className={className}>
            {props.name}
        </span>
    );
}
