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
	'no-unused-vars': ['error', { caughtErrors: 'all' }], // @override

	// Stylistic Issues
	'array-bracket-spacing': 'error',
	'brace-style': 'error',
	'comma-spacing': 'error',
	'comma-style': 'error',
	'computed-property-spacing': 'error',
	'eol-last': 'error',
	'func-call-spacing': 'error',
	'function-call-argument-newline': ['error', 'consistent'],
	'implicit-arrow-linebreak': 'error',
	'indent': ['error', 'tab', { SwitchCase: 1 }],
	'keyword-spacing': 'error',
	'max-statements-per-line': 'error',
	'new-cap': 'error',
	'new-parens': 'error',
	'no-array-constructor': 'error',
	'no-lonely-if': 'error',
	'no-mixed-operators': 'error',
	'no-multi-assign': 'error',
	'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
	'no-negated-condition': 'error',
	'no-nested-ternary': 'error',
	'no-new-object': 'error',
	'no-tabs': ['error', { allowIndentationTabs: true }],
	'no-trailing-spaces': 'error',
	'no-underscore-dangle': 'error',
	'no-unneeded-ternary': ['error', { defaultAssignment: false }],
	'no-whitespace-before-property': 'error',
	'nonblock-statement-body-position': 'error',
	'object-curly-spacing': ['error', 'always'],
	'one-var': ['error', { initialized: 'never' }],
	'operator-assignment': 'error',
	'padded-blocks': ['error', 'never'],
	'prefer-exponentiation-operator': 'error',
	'prefer-object-spread': 'error',
	'quote-props': ['error', 'consistent-as-needed'],
	'quotes': ['error', 'single', { avoidEscape: true }],
	'semi': 'error',
	'semi-spacing': 'error',
	'semi-style': 'error',
	'space-before-blocks': 'error',
	'space-before-function-paren': ['error', { anonymous: 'never', named: 'never' }],
	'space-in-parens': 'error',
	'space-infix-ops': 'error',
	'space-unary-ops': 'error',
	'spaced-comment': ['error', 'always', { block: { balanced: true } }],
	'switch-colon-spacing': 'error',
	'template-tag-spacing': 'error',
	'unicode-bom': 'error',

	// ECMAScript 6
	'no-var': 'error',
	'prefer-const': 'error',
};
