module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'jsx-a11y',
        'prettier',
        'react-hooks',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.js', '.tsx', '.ts'],
            },
        ],
        'import/prefer-default-export': 'off',
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        'react-/jsx-one-expression-per-line': 'off',
        'global-require': 'off',
        'react-native/no-raw-text': 'off',
        'no-param-reassign': 'off',
        'no_underscore-dangle': 'off',
        camelcase: 'off',
        'no-console': [
            'warn',
            {
                allow: ['tron'],
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'import/extensions': ['error', { tsx: 'never', ts: 'never' }],
        'jsx-a11y/label-has-associated-control': 0,
        'react/prop-types': ['off'],
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src',
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {},
        },
    },
};
