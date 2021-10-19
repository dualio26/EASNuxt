module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["@nuxtjs", "prettier", "prettier/vue", "plugin:prettier/recommended", "plugin:nuxt/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        arrowParens: "avoid",
        trailingComma: "all",
        tabWidth: 2,
        printWidth: 120,
      },
    ],
    "space-before-function-paren": 0,
    "class-methods-use-this": 0,
    // Changing max row length from 80 to 150.
    // Remember to change in .editorconfig also, although am not sure if that file is even needed?
    // Especially as scaffolding gave 100 as max len while ESLint default is 80...
    "max-len": [
      "error",
      {
        code: 300,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: false,
        ignorePattern: '(d|class)="([\\s\\S]*?)"',
      },
    ],
    "no-sequences": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: true }],
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
