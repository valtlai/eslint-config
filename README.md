# @valtlai/eslint-config

[![NPM](https://img.shields.io/npm/v/@valtlai/eslint-config.svg)](https://www.npmjs.com/package/@valtlai/eslint-config)
[![License](https://img.shields.io/npm/l/@valtlai/eslint-config.svg)](LICENSE)

ESLint config for my personal projects

## Install or update

If you’re using npm v7:

```sh
npm i -D --save-prefix='~' @valtlai/eslint-config@latest
```

If you’re using an older npm version:

```sh
npm i -D --save-prefix='~' @valtlai/eslint-config@latest \
   eslint@latest eslint-plugin-{node,unicorn}@latest
```

The tilde (`~`) range only allows patch-level updates
because the new minor versions may change the linting result.

## Usage

Add this at the top level of your ESLint config:

```json
"extends": "@valtlai"
```

Add an additional config for potential Node- or browser-related files:

```json
"extends": "@valtlai/eslint-config/node"
```

```json
"extends": "@valtlai/eslint-config/browser"
```

### Examples

When all the files are Node-related:

```json
"extends": [
   "@valtlai",
   "@valtlai/eslint-config/node"
]
```

When some of the files are browser-related and rest of them Node-related:

```json
"extends": "@valtlai",
"overrides": [
   {
      "files": "!web/**",
      "extends": "@valtlai/eslint-config/node"
   },
   {
      "files": "web/**",
      "extends": "@valtlai/eslint-config/browser"
   }
]
```
