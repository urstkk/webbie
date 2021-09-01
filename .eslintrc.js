module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory.
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React.
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version.
    },
    'mocha/additionalCustomNames': [
      { 'name': 'describeModule', 'type': 'suite', 'interfaces': [ 'BDD' ] },
      { 'name': 'testModule', 'type': 'testCase', 'interfaces': [ 'TDD' ] }
  ]
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    'cypress/globals': true
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'simple-import-sort',
    'prettier',
    'mocha',
    'cypress',
    'chai-friendly'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto',}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off', // NextJS does not required React to be in scope always.
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars' : 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ], // NextJS wraps anchor around Link tag which will raise error. So disabling them.
    'simple-import-sort/imports': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-exclusive-tests': 'error',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  }
};
