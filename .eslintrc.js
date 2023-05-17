module.exports = {
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        jest: {
            version: 'latest',
        },
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard',
        'plugin:jest/recommended',
        'eslint-config-prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'quote-props': ['error', 'as-needed'],
        'no-multiple-empty-lines': 'error',
        'max-len': ['error', { code: 140 }],
        'import/export': 0,
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        'react/jsx-props-no-spreading': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/react-in-jsx-scope': 'off',
    },
};