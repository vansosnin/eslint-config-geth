module.exports = {
    'parser': 'babel-eslint',
    'ecmaFeatures': {
        'jsx': true
    },
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        'commonjs': true,
        'mocha': true,
        'jquery': true
    },
    'rules': {
        // global
        'linebreak-style': [1, 'unix'],
        'eqeqeq': [2, 'allow-null'],
        'no-cond-assign': 2,
        'constructor-super': 2,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-delete-var': 2,
        'no-dupe-args': 2,
        'no-dupe-class-members': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty-pattern': 2,
        'no-eval': 2,
        'no-ex-assign': 2,
        'no-extra-bind': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-implied-eval': 2,
        'no-invalid-regexp': 2,
        'no-regex-spaces': 2,
        'no-label-var': 2,
        'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }],
        'no-lone-blocks': 1,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-return-assign': [2, 'except-parens'],
        'no-self-compare': 2,
        'no-sparse-arrays': 2,
        'no-this-before-super': 2,
        'no-throw-literal': 2,
        'no-unexpected-multiline': 2,
        'no-unneeded-ternary': [1, { 'defaultAssignment': true }],
        'no-unreachable': 2,
        'no-useless-call': 2,
        'no-useless-constructor': 2,
        'no-with': 2,
        'template-curly-spacing': [2, 'never'],
        'use-isnan': 2,
        'valid-typeof': 2,
        'wrap-iife': [2, 'any'],
        'yield-star-spacing': [2, 'after'],
        'yoda': [1, 'never'],
        'no-empty': 1,

        // variables
        'id-length': [2, {'min': 1}],
        'no-param-reassign': [2, {'props': false}],
        'no-redeclare': 2,
        'no-self-assign': 2,
        'no-shadow-restricted-names': 2,
        'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
        'one-var': [1, { 'initialized': 'never' }],

        // codestyle
        'quotes': [1, 'single', {
			allowTemplateLiterals: true
		}],
        'indent': [1, 4, { 'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 2 }, 'SwitchCase': 1 }],
        'max-len': [1, 160, 4, { 'ignoreComments': true, 'ignoreUrls': true }],
        'arrow-spacing': [1, { 'before': true, 'after': true }],
        'block-spacing': [1, 'always'],
        'brace-style': [1, '1tbs', { 'allowSingleLine': true }],
        'comma-spacing': [1, { 'before': false, 'after': true }],
        'comma-style': [1, 'last'],
        'curly': [1, 'multi-line'],
        'dot-location': [1, 'property'],
        'jsx-quotes': [1, 'prefer-double'],
        'key-spacing': [1, { 'beforeColon': false, 'afterColon': true }],
        'keyword-spacing': [1, { 'before': true, 'after': true }],
        'no-mixed-spaces-and-tabs': 1,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-multiple-empty-lines': [2, { 'max': 2 }],
        'no-spaced-func': 2,
        'no-trailing-spaces': 1,
        'operator-linebreak': [1, 'before', { 'overrides': { '+': 'after', '=': 'after' } }],
        'padded-blocks': [1, 'never'],
        'semi': 0, // Отключено потому что отрабатывает не так как мы хотим в jsx и стрелочных функциях
        'semi-spacing': [1, { 'before': false, 'after': true }],
        'space-before-blocks': [1, 'always'],
        'space-before-function-paren': [1, 'never'],
        'space-in-parens': [1, 'never'],
        'space-infix-ops': 1,
        'space-unary-ops': [1, { 'words': true, 'nonwords': false }],
        'spaced-comment': [1, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],

        // typos
        'no-extra-semi': 2,
        'comma-dangle': [2, 'never'],

        // debugging info
        'no-alert': 2,
        'no-console': 2,
        'no-debugger': 2,
        'no-undef': 2,

        // nodejs
        'no-path-concat': 2,
        'no-new-require': 2,

        // react
        'react/prop-types': 1,
        'react/no-direct-mutation-state': 2,
        'react/no-is-mounted': 2,
        'react/no-unknown-property': 2,
        'react/no-children-prop': 2,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 1,
        'react/no-render-return-value': 2,
        'react/no-string-refs': 2,
        'react/no-unescaped-entities': 2,
        'react/require-render-return': 2,
        'react/no-array-index-key': 1,
        'react/no-multi-comp': 1,
        'react/no-unused-prop-types': 1,
        'react/prefer-es6-class': [2, 'always'],
        'react/require-default-props': 0,
        'react/self-closing-comp': [1, {
            'component': true,
            'html': true
        }],
        'react/void-dom-elements-no-children': 2,
        'react/sort-comp': [1, {
            order: [
                'static-methods',
                'lifecycle',
                'handlers',
                'everything-else',
                'render'
            ],
            groups: {
                lifecycle: [
                    'propTypes',
                    'defaultProps',
                    'state',
                    'displayName',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount'
                ],
                handlers: [
                    '/^_?on.+$/',
                    '/^_?handle.+$/'
                ]
            }
        }],

        // react-jsx
        'react/jsx-boolean-value': [2, 'always'],
        'react/jsx-indent': [1, 4],
        'react/jsx-no-duplicate-props': [2, { 'ignoreCase': false }],
        'react/jsx-no-undef': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-key': 2,
        'react/jsx-no-target-blank': 2,
        'react/jsx-curly-spacing': [1, 'always', {
            'allowMultiline': true,
            'spacing': {
                'objectLiterals': 'always'
            }
        }],
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-filename-extension': [1, { 'extensions': ['.jsx'] }],
        'react/jsx-first-prop-new-line': [1, 'multiline'],
        'react/jsx-handler-names': [1, {
            'eventHandlerPrefix': '_handle',
            'eventHandlerPropPrefix': 'on'
        }],
        'react/jsx-no-bind': [2, {
            'ignoreRefs': true // todo: повод задуматься
        }],
        'react/jsx-pascal-case': [1, {
            'allowAllCaps': false
        }],
        'react/jsx-space-before-closing': [1, 'always'],
        'react/jsx-tag-spacing': {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never'
        },
        'react/jsx-wrap-multilines': 1,

        // jsx-a11y
        'jsx-a11y/alt-text': 1,
        'jsx-a11y/img-redundant-alt': 1,
        'jsx-a11y/href-no-hash': [1, {
            'components': ['Link']
        }],
        'tabindex-no-positive': 1,

        // tests
        'mocha/no-exclusive-tests': 2,
        'chai-expect/missing-assertion': 2,
        'chai-expect/terminating-properties': 1,
        'promise/param-names': 2,
        'immutable/no-mutation': 0
    },
    'globals': {
        '_': true,
        'Base': true,
        'Popup': true,
        'Loader': true,
        'Informer': true,
        'InformerType': true,
        'IconType': true,
        'ProxyBase': true,
        'TweenLite': true,
        'Power2': true,
        'Dropdown': true,
        'LoaderInterface': true,
        'SubmitButtonControl': true,
        'React': true,
        'GaEventHelper': true,
        'GuidFactory': true
    },
    'plugins': [
        'react',
        'jsx-a11y',
        'babel',
        'promise',
        'mocha',
        'chai-expect',
        'no-empty-blocks'
    ]
};
