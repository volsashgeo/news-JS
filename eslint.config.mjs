import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        ignores: ['dist/**', 'node_modules/**', 'webpack.*.ts'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        rules: {
            'no-debugger': 'off',
            'no-console': 'off',
            'class-methods-use-this': 'off',
            '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
        },
    },
];
