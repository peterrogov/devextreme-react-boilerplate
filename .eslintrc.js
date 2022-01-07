module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    //'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    // enable additional rules
    "indent": ["error", 4],
    // Indent JSX with 4 spaces
    "react/jsx-indent": ["error", 4],
    // Indent props with 4 spaces
    "react/jsx-indent-props": ["error", 4],
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
};
