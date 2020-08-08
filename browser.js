'use strict';

const rules = require('./rules/browser');

module.exports = {
	env: { browser: true },
	parserOptions: { sourceType: 'module' },
	rules
};
