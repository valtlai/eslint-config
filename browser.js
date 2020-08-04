'use strict';

module.exports = {
	env: { browser: true },
	parserOptions: { sourceType: 'module' },
	rules: require('./rules/browser')
};
