module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "MemberExpression": 1,
        "ArrayExpression": 1,
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        },
        "CallExpression": {
          "arguments": 1
        }
      }
    ],
    "@typescript-eslint/brace-style": ["error", "1tbs"],
    "@typescript-eslint/quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "@typescript-eslint/no-empty-function": "off",
    "node/no-empty-function": "off",
    "no-var": "error",
    "eol-last": "error",
    "no-trailing-spaces": "error",
    "max-len": ["error", { "code": 100, "comments": 120, "ignoreStrings": true, "ignoreUrls": true, "ignoreTemplateLiterals": true, "ignoreComments": true }],
    "no-underscore-dangle": "error",
    "function-paren-newline": ["error", "multiline"],
    "prefer-const": [ "error", { "destructuring": "all" }],
    "arrow-parens": ["error", "always"],
    "array-bracket-spacing": [ "error", "always", { "arraysInArrays": false, "objectsInArrays": false } ],
    "curly": [ "error", "all" ],
    "object-curly-newline": ["error", { "minProperties": 3, "multiline": true }],
    "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
    "quotes": "off",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
  }
};