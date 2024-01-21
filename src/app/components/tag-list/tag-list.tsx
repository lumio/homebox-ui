import Tag from "@/app/components/tag";
import {useState} from "react";

export type TagListProps = {
    tags?: string[];
    maxTags?: number;
};

export default function TagList(props: TagListProps) {
    const [displayAll, setDisplayAll] = useState(false);

    if (!props.tags?.length) {
        return null;
    }

    const set: Record<string, boolean> = {};
    props.tags.forEach((tag) => {
        set[tag] = true;
    });

    const useMaxTags = props.maxTags ?? 3;
    const tags = Object.keys(set);
    const displayTags = tags.slice(
        0,
        useMaxTags
    );
    const hasMore = tags.length > useMaxTags;
    const moreLabel = (displayAll
        ? "-"
        : "+") + (tags.length - displayTags.length);
    const handleDisplayAll = () => {
        setDisplayAll(!displayAll);
    };

    return (
        <>
            {(displayAll
                ? tags
                : displayTags).map((tag) => <Tag key={tag} name={tag}/>)}
            {hasMore
                ? <Tag onClick={handleDisplayAll} name={moreLabel}/>
                : null}
        </>
    );
}
