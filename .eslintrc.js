module.exports = {
    extends: ['eslint:recommended', 'airbnb'],
    rules: {
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
    },
    globals: {
        document: 'readonly',
        window: 'readonly',
    },
};