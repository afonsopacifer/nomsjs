#!/usr/bin/env node

const fs = require('fs');
const emoji = require('node-emoji');
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

const Noms = require('../src/noms');
const suite = Noms.suite;
const test = Noms.test;
const assert = Noms.assert;

const inputPath = process.argv[2];

fs.readFile(inputPath, 'utf8', (err, code) => {

  clear();

  console.log(
    chalk.red(figlet.textSync('N.O.M.s', { horizontalLayout: 'full'}))
  );

  if (err) {
    console.log(
      chalk.red(`${emoji.get('thinking_face')} No such file or directory in ${inputPath} ${emoji.get('thinking_face')}`)
    );
  }

  eval(code);

  console.log('\n');
});
