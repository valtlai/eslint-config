'use strict';

const rules = require('./rules');

module.exports = {
	root: true,
	ignorePatterns: ['!.*', '.git'],
	plugins: ['unicorn'],
	extends: 'eslint:recommended',
	parserOptions: { ecmaVersion: 2021 },
	env: { es2021: true },
	rules
};
