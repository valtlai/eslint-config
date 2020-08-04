'use strict';

module.exports = {
	// Possible Errors
	'no-await-in-loop': 'error',
	'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }], // @override
	'no-irregular-whitespace': ['error', { skipStrings: false }], // @override
	'no-loss-of-precision': 'error',
	'no-promise-executor-return': 'error',
	'no-template-curly-in-string': 'error',
	'no-unreachable-loop': 'error',
	'no-useless-backreference': 'error',
	'require-atomic-updates': 'error',
	'use-isnan': ['error', { enforceForIndexOf: true }], // @override

	// Best Practices
	'accessor-pairs': 'error',
	'array-callback-return': 'error',
	'class-methods-use-this': 'error',
	'default-case': 'error',
	'default-case-last': 'error',
	'default-param-last': 'error',
	'dot-location': ['error', 'property'],
	'eqeqeq': ['error', 'smart'],
	'grouped-accessor-pairs': ['error', 'getBeforeSet'],
	'guard-for-in': 'error',
	'no-caller': 'error',
	'no-constructor-return': 'error',
	'no-empty-function': 'error',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-floating-decimal': 'error',
	'no-implied-eval': 'error',
	'no-invalid-this': 'error',
	'no-iterator': 'error',
	'no-labels': 'error',
	'no-lone-blocks': 'error',
	'no-loop-func': 'error',
	'no-multi-spaces': 'error',
	'no-multi-str': 'error',
	'no-new': 'error',
	'no-new-func': 'error',
	'no-param-reassign': 'error',
	'no-proto': 'error',
	'no-return-assign': ['error', 'always'],
	'no-return-await': 'error',
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-throw-literal': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unused-expressions': 'error',
	'no-useless-call': 'error',
	'no-useless-return': 'error',
	'no-void': 'error',
	'no-warning-comments': 'warn',
	'prefer-promise-reject-errors': 'error',
	'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
	'radix': 'error',
	'require-await': 'error',
	'wrap-iife': ['error', 'inside'],
	'yoda': 'error',

	// Strict Mode
	'strict': ['error', 'global'],

	// Variables
	'no-undef-init': 'error',
	'no-use-before-define': 'error',

	// Stylistic Issues
	'array-bracket-spacing': 'error',
	'block-spacing': 'error',
	'brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'comma-dangle': ['error', 'only-multiline'],
	'comma-spacing': 'error',
	'comma-style': 'error',
	'computed-property-spacing': 'error',
	'eol-last': 'error',
	'func-call-spacing': 'error',
	'function-call-argument-newline': ['error', 'consistent'],
	'implicit-arrow-linebreak': 'error',
	'indent': ['error', 'tab', { SwitchCase: 1 }],
	'key-spacing': ['error', { multiLine: { mode: 'minimum' } }],
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
	'spaced-comment': ['error', 'always', { block: { exceptions: ['*'], balanced: true } }],
	'switch-colon-spacing': 'error',
	'template-tag-spacing': 'error',
	'unicode-bom': 'error',

	// ECMAScript 6
	'arrow-spacing': 'error',
	'no-duplicate-imports': 'error',
	'no-new-symbol': 'off', // ~> unicorn/new-for-builtins // @override
	'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
	'no-useless-constructor': 'error',
	'no-useless-rename': 'error',
	'no-var': 'error',
	'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
	'prefer-const': 'error',
	'prefer-numeric-literals': 'error',
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'rest-spread-spacing': 'error',
	'template-curly-spacing': 'error',

	// plugin:unicorn
	'unicorn/better-regex': ['error', { sortCharacterClasses: false }],
	'unicorn/catch-error-name': 'error',
	'unicorn/consistent-function-scoping': 'error',
	'unicorn/custom-error-definition': 'error',
	'unicorn/error-message': 'error',
	'unicorn/escape-case': 'error',
	'unicorn/filename-case': 'error',
	'unicorn/import-index': ['error', { ignoreImports: true }],
	'unicorn/new-for-builtins': 'error',
	'unicorn/no-abusive-eslint-disable': 'error',
	'unicorn/no-array-instanceof': 'error',
	'unicorn/no-console-spaces': 'error',
	'unicorn/no-for-loop': 'error',
	'unicorn/no-nested-ternary': 'error',
	'unicorn/no-object-as-default-parameter': 'error',
	'unicorn/no-unsafe-regex': 'error',
	'unicorn/no-unused-properties': 'error',
	'unicorn/no-zero-fractions': 'error',
	'unicorn/number-literal-case': 'error',
	'unicorn/prefer-array-find': 'error',
	'unicorn/prefer-flat-map': 'error',
	'unicorn/prefer-includes': 'error',
	'unicorn/prefer-negative-index': 'error',
	'unicorn/prefer-number-properties': 'error',
	'unicorn/prefer-optional-catch-binding': 'error',
	'unicorn/prefer-reflect-apply': 'error',
	'unicorn/prefer-spread': 'error',
	'unicorn/prefer-starts-ends-with': 'error',
	'unicorn/prefer-string-slice': 'error',
	'unicorn/prefer-trim-start-end': 'error',
	'unicorn/prefer-type-error': 'error',
	'unicorn/throw-new-error': 'error', // to autofix (~> new-cap, unicorn/new-for-builtins)
};