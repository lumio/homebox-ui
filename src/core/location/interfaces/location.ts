export type Location = {
    id: string;
    parentId?: string;
    name: string;
    description?: string;
    coverImage?: string;
    subLocations?: Location[];
};
