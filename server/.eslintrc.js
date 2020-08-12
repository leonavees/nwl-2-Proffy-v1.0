module.exports = {
    env: {
        es2020: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'import/extensions': [0, { ts: 'never' }],
        'import/prefer-default-export': 'off',
        'no-useless-constructor': 'off',
        'no-return-await': 'off',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
};
