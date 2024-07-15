module.exports = {
	// https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
	// This option interrupts the configuration hierarchy at this file
	// Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2022 // Allows for the parsing of modern ECMAScript features
	},

	env: {
		node: true,
		browser: true
	},

	// Rules order is important, please avoid shuffling them
	extends: [
		// Base ESLint recommended rules
		// 'eslint:recommended',

		// Uncomment any of the lines below to choose desired strictness,
		// but leave only one uncommented!
		// See https://eslint.vuejs.org/rules/#available-rules
		// 'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
		// 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
		// 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

		// https://github.com/prettier/eslint-config-prettier#installation
		// usage with Prettier, provided by 'eslint-config-prettier'.
		// 'prettier'
		// 'plugin:@typescript-eslint/recommended',
		// 'plugin:jsdoc/recommended-typescript',
		'@das.laboratory/eslint-config-interactive-ts',
		'@das.laboratory/eslint-config-interactive-next',
		'async',
		'async/node'
	],

	plugins: [
		// https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
		// required to lint *.vue files
		// 'vue'
		// https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
		// Prettier has not been included as plugin to avoid performance impact
		// add it as an extension for your IDE
		// 'simple-import-sort',
		// 'import',
		// '@typescript-eslint'
		'eslint-plugin-node'
	],
	settings: {
		jsdoc: {
			mode: 'typescript'
		}
	},
	globals: {
		ga: 'readonly', // Google Analytics
		cordova: 'readonly',
		__statics: 'readonly',
		__QUASAR_SSR__: 'readonly',
		__QUASAR_SSR_SERVER__: 'readonly',
		__QUASAR_SSR_CLIENT__: 'readonly',
		__QUASAR_SSR_PWA__: 'readonly',
		process: 'readonly',
		Capacitor: 'readonly',
		chrome: 'readonly',
		defineProps: 'readonly', // Vue SFC setup compiler macro
		defineEmits: 'readonly', // Vue SFC setup compiler macro
		defineExpose: 'readonly', // Vue SFC setup compiler macro
		$ref: 'readonly', // Vue Reactivity Transform
		$computed: 'readonly', // Vue Reactivity Transform
		$shallowRef: 'readonly', // Vue Reactivity Transform
		$customRef: 'readonly', // Vue Reactivity Transform
		$toRef: 'readonly', // Vue Reactivity Transform
		TextDecoderStream: 'readonly' // Vue Reactivity Transform
	},

	// add your custom rules here
	rules: {
		'jsdoc/check-tag-names': 'off',
		'jsdoc/require-param-type': 'off',
		'jsdoc/require-returns-type': 'off',
		'prefer-promise-reject-errors': 'off',

		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		// import related rules
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Node.js builtins. You could also generate this regex if you use a `.js` config.
					// For example: `^(${require("module").builtinModules.join("|")})(/|$)`
					[
						'^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
					],
					// Packages. `react` related packages come first.
					['^react', '^@?\\w'],
					// Internal packages.
					['^(components)(/.*|$)'],
					['^(models)(/.*|$)'],
					['^(/|@|app|assets|boot|css|js|composables|data|layouts|pages|src|stores|router|~)(/.*|$)'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.s?css$']
				]
				// default groups
				// groups: [
				// 	// Side effect imports.
				// 	['^\\u0000'],
				// 	// Packages.
				// 	// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
				// 	['^@?\\w'],
				// 	// Absolute imports and other imports such as Vue-style `@/foo`.
				// 	// Anything not matched in another group.
				// 	['^'],
				// 	// Relative imports.
				// 	// Anything that starts with a dot.
				// 	['^\\.']
				// ]
			}
		],
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',

		// Async related rules
		'no-await-in-loop': 'off',

		// TypeScript related rules
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/no-unused-vars': 'off',

		// VUE related rules
		'vue/match-component-file-name': [
			'error',
			{
				extensions: ['jsx', 'vue', 'js'],
				shouldMatchCase: true
			}
		],
		'vue/new-line-between-multi-line-property': [
			'error',
			{
				minLineOfMultilineProperty: 2
			}
		],
		'vue/require-name-property': 'error',
		// 'vue/static-class-names-order': 'error',
		'vue/component-api-style': [
			'error',
			['script-setup', 'composition'] // "script-setup", "composition", "composition-vue2", or "options"
		],
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				registeredComponentsOnly: true,
				ignores: []
			}
		],
		'vue/custom-event-name-casing': [
			'error',
			'camelCase',
			{
				ignores: []
			}
		],
		'vue/define-macros-order': [
			'error',
			{
				order: ['defineProps', 'defineEmits']
			}
		],
		'vue/html-comment-content-spacing': ['error', 'always', { exceptions: ['*'] }],
		'vue/no-boolean-default': ['error', 'default-false'],
		'vue/no-template-target-blank': [
			'error',
			{
				allowReferrer: true,
				enforceDynamicLinks: 'always'
			}
		],
		'vue/no-undef-components': [
			'error',
			{
				ignorePatterns: ['q(\\-\\w+)+', 'router-view', 'router-link']
			}
		],
		'vue/no-undef-properties': [
			'error',
			{
				ignores: ['/^\\$/']
			}
		],
		'vue/no-unused-properties': [
			'warn',
			{
				groups: ['props', 'data', 'computed', 'methods', 'setup'],
				deepData: true,
				ignorePublicMembers: false
			}
		]
		// 'vue/html-comment-indent': ['error', 'tab']
		// 'vue/html-comment-content-newline': ['error']

		// 'vue/sort-keys': [
		// 	'error',
		// 	'asc',
		// 	{
		// 		caseSensitive: true,
		// 		ignoreChildrenOf: ['model'],
		// 		ignoreGrandchildrenOf: ['computed', 'directives', 'inject', 'props', 'watch'],
		// 		minKeys: 2,
		// 		natural: false
		// 	}
		// ]
	}
};
