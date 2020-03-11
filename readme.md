# Eslint default by hckr.news
These are my settings for ESLint and Prettier.


Here's an example usage:

```json
{
  "extends": [
    "@hckrnews/eslint-config"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 8,
      }
    ]
  }
}
```
