# Changelog

## [0.9.0] (2020-08-08)
* In the `node` config, allowed `gulpfile.mjs` contain `async` functions
which have no `await` expression to signal task completion
(overridden [`require-await`](https://eslint.org/docs/rules/require-await))

## [0.8.0] (2020-08-06)
* In the `node` config, marked the `*.mjs` files as ECMAScript modules
and unset the CommonJS module globals

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
