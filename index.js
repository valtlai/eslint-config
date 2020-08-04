'use strict';

module.exports = {
	root: true,
	ignorePatterns: ['!.*', '.git'],
	plugins: ['unicorn'],
	extends: 'eslint:recommended',
	rules: require('./rules'),
	overrides: [
		{
			files: '*.mjs',
			parserOptions: { sourceType: 'module' },
			globals: {
				module: 'off',
				exports: 'off',
				require: 'off'
			}
		}
	]
};
