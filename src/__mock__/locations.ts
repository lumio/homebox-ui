import {Location} from "@/core/location/interfaces/location";
import {DICTIONARY, getCounter, getRandomizer, randomNumber} from "@/__mock__/_utils";

const counter = getCounter();
const randomTitle = getRandomizer(
    DICTIONARY,
    3
);
const generateSubLocations = (parentId: string, length = 1): Location[] => {
    return Array.from({length}).map(() => ({
        id: counter.incStr(),
        name: randomTitle(),
    }));
};

export const MOCK_LOCATIONS: Location[] = Array.from({length: 6}).map((): Location => {
    const id = counter.incStr();
    return {
        id,
        name: randomTitle(),
        coverImage: "",
        description: "",
        parentId: "",
        subLocations: generateSubLocations(
            id,
            randomNumber(
                0,
                10
            )
        ),
    };
});
