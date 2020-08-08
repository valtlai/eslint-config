'use strict';

module.exports = {
	env: { node: true },
	rules: require('./rules/node'),
	overrides: [
		{
			files: '*.mjs',
			parserOptions: { sourceType: 'module' },
			globals: {
				module: 'off',
				exports: 'off',
				require: 'off'
			}
		},
		{
			files: 'gulpfile.mjs',
			rules: { 'require-await': 'off' }
		}
	]
};
