import Range from "@/core/shared/value-objects/range";

interface ToString {
    toString(): string;
}

export default function validateLength<T extends ToString>(value: T, range: Range) {
    range.mustContain(value.toString().length);
}
