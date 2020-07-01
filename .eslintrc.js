module.exports = {
    extends: [
        'plugin:vue/recommended',
        'airbnb-base',
        'prettier'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        ecmaFeatures: {
            impliedStrict: true,
            classes: true
        }
    },
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true
    },
    globals: {
        describe: false,
        it: false,
        expect: false
    },
    rules: {
        indent: ['error', 4, {
            ignoredNodes: ['TemplateLiteral']
        }],
        camelcase: [
            'error',
            {
                properties: 'never'
            }
        ],
        semi: ['warn', 'always'],
        'max-params': ['warn', 5],
        'max-depth': ['warn', 4],
        'max-statements': ['warn', 20],
        'linebreak-style': ['warn', 'unix'],
        'class-methods-use-this': 'off',
        'comma-style': ['warn', 'last'],
        'no-mixed-spaces-and-tabs': ['warn'],
        'no-prototype-builtins': 'off',

        'no-return-assign': [
            'error',
            'except-parens'
        ],
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement'
        ],
        'no-unused-vars': [
            'error',
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            }
        ],
        'arrow-body-style': [
            'error',
            'as-needed'
        ],
        'no-unused-expressions': [
            'error',
            {
                allowTaggedTemplates: true
            }
        ],
        'no-param-reassign': [
            'error',
            {
                props: false
            }
        ],
        'max-len': [
            'error',
            {
                code: 120,
                comments: 80,
                tabWidth: 4
            }
        ],
        'no-shadow': [
            'error',
            {
                hoist: 'all',
                allow: [
                    'resolve',
                    'reject',
                    'done',
                    'next',
                    'err',
                    'error'
                ]
            }
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        'import/prefer-default-export': 'off',
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 80,
            }
        ],
        'vars-on-top': 'error',
        'vue/max-attributes-per-line': 'error',
        'vue/require-default-prop': 'error',
        'vue/singleline-html-element-content-newline': 'error',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: false,
                ignores: []
            }
        ],
        'valid-jsdoc': [
            'error',
            {
                prefer: {
                    arg: 'param',
                    argument: 'param',
                    class: 'constructor',
                    return: 'return',
                    virtual: 'abstract'
                },
                preferType: {
                    Boolean: 'boolean',
                    Number: 'number',
                    Object: 'object',
                    String: 'string'
                },
                requireReturn: false,
                matchDescription: '.+',
                requireParamDescription: false,
                requireReturnDescription: false
            }
        ]
    },
    plugins: [
        'html',
        'prettier'
    ]
}
