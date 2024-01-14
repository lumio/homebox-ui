import OutOfRange from "@/core/shared/errors/out-of-range";

export default class Range {
    private readonly min: number;

    private readonly max: number;

    constructor(min: number, max: number) {
        this.min = Math.min(
            min,
            max
        );
        this.max = Math.max(
            min,
            max
        );
    }

    contains(value: number): boolean {
        return value >= this.min && value <= this.max;
    }

    mustContain(value: number) {
        if (!this.contains(value)) {
            throw new OutOfRange();
        }
    }
}
