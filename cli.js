#!/usr/bin/env node
'use strict';
const meow = require('meow');
const env = require('get-env')();

const mapping = {
  dev: 'development',
  test: 'testing',
  prod: 'production'
};

const cli = meow(`
	Usage
	  $ get-env (--assert <asserted-env>)
	Example
	  $ echo \${get-env} # prints the node-env
	  $ get-env --assert development && npm run dev-only-task # asserts the NODE_ENV equals the value
`);

if (cli.flags && typeof cli.flags.assert === 'string') {
  process.exit(
    (mapping[env] || env) === (mapping[cli.flags.assert] || cli.flags.assert) ? 0 : 1
  );
} else{
  console.log(env);
  process.exit(0)
}

