'use strict';

const { parserOptions: { ecmaVersion } } = require('.');
const rules = require('./rules/node');

module.exports = {
	env: { node: true },
	extends: 'plugin:node/recommended',
	parserOptions: { ecmaVersion },
	rules
};
