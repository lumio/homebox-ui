export type TagProps = {
    name: string;
    link?: string;
};
export default function Tag(props: TagProps) {
    const className =
        "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";

    if (props.link) {
        return (
            <a href={props.link} className={className}>{props.name}</a>
        );
    }

    return (
        <span className={className}>
            {props.name}
        </span>
    );
}
