import js from '@eslint/js';
import globals from 'globals';

const unsafeHtml = [
  {
    selector: "AssignmentExpression[left.property.name=/^(innerHTML|outerHTML)$/]",
    message: 'Assigning HTML strings is an XSS risk. Build elements with h() from lib/dom.js instead.',
  },
  {
    selector: "CallExpression[callee.property.name=/^(insertAdjacentHTML|write|writeln)$/]",
    message: 'Writing HTML strings is an XSS risk. Build elements with h() from lib/dom.js instead.',
  },
  {
    selector: "Identifier[name='dangerouslySetInnerHTML']",
    message: 'Unescaped HTML is not allowed.',
  },
];

export default [
  { ignores: ['node_modules/**', 'coverage/**', 'data/**', 'backups/**'] },
  js.configs.recommended,
  {
    rules: {
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'warn',
      'no-empty': ['error', { allowEmptyCatch: false }],
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-debugger': 'error',
      // Style findings that cannot break the app are warnings, so they never trigger a minutes-long repair round. Real errors
      // (syntax, undefined names, unsafe HTML, == comparisons) still fail the gate.
      'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }],
      'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    },
  },
  {
    files: ['public/**/*.js'],
    languageOptions: { sourceType: 'module', globals: globals.browser },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-restricted-syntax': ['error', ...unsafeHtml],
    },
  },
  {
    files: ['**/*.js'],
    ignores: ['public/**'],
    languageOptions: { sourceType: 'module', globals: globals.node },
  },
];
