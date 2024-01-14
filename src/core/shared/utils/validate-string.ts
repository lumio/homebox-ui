import InvalidType from "@/core/shared/errors/invalid-type";

export default function validateString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new InvalidType("string");
    }
}
