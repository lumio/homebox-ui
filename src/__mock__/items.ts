import {Item} from "@/core/item/interfaces/item";
import crypto from "node:crypto";

const getCounter = () => {
    let counter = 0;
    const increase = () => {
        counter++;
    };
    return {
        incStr() {
            increase();
            return "" + counter;
        },
        increase,
    };
};

const getRandomizer = (dictionary: string[], appendedWords = 1) => {
    const randomIndex = () => crypto.randomInt(
        0,
        dictionary.length - 1
    );
    const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);
    const randomWord = () => capitalize(dictionary[randomIndex()]);
    return () => {
        const words: string[] = [];
        const useMaxWords = Math.min(
            randomNumber(
                1,
                appendedWords + 1
            ),
            appendedWords
        );
        while (words.length < useMaxWords) {
            words.push(randomWord());
        }

        return words.join(" ");
    };
};

const dictionary = [
    "weather",
    "billowy",
    "selective",
    "bridge",
    "warn",
    "greasy",
    "cracker",
    "collect",
    "driving",
    "natural",
    "chunky",
    "married",
    "tendency",
    "moaning",
    "note",
    "honey",
    "earthquake",
    "sore",
    "opposite",
    "cycle",
    "silver",
    "suspect",
    "giraffe",
    "aromatic",
    "seemly",
    "reject",
    "design",
    "print",
    "sponge",
    "bare",
    "insurance",
    "command",
];
const counter = getCounter();
const randomTitle = getRandomizer(
    dictionary,
    3
);
const randomTags = getRandomizer(
    dictionary,
    3
);
const randomNumber = (min: number, max: number) => crypto.randomInt(
    min,
    max
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
