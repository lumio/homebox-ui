import test from "node:test";
import assert from "node:assert";
import Range from "@/core/shared/value-objects/range";

test(
    "Range can receive min and max in either order",
    () => {
        const range = new Range(
            1,
            0
        );
        assert.ok(range.contains(1));
        assert.ok(range.contains(0.5));
    }
);

test(
    "Range includes numbers in Infinity range",
    () => {
        const range = new Range(
            -Infinity,
            Infinity
        );
        assert.ok(range.contains(0));
        assert.ok(range.contains(100));
    }
);

test(
    "Range throws when expectation is not met",
    () => {
        const range = new Range(
            0,
            1
        );
        assert.throws(() => range.mustContain(2));
        assert.doesNotThrow(() => range.mustContain(1));
    }
);
