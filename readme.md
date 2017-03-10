# get-env-cli 

A command line wrapper for the npm [get-env package](https://www.npmjs.com/package/get-env),
with an option for asserting that a particular environment be set. 

## Install

```
$ npm install --global get-env-cli
```


## Usage

```
$ get-env --help

  Usage
  	  $ get-env (--assert <asserted-env>)
  	Example
  	  $ get-env
  	   -> development
  	  $ get-env --assert development
  	   -> 1
```
