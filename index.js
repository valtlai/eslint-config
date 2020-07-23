'use strict';

module.exports = {
	root: true,
	ignorePatterns: ['!.*', '.git'],
	extends: 'eslint:recommended',
	rules: {
		// Possible errors
		'no-loss-of-precision': 'error',
		'no-unreachable-loop': 'error',
		// Best practices
		'eqeqeq': ['error', 'smart'],
		'no-param-reassign': 'error',
		'no-return-await': 'error',
		'no-unused-expressions': 'error',
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
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single', { avoidEscape: true }],
		'semi': 'error',
		// ES6
		'no-var': 'error',
		'prefer-const': 'error',
	}
};
