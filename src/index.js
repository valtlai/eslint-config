'use strict';

module.exports = {
	root: true,
	ignorePatterns: ['!.*', '.git'],
	plugins: ['unicorn'],
	extends: 'eslint:recommended',
	rules: require('./rules')
};
