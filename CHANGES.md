# Changelog

## [0.30.0] (2021-01-02)
* Added new rules:
	* `unicorn/prefer-array-some`
	* `unicorn/prefer-default-parameters`
* Updated `eslint` to `~7.17.0`
* Updated `eslint-plugin-unicorn` to `~25.0.1`

## [0.29.0] (2020-12-19)
* Added new rules:
	* `unicorn/empty-brace-spaces`
	* `unicorn/no-lonely-if`
	* `unicorn/prefer-date-now`
* Updated `eslint` to `~7.16.0`
* Updated `eslint-plugin-unicorn` to `~24.0.0`

## [0.28.0] (2020-12-05)
* Added the `no-unsafe-optional-chaining` rule
* Updated `eslint` to `~7.15.0`

## [0.27.0] (2020-11-21)
* Added the `no-nonoctal-decimal-escape` rule
* Updated `eslint` to `~7.14.0`

## [0.26.0] (2020-11-14)
* Added the `require-unicode-regexp` rule

## [0.25.0] (2020-11-07)
* Removed the `arrow-parens` rule
* Updated `eslint` to `~7.13.0`

## [0.24.0] (2020-10-25)
* Updated `eslint` to `~7.12.0`

## [0.23.0] (2020-10-21)
* Made `eslint-plugin-node` a _required_ peer dependency again
* Switched the peer dependencies to use tilde ranges:
	* `eslint ~7.11.0`
	* `eslint-plugin-node ~11.1.0`
	* `eslint-plugin-unicorn ~23.0.0`

## [0.22.0] (2020-10-16)
* Added the new rules from eslint-plugin-unicorn:
	* `numeric-separators-style`
	* `prefer-math-trunc`
	* `prefer-ternary`
* Required `eslint >=7.11.0` (updated)
* Required `eslint-plugin-unicorn >=23.0.0` (updated)

## [0.21.0] (2020-09-27)
* Updated the installation docs
* Required `eslint >=7.10.0` (updated)

## [0.20.1] (2020-09-23)
* Required `eslint-plugin-unicorn` again
  (Only `eslint-plugin-node` should be optional)

## [0.20.0] (2020-09-23)
* Marked the ESLint plugins as optional

## [0.19.1] (2020-09-22)
* Fixed the auto disabling of the `node/no-unpublished-import`
  and `node/no-unpublished-require` rules

## [0.19.0] (2020-09-22)
* Made work on Node&nbsp;10 and&nbsp;12 too
* Removed the development fields from `package.json` before publishing

## [0.18.0] (2020-09-21)
* Disabled the `node/no-unpublished-import`
  and `node/no-unpublished-require` rules for private packages

## [0.17.0] (2020-09-21)
* Enabled the `es2021` environment

## [0.16.0] (2020-09-20)
* Removed the `function-call-argument-newline` rule

## [0.15.0] (2020-09-19)
* Disabled the `node/no-unpublished-import`
  and `node/no-unpublished-require` rules for the `ava` package

## [0.14.0] (2020-09-19)
* Set `ecmaVersion` to `2021`
* Required `eslint >=7.9.0` (updated)
* Required `eslint-plugin-unicorn >=22.0.0` (updated)

## [0.13.0] (2020-09-02)
* Added `arrow-parens` to always require parentheses
  around the function parameters if the body is surrounded by braces,
  and otherwise to omit them when possible
* Required `eslint >=7.8.1` (updated)

## [0.12.0] (2020-08-17)
* Updated `no-underscore-dangle`: disallowed in function parameters
* Updated `space-before-function-paren`: always required
* Required `eslint >=7.7.0` (updated)

## [0.11.0] (2020-08-11)
* Removed the override for `gulpfile.mjs` from the `node` config (undid v0.9.0)

## [0.10.0] (2020-08-08)
* Added [eslint-plugin-node]
	* Enabled the `node/recommended` config and 14 other rules
	* Unset `__dirname` and `__filename` ES modules
* Required `eslint-plugin-node >=11.1.0` (added)

