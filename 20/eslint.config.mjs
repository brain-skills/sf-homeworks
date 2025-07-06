import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    ...js.configs.recommended,
    rules: {
      "no-unused-vars": "warn",
      "no-magic-numbers": ["warn", { ignore: [0, 1] }],
    },
  },
]);