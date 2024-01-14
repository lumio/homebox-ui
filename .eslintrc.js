module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "@stylistic/ts",
    ],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:@stylistic/all-extends",
        "prettier",
    ],
    root: true,
    rules: {
        "@stylistic/indent": ["error", 4],
        "@stylistic/array-element-newline": [
            "error", {
                ArrayExpression: "consistent",
                ArrayPattern: {
                    minItems: 3,
                },
            },
        ],
        "@stylistic/comma-dangle": ["error", "always-multiline"],
        "@stylistic/comma-spacing": "error",
        "@stylistic/function-call-spacing": "error",
        "@stylistic/quote-props": ["error", "as-needed"],
        "@stylistic/space-before-function-paren": [
            "error", {
                anonymous: "always",
                named: "never",
                asyncArrow: "always",
            },
        ],
        "@stylistic/padded-blocks": ["error", "never"],
        "@stylistic/spaced-comment": ["error", "always", {markers: ["/"]}],

        "eol-last": ["error", "always"],
        "linebreak-style": [
            "error",
            "unix",
        ],
        quotes: [
            "error",
            "double",
        ],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
    },
};
