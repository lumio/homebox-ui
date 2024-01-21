import {Item} from "@/core/item/interfaces/item";
import {DICTIONARY, getCounter, getRandomizer, randomNumber} from "@/__mock__/_utils";

const counter = getCounter();
const randomTitle = getRandomizer(
    DICTIONARY,
    3
);
const randomTags = getRandomizer(
    DICTIONARY,
    3
);

export const MOCK_ITEMS: Item[] = Array.from({length: 200}).map(() => {
    return {
        id: counter.incStr(),
        locationId: "room1",
        name: randomTitle(),
        coverImage: "https://picsum.photos/" + randomNumber(
            100,
            300
        ),
        description: "Hello world",
        tags: Array.from({
            length: randomNumber(
                0,
                22
            ),
        }).map(() => randomTags()),
    };
});
