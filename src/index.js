'use strict';

module.exports = {
	root: true,
	ignorePatterns: ['!.*', '.git'],
	extends: 'eslint:recommended',
	rules: require('./rules')
};
