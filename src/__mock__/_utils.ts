import crypto from "node:crypto";

export function getCounter() {
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
}

export function getRandomizer(dictionary: string[], appendedWords = 1) {
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
}

export const DICTIONARY = [
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

export function randomNumber(min: number, max: number) {
    return crypto.randomInt(
        min,
        max
    );
}

