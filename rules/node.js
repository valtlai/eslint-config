'use strict';

const getPackageJson = require('eslint-plugin-node/lib/util/get-package-json');
const isPrivate = (getPackageJson() || {}).private === true;

module.exports = {
	/** plugin:node **/
	'no-process-exit': 'off', // ~> unicorn/no-process-exit // @override
	// Possible Errors
	'node/handle-callback-err': ['error', '^err(?:or)?$'],
	'node/no-path-concat': 'error',
	...(isPrivate && {
		'node/no-unpublished-import': 'off', // @override
		'node/no-unpublished-require': 'off', // @override
	}),
	// Stylistic Issues
	'node/file-extension-in-import': 'error',
	'node/global-require': 'error',
	'node/no-sync': 'error',
	'node/prefer-global/buffer': 'error',
	'node/prefer-global/console': 'error',
	'node/prefer-global/process': 'error',
	'node/prefer-global/text-decoder': 'error',
	'node/prefer-global/text-encoder': 'error',
	'node/prefer-global/url-search-params': 'error',
	'node/prefer-global/url': 'error',
	'node/prefer-promises/dns': 'error',
	'node/prefer-promises/fs': 'error',

	/** plugin:unicorn **/
	'unicorn/no-new-buffer': 'error', // to autofix (~> node/no-deprecated-api)
	'unicorn/no-process-exit': 'error',
};
