import {Item} from "@/core/item/interfaces/item";

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
    const randomIndex = () => Math.floor(Math.random() * (dictionary.length - 1));
    const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);
    const randomWord = () => capitalize(dictionary[randomIndex()]);
    return () => {
        const words: string[] = [];
        while (words.length < appendedWords) {
            words.push(randomWord());
        }

        return words.join(" ");
    };
};

const counter = getCounter();
const randomTitle = getRandomizer(
    [
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
    ],
    3
);
const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const MOCK_ITEMS: Item[] = Array.from({length: 200}).map(() => {
    return {
        id: counter.incStr(),
        name: randomTitle(),
        coverImage: "https://picsum.photos/" + randomNumber(
            100,
            300
        ),
        description: "Hello world",
        tags: [],
    };
});