## [0.9.0] (2020-08-08)
* In the `node` config, allowed `gulpfile.mjs` contain `async` functions
  that have no `await` expression to signal task completion
  (overridden `require-await`)

## [0.8.0] (2020-08-06)
* In the `node` config, marked `*.mjs` files as ECMAScript modules
  and unset the CommonJS module globals `module`, `exports` and `require`

## [0.7.0] (2020-08-04)
* Added the `node` and `browser` configs
* Added `comma-dangle` to disallow trailing comma in single-line constructs
* Added `key-spacing` allowing multiple spaces after the colon
  in multi-line object literals to align similar values

## [0.6.0] (2020-08-02)
* Updated `spaced-comment` to allow asterisks at the start of a block comment
  without whitespace before it
* Updated `unicorn/better-regex` to not sort character classes

## [0.5.0] (2020-08-02)
* Added over 100 rules from the ESLint core
* Added 32 rules from [eslint-plugin-unicorn]
* Removed or updated several rules
* Required `eslint >=7.6.0` (updated)
* Required `eslint-plugin-unicorn >=21.0.0` (added)
* Updated the installation docs and recommended using tilde ranges

## [0.4.0] (2020-07-23)
* Added `root: true`
* Added `ignorePatterns` to lint dotfiles
* Required `eslint >=7.5.0` (updated)
* Extended the installation docs

## [0.3.0] (2020-06-20)
* Added the `no-unreachable-loop` rule
* Added the `no-unused-expressions` rule
* Required `eslint >=7.3.0` (updated)

## [0.2.0] (2020-05-25)
* Added the `no-param-reassign` rule
* Added the `quote-props` rule

## [0.1.1] (2020-05-24)
* Fixed the syntax errors

## [0.1.0] (2020-05-24)
* Initial release
* This version is completely broken, so it was removed from the NPM registry

[eslint-plugin-node]: https://github.com/mysticatea/eslint-plugin-node
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn

[0.30.0]: https://github.com/valtlai/eslint-config/compare/v0.29.0...v0.30.0
[0.29.0]: https://github.com/valtlai/eslint-config/compare/v0.28.0...v0.29.0
[0.28.0]: https://github.com/valtlai/eslint-config/compare/v0.27.0...v0.28.0
[0.27.0]: https://github.com/valtlai/eslint-config/compare/v0.26.0...v0.27.0
[0.26.0]: https://github.com/valtlai/eslint-config/compare/v0.25.0...v0.26.0
[0.25.0]: https://github.com/valtlai/eslint-config/compare/v0.24.0...v0.25.0
[0.24.0]: https://github.com/valtlai/eslint-config/compare/v0.23.0...v0.24.0
[0.23.0]: https://github.com/valtlai/eslint-config/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/valtlai/eslint-config/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/valtlai/eslint-config/compare/v0.20.1...v0.21.0
[0.20.1]: https://github.com/valtlai/eslint-config/compare/v0.20.0...v0.20.1
[0.20.0]: https://github.com/valtlai/eslint-config/compare/v0.19.1...v0.20.0
[0.19.1]: https://github.com/valtlai/eslint-config/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/valtlai/eslint-config/compare/v0.18.0...v0.19.0
[0.18.0]: https://github.com/valtlai/eslint-config/compare/v0.17.0...v0.18.0
[0.17.0]: https://github.com/valtlai/eslint-config/compare/v0.16.0...v0.17.0
[0.16.0]: https://github.com/valtlai/eslint-config/compare/v0.15.0...v0.16.0
[0.15.0]: https://github.com/valtlai/eslint-config/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/valtlai/eslint-config/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/valtlai/eslint-config/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/valtlai/eslint-config/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/valtlai/eslint-config/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/valtlai/eslint-config/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/valtlai/eslint-config/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/valtlai/eslint-config/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/valtlai/eslint-config/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/valtlai/eslint-config/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/valtlai/eslint-config/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/valtlai/eslint-config/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/valtlai/eslint-config/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/valtlai/eslint-config/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/valtlai/eslint-config/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/valtlai/eslint-config/releases/tag/v0.1.0
