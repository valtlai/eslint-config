'use strict';

module.exports = {
	extends: 'eslint:recommended',
	rules: {
		// Possible errors
		'no-loss-of-precision': 'error'
		// Best practices
		'eqeqeq': ['error', 'smart'],
		'no-return-await': 'error'
		'radix': 'error',
		// Strict mode
		'strict': ['error', 'global'],
		// Variables
		// @override
		'no-unused-vars': ['error', {
			args: 'all',
			argsIgnorePattern: '^_$',
			caughtErrors: 'all',
			caughtErrorsIgnorePattern: '^_$'
		}],
		// Stylistic issues
		'quotes': ['error', 'single', { avoidEscape: true }],
		'semi': 'error',
		// ES6
		'no-var': 'error',
		'prefer-const': 'error',
	}
};
