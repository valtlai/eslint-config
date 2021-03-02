'use strict';

// NOTE: The rules enabled by the eslint:recommended config and
// not overridden here are omitted! All others are listed even if turned off.
// The “~>” sign denotes the rules disabled for the sake of another rule.

module.exports = {
	// Possible Errors
	'no-empty': ['error', { allowEmptyCatch: true }], // @override
	'valid-typeof': ['error', { requireStringLiterals: true }], // @override

	// Best Practices
	'array-callback-return': ['error', { checkForEach: true }], // TODO: checkForEach only for explicit return
	'curly': ['error', 'multi-line', 'consistent'],
	'no-unused-expressions': 'error', // TODO: enforceForJSX: true
	'no-unused-labels': 'off', // @override; ~> no-labels; for autofix
	'radix': 'error', // TODO: vai 'warn' tai 'off'?

	// Variables
	'no-shadow': ['error', { builtinGlobals: true }],
	'no-undefined': 'error', // TODO: ~> no-global-assign, no-shadow-restricted-names
	'no-unused-vars': null, // ~> unicorn/prefer-optional-catch-binding // @override

	// Stylistic Issues
	'array-bracket-newline': ['error', 'consistent'],
	'array-element-newline': ['error', 'consistent'],
	'function-paren-newline': ['error', 'multiline-arguments'],
	'id-match': ['error', '^[\\w$]+$'],
	'multiline-ternary': ['error', 'always-multiline'],
	'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], // @override
	'object-curly-newline': ['error', {
		ObjectPattern: { multiline: true },
		ImportDeclaration: { multiline: true },
		ExportDeclaration: { multiline: true }
	}],
	'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
	'one-var': ['error', { initialized: 'never', uninitialized: 'consecutive' }], // ?
	'operator-linebreak': ['error', 'before'], // TODO: overrides
	// 'spaced-comment': ... // broken 'balanced' option

	// ECMAScript 6
	'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }], // TODO: allow when body is surrounded with parens
	'no-duplicate-imports': 'error', // TODO: includeExports?
};
