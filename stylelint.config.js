module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-prettier",
    "stylelint-config-sass-guidelines",
    "stylelint-config-standard",
  ],

  failOnError: true,
  files: ["assets/**/*.{s?(a|c)ss,less,stylus}", "{components,layouts,pages}/**/*.vue"],
  plugins: ["stylelint-scss"],
  ignoreFiles: [
    "./coverage/**/*",
    "./dist/**/*",
    "./node_modules/**/*",
    "./src/**/__snapshots__/**/*",
    "./static/*",
    "./assets/images/*",
    "./assets/json/*",
    "./assets/css/**/*",
    "./public/*",
    "./*",
  ],
  rules: {
    "max-nesting-depth": [
      4,
      {
        ignore: ["blockless-at-rules", "pseudo-classes"],
      },
    ],
    "selector-max-compound-selectors": 7,
    "selector-max-id": 1,
    "selector-no-qualifying-type": null,
    "selector-pseudo-element-colon-notation": null,
    "color-named": null,
    // Enforce BEM class patterns, inspired by
    // - https://github.com/simonsmith/stylelint-selector-bem-pattern/issues/23#issuecomment-279216443
    // - https://github.com/bjankord/stylelint-config-sass-guidelines/issues/20#issuecomment-349972873
    // probably it can be achieved with them too:
    // - https://github.com/simonsmith/stylelint-selector-bem-pattern
    // - https://github.com/postcss/postcss-bem-linter
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "function-name-case": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["include", "each", "mixin", "extend", "if", "function", "for", "else", "return", "screen"],
      },
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: [/box-orient/],
      },
    ],
    "selector-type-no-unknown": [true],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
    "unit-no-unknown": [
      true,
      {
        ignoreFunctions: ["-webkit-image-set"],
      },
    ],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["box-orient"],
      },
    ],
    "value-no-vendor-prefix": [
      true,
      {
        ignoreValues: ["box"],
      },
    ],
    // stylelint-config-sass-guidelines requires
    // you to omit the '.scss' ending in @import statements. But in combination
    // with webpack we still need it.
    "scss/at-import-partial-extension-blacklist": null,
    "scss/at-extend-no-missing-placeholder": null,
    "scss/at-function-pattern": "^[a-zA-Z]+([a-zA-Z0-9-]+[a-zA-Z0-9]+)?$",
    "scss/at-import-no-partial-leading-underscore": null,
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["screen"],
      },
    ],
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": "^[_]?[a-zA-Z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/selector-no-redundant-nesting-selector": null,
    "declaration-colon-newline-after": null,
    "declaration-block-trailing-semicolon": null,
    "value-list-comma-newline-after": null,
    "no-eol-whitespace": null,
    "string-quotes": "double",
  },
};
