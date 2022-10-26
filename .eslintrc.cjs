module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["sonarjs", "prettier"],
  rules: {},
};
