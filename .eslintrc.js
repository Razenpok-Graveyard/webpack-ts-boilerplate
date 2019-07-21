module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:all",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/all"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "one-var": [
            "error",
            "never"
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "sort-keys": "off",
        "require-unicode-regexp": "off",
        "array-element-newline": "off"
    }
};
