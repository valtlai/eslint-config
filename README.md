# @valtlai/eslint-config

[![NPM](https://img.shields.io/npm/v/@valtlai/eslint-config.svg)](https://www.npmjs.com/package/@valtlai/eslint-config)
[![License](https://img.shields.io/npm/l/@valtlai/eslint-config.svg)](LICENSE)

Base ESLint config for my personal projects

## Install

To install or update the package and its peer dependencies:

```sh
npm i -D --save-prefix='~' @valtlai/eslint-config@latest eslint@latest eslint-plugin-unicorn@latest
```

The tilde (`~`) ranges only allow patch-level updates
because the new minor versions may change the linting result.

To enable, add this in your ESLint config:

```json
"extends": "@valtlai"
```
