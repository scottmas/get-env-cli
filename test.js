const execa = require('execa');
const env = require('get-env')();
const assert = require('assert');

it('asserts env', function(){
  return execa.shell('node ./cli.js --assert ' + env, {cwd: __dirname}).then(() => {
    assert(false)
  }, e => {
    assert(e)
  })
});

it('prints env', function(){
  return execa.shell('node ./cli.js', {cwd: __dirname}).then((result) => {
    assert.equal(result.stdout, env);
  })
});