import antfu from "@antfu/eslint-config"

export default antfu({
  ignores: ["**/*.json"],
  stylistic: false,
  vue: false,
  svelte: {
    overrides: {
      "no-use-before-define": "off",
    },
  },
  test: { overrides: { "test/no-import-node-test": "off" } },
  typescript: {
    tsconfigPath: "tsconfig.json",
    overrides: {
      "no-console": "off",
      "ts/no-use-before-define": "off",
      "ts/consistent-type-definitions": "off",
      "ts/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "ts/no-unsafe-argument": "off",
      "ts/no-unsafe-assignment": "off",
      "node/prefer-global/process": "off",
      "antfu/no-top-level-await": "off",

      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          internalPattern: ["@/.+?", "~/.+?"],
          newlinesBetween: "always",
          groups: [
            ["builtin", "builtin-type"],
            ["external", "external-type"],
            ["internal", "internal-type"],
            ["parent", "parent-type"],
            ["sibling", "sibling-type"],
            ["index", "index-type"],
            "object",
            "unknown",
          ],
        },
      ],
    },
  },
})