'use strict';

module.exports = {
	// Possible Errors
	'no-await-in-loop': 'error',
	'no-console': 'off', // b
	'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }], // @override
	'no-extra-parens': 'off', // ! (expect for arrow function body)
	'no-irregular-whitespace': ['error', { skipStrings: false }], // @override
	'no-loss-of-precision': 'error',
	'no-promise-executor-return': 'error', // (= array-callback-return)
	'no-template-curly-in-string': 'error',
	'no-unreachable-loop': 'error',
	'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
	'no-useless-backreference': 'error',
	'require-atomic-updates': 'error',
	'use-isnan': ['error', { enforceForIndexOf: true }], // @override

	// Best Practices
	'accessor-pairs': 'error',
	'array-callback-return': 'error', // (= no-promise-executor-return)
	'block-scoped-var': 'off', // ~> no-var
	'class-methods-use-this': 'error',
	'complexity': 'off',
	'consistent-return': 'off', // !
	'curly': 'off', // !
	'default-case': 'error',
	'default-case-last': 'error',
	'default-param-last': 'error',
	'dot-location': ['error', 'property'],
	'dot-notation': 'off', // !
	'eqeqeq': ['error', 'smart'],
	'grouped-accessor-pairs': ['error', 'getBeforeSet'],
	'guard-for-in': 'error',
	'max-classes-per-file': 'off', // !
	'no-alert': 'off', // b
	'no-caller': 'error',
	'no-constructor-return': 'error',
	'no-div-regex': 'off',
	'no-else-return': 'off', // !
	'no-empty-function': 'error',
	'no-eq-null': 'off',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-label': 'off', // ~> no-labels
	'no-floating-decimal': 'error',
	'no-implicit-coercion': 'off', // !
	'no-implicit-globals': 'off', // !
	'no-implied-eval': 'error',
	'no-invalid-this': 'error',
	'no-iterator': 'error',
	'no-labels': 'error',
	'no-lone-blocks': 'error',
	'no-loop-func': 'error',
	'no-magic-numbers': 'off', // !
	'no-multi-spaces': 'error',
	'no-multi-str': 'error',
	'no-new': 'error',
	'no-new-func': 'error',
	'no-new-wrappers': 'off', // ~> unicorn/new-for-builtins
	'no-nonoctal-decimal-escape': 'error',
	'no-octal-escape': 'off', // 'use strict'; // TODO: alle ”!”
	'no-param-reassign': 'error',
	'no-proto': 'error',
	'no-restricted-properties': 'off',
	'no-return-assign': ['error', 'always'],
	'no-return-await': 'error',
	'no-script-url': 'off', // b
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-throw-literal': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unused-expressions': 'error',
	'no-useless-call': 'error',
	'no-useless-concat': 'off', // !
	'no-useless-return': 'error',
	'no-void': 'error',
	'no-warning-comments': 'warn',
	'prefer-named-capture-group': 'off', // !
	'prefer-promise-reject-errors': 'error',
	'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
	'radix': 'error',
	'require-await': 'error',
	'require-unicode-regexp': 'error',
	'vars-on-top': 'off', // ~> no-var
	'wrap-iife': ['error', 'inside'],
	'yoda': 'error',

	// Strict Mode
	'strict': ['error', 'global'],

	// Variables
	'init-declarations': 'off',
	'no-label-var': 'off', // ~> no-labels
	'no-restricted-globals': 'off',
	'no-shadow': 'off', // !
	'no-undef-init': 'error',
	'no-undefined': 'off', // !
	'no-use-before-define': 'error',

	// Stylistic Issues
	'array-bracket-newline': 'off', // !
	'array-bracket-spacing': 'error',
	'array-element-newline': 'off', // !
	'block-spacing': 'error',
	'brace-style': ['error', '1tbs', { allowSingleLine: true }],
	'camelcase': 'off',
	'capitalized-comments': 'off',
	'comma-dangle': ['error', 'only-multiline'],
	'comma-spacing': 'error',
	'comma-style': 'error',
	'computed-property-spacing': 'error',
	'consistent-this': 'off',
	'eol-last': 'error',
	'func-call-spacing': 'error',
	'func-name-matching': 'off',
	'func-names': 'off',
	'func-style': 'off',
	'function-call-argument-newline': 'off',
	'function-paren-newline': 'off', // !
	'id-denylist': 'off',
	'id-length': 'off',
	'id-match': 'off', // !
	'implicit-arrow-linebreak': 'error',
	'indent': ['error', 'tab', { SwitchCase: 1 }],
	'jsx-quotes': 'off', // !
	'key-spacing': ['error', { multiLine: { mode: 'minimum' } }],
	'keyword-spacing': 'error',
	'line-comment-position': 'off',
	'linebreak-style': 'off', // !
	'lines-around-comment': 'off', // !
	'lines-between-class-members': 'off',
	'max-depth': 'off', // !
	'max-len': 'off',
	'max-lines': 'off',
	'max-lines-per-function': 'off',
	'max-nested-callbacks': 'off',
	'max-params': 'off',
	'max-statements': 'off',
	'max-statements-per-line': 'error',
	'multiline-comment-style': 'off',
	'multiline-ternary': 'off', // !
	'new-cap': 'error',
	'new-parens': 'error',
	'newline-per-chained-call': 'off', // !
	'no-array-constructor': 'error',
	'no-bitwise': 'off', // !
	'no-continue': 'off',
	'no-inline-comments': 'off',
	'no-lonely-if': 'error',
	'no-mixed-operators': 'error',
	'no-multi-assign': 'error',
	'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
	'no-negated-condition': 'error',
	'no-nested-ternary': 'off', // ~> unicorn/no-nested-ternary
	'no-new-object': 'error',
	'no-plusplus': 'off',
	'no-restricted-syntax': 'off',
	'no-tabs': ['error', { allowIndentationTabs: true }],
	'no-ternary': 'off',
	'no-trailing-spaces': 'error',
	'no-underscore-dangle': ['error', { allowFunctionParams: false }],
	'no-unneeded-ternary': ['error', { defaultAssignment: false }],
	'no-whitespace-before-property': 'error',
	'nonblock-statement-body-position': 'error',
	'object-curly-newline': 'off', // !
	'object-curly-spacing': ['error', 'always'],
	'object-property-newline': 'off', // !
	'one-var': ['error', { initialized: 'never' }],
	'one-var-declaration-per-line': 'off',
	'operator-assignment': 'error',
	'operator-linebreak': 'off', // !
	'padded-blocks': ['error', 'never'],
	'padding-line-between-statements': 'off', // !
	'prefer-exponentiation-operator': 'error',
	'prefer-object-spread': 'error',
	'quote-props': ['error', 'consistent-as-needed'],
	'quotes': ['error', 'single', { avoidEscape: true }],
	'semi': 'error',
	'semi-spacing': 'error',
	'semi-style': 'error',
	'sort-keys': 'off',
	'sort-vars': 'off',
	'space-before-blocks': 'error',
	'space-before-function-paren': 'error',
	'space-in-parens': 'error',
	'space-infix-ops': 'error',
	'space-unary-ops': 'error',
	'spaced-comment': ['error', 'always', { block: { exceptions: ['*'], balanced: true } }],
	'switch-colon-spacing': 'error',
	'template-tag-spacing': 'error',
	'unicode-bom': 'error',
	'wrap-regex': 'off',

	// ECMAScript 6
	'arrow-body-style': 'off', // !
	'arrow-parens': 'off', // !
	'arrow-spacing': 'error',
	'generator-star-spacing': 'off', // !
	'no-confusing-arrow': 'off', // !
	'no-duplicate-imports': 'error',
	'no-new-symbol': 'off', // ~> unicorn/new-for-builtins // @override
	'no-restricted-exports': 'off',
	'no-restricted-imports': 'off',
	'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
	'no-useless-constructor': 'error',
	'no-useless-rename': 'error',
	'no-var': 'error',
	'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
	'prefer-arrow-callback': 'off', // !
	'prefer-const': 'error',
	'prefer-destructuring': 'off',
	'prefer-numeric-literals': 'error',
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'off',
	'rest-spread-spacing': 'error',
	'sort-imports': 'off',
	'symbol-description': 'off', // !
	'template-curly-spacing': 'error',
	'yield-star-spacing': 'off', // !

	// plugin:unicorn
	'unicorn/better-regex': ['error', { sortCharacterClasses: false }],
	'unicorn/catch-error-name': 'error',
	'unicorn/consistent-destructuring': 'error',
	'unicorn/consistent-function-scoping': 'error',
	'unicorn/custom-error-definition': 'error',
	'unicorn/empty-brace-spaces': 'error',
	'unicorn/error-message': 'error',
	'unicorn/escape-case': 'error',
	'unicorn/expiring-todo-comments': 'off',
	'unicorn/explicit-length-check': 'off',
	'unicorn/filename-case': 'error',
	'unicorn/import-index': ['error', { ignoreImports: true }],
	'unicorn/import-style': 'off', // !
	'unicorn/new-for-builtins': 'error',
	'unicorn/no-abusive-eslint-disable': 'error',
	'unicorn/no-array-callback-reference': 'off',
	'unicorn/no-array-for-each': 'off',
	'unicorn/no-array-push-push': 'error',
	'unicorn/no-array-reduce': 'off', // !
	'unicorn/no-console-spaces': 'error',
	'unicorn/no-for-loop': 'error',
	'unicorn/no-hex-escape': 'off', // TODO: \xNN \uNNNN \u{NNNNN+}
	'unicorn/no-instanceof-array': 'error',
	'unicorn/no-keyword-prefix': 'off',
	'unicorn/no-lonely-if': 'error',
	'unicorn/no-nested-ternary': 'error',
	'unicorn/no-new-array': 'error',
	'unicorn/no-new-buffer': 'off', // node
	'unicorn/no-null': 'off', // !
	'unicorn/no-object-as-default-parameter': 'error',
	'unicorn/no-process-exit': 'off', // node
	'unicorn/no-this-assignment': 'error',
	'unicorn/no-unreadable-array-destructuring': 'off', // !
	'unicorn/no-unsafe-regex': 'error',
	'unicorn/no-unused-properties': 'error',
	'unicorn/no-useless-undefined': 'off', // conflicts array-callback-return & prefer-const, disable no-undef-init
	'unicorn/no-zero-fractions': 'error',
	'unicorn/number-literal-case': 'error',
	'unicorn/numeric-separators-style': 'error',
	'unicorn/prefer-add-event-listener': 'off', // b
	'unicorn/prefer-array-find': 'error',
	'unicorn/prefer-array-flat-map': 'error',
	'unicorn/prefer-array-index-of': 'error',
	'unicorn/prefer-array-some': 'error',
	'unicorn/prefer-date-now': 'error',
	'unicorn/prefer-default-parameters': 'error',
	'unicorn/prefer-dom-node-append': 'off', // b
	'unicorn/prefer-dom-node-dataset': 'off', // b
	'unicorn/prefer-dom-node-remove': 'off', // b
	'unicorn/prefer-dom-node-text-content': 'off', // b
	'unicorn/prefer-includes': 'error',
	'unicorn/prefer-keyboard-event-key': 'off', // b
	'unicorn/prefer-math-trunc': 'error',
	'unicorn/prefer-modern-dom-apis': 'off', // b
	'unicorn/prefer-negative-index': 'error',
	'unicorn/prefer-number-properties': 'error',
	'unicorn/prefer-optional-catch-binding': 'error',
	'unicorn/prefer-query-selector': 'off', // b
	'unicorn/prefer-reflect-apply': 'error',
	'unicorn/prefer-regexp-test': 'error',
	'unicorn/prefer-set-has': 'off', // !
	'unicorn/prefer-spread': 'error',
	'unicorn/prefer-string-replace-all': 'off', // not supported yet
	'unicorn/prefer-string-slice': 'error',
	'unicorn/prefer-string-starts-ends-with': 'error',
	'unicorn/prefer-string-trim-start-end': 'error',
	'unicorn/prefer-ternary': 'error',
	'unicorn/prefer-type-error': 'error',
	'unicorn/prevent-abbreviations': 'off', // !
	'unicorn/string-content': 'off',
	'unicorn/throw-new-error': 'error', // to autofix (~> new-cap, unicorn/new-for-builtins)
};
