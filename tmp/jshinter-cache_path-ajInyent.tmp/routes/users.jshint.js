QUnit.module('JSHint - routes');
QUnit.test('routes/users.js should pass jshint', function(assert) { 
  assert.ok(false, 'routes/users.js should pass jshint.\nroutes/users.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/users.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/users.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors'); 
});
