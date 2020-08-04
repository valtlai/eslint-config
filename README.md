# @valtlai/eslint-config

[![NPM](https://img.shields.io/npm/v/@valtlai/eslint-config.svg)](https://www.npmjs.com/package/@valtlai/eslint-config)
[![License](https://img.shields.io/npm/l/@valtlai/eslint-config.svg)](LICENSE)

ESLint config for my personal projects

## Install

To install or update the package and its peer dependencies:

```sh
npm i -D --save-prefix='~' @valtlai/eslint-config@latest eslint@latest eslint-plugin-unicorn@latest
```

The tilde (`~`) ranges only allow patch-level updates
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
