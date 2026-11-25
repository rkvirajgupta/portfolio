import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["build", "node_modules"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Allow unused vars that start with a capital letter (JSX components) or underscore.
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      // Context/Theme.jsx exports a provider and its context together. This only
      // affects HMR in dev; warn until the context is split into its own file.
      "react-refresh/only-export-components": "warn",
    },
  },
  {
    files: ["**/*.test.{js,jsx}", "src/setupTests.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.vitest },
    },
  },
  {
    files: ["vite.config.js", "eslint.config.js"],
    languageOptions: { globals: { ...globals.node } },
  },
]);
