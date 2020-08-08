'use strict';

const rules = require('./rules');

module.exports = {
	root: true,
	ignorePatterns: ['!.*', '.git'],
	plugins: ['unicorn'],
	extends: 'eslint:recommended',
	rules
};
