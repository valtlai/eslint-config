'use strict';

module.exports = {
	// Possible Errors
	'no-loss-of-precision': 'error',
	'no-unreachable-loop': 'error',

	// Best Practices
	'eqeqeq': ['error', 'smart'],
	'no-param-reassign': 'error',
	'no-return-await': 'error',
	'no-unused-expressions': 'error',
	'radix': 'error',

	// Strict Mode
	'strict': ['error', 'global'],

	// Variables
	'no-unused-vars': ['error', { // @override
		args: 'all',
		argsIgnorePattern: '^_$',
		caughtErrors: 'all'
	}],

	// Stylistic Issues
	'quote-props': ['error', 'consistent-as-needed'],
	'quotes': ['error', 'single', { avoidEscape: true }],
	'semi': 'error',

	// ECMAScript 6
	'no-var': 'error',
	'prefer-const': 'error',
};
