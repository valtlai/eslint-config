'use strict';

module.exports = {
	// Possible Errors
	'no-console': 'warn',

	// Best Practices
	'no-alert': 'error',
	'no-script-url': 'error',

	// plugin:unicorn
	'unicorn/prefer-add-event-listener': 'error',
	'unicorn/prefer-dom-node-append': 'error',
	'unicorn/prefer-dom-node-dataset': 'error',
	'unicorn/prefer-dom-node-remove': 'error',
	'unicorn/prefer-dom-node-text-content': 'error',
	'unicorn/prefer-keyboard-event-key': 'error',
	'unicorn/prefer-modern-dom-apis': 'error',
	'unicorn/prefer-query-selector': 'error',
};
