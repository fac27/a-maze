module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'plugin:import/errors',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'react-minimal',
        'kentcdodds',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'import', 'react'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'react/style-prop-object': 'warn',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-no-undef': 'warn',
    },
}
