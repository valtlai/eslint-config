'use strict';

const rules = require('./rules/node');

module.exports = {
	env: { node: true },
	extends: 'plugin:node/recommended',
	rules
};
