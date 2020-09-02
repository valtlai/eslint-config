# Changelog

## [Unreleased]
* Enabled [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens)
to always require parentheses around the function parameters,
if the body is surrounded by braces, and otherwise to omit them when possible
* Required `eslint >=7.8.1` (updated)

## [0.12.0] (2020-08-17)
* Updated [`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle):
disallowed in function parameters
* Updated [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren):
always required
* Required `eslint >=7.7.0` (updated)

## [0.11.0] (2020-08-11)
* Removed the override for `gulpfile.mjs` from the `node` config (undid v0.9.0)

## [0.10.0] (2020-08-08)
* Added [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
	* Enabled the `node/recommended` config and 14 other rules
	* Unset `__dirname` and `__filename` ES modules
* Required `eslint-plugin-node >=11.1.0` (added)

## [0.9.0] (2020-08-08)
* In the `node` config, allowed `gulpfile.mjs` contain `async` functions
which have no `await` expression to signal task completion
(overridden [`require-await`](https://eslint.org/docs/rules/require-await))

## [0.8.0] (2020-08-06)
* In the `node` config, marked `*.mjs` files as ECMAScript modules
and unset the CommonJS module globals `module`, `exports` and `require`

## [0.7.0] (2020-08-04)
* Added `node` and `browser` configs
* Enabled [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)
to disallow trailing comma in single-line constructs
* Enabled [`key-spacing`](https://eslint.org/docs/rules/key-spacing)
allowing multiple spaces after the colon in multi-line object literals
to align similar values

## [0.6.0] (2020-08-02)
* Updated
[`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)
to allow asterisks at the start of a block comment without whitespace before it
* Updated
[`unicorn/better-regex`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/better-regex.md)
to not sort character classes

## [0.5.0] (2020-08-02)
* Added over 100 rules from the ESLint core
* Added 32 rules from [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* Removed or updated several rules
* Required `eslint >=7.6.0` (updated)
* Required `eslint-plugin-unicorn >=21.0.0` (added)
* Updated README and recommended using tilde ranges
* Refactored code

## [0.4.0] (2020-07-23)
* Added `root: true`
* Added `ignorePatterns` to lint dotfiles
* Required the latest ESLint version
* Extended the installation instructions

## [0.3.0] (2020-06-20)
* Added the `no-unreachable-loop` rule
* Added the `no-unused-expressions` rule
* Required the latest ESLint version

## [0.2.0] (2020-05-25)
* Added the `no-param-reassign` rule
* Added the `quote-props` rule
* Updated the previous changelog entries

## [0.1.1] (2020-05-24)
* Fixed the syntax errors
* Fixed linting
* Fixed the tag URL
* Added NPM badges
* Updated the previous changelog entry

## [0.1.0] (2020-05-24)
* Initial release
* This version is completely broken, so it was removed from the NPM registry

[Unreleased]: https://github.com/valtlai/eslint-config/compare/v0.12.0...HEAD
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
