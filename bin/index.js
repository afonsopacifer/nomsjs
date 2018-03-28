#!/usr/bin/env node

const fs = require('fs');
const suite = require('../src/noms')().suite;
const test = require('../src/noms')().test;
const assert = require('../src/noms')().assert;
const emoji = require('node-emoji');
const colors = require('../src/helpers/consoleColors')();

const inputPath = process.argv[2];

fs.readFile(inputPath, 'utf8', (err, code) => {

  if (err) {
    console.log(`No such file or directory in ${inputPath}`);
  }

  const welcome = "\n---------------------------------\nN.O.M.s - Unit tests for witches\n---------------------------------";
  console.log(colors.magenta, welcome);

  eval(code);

  console.log('\n');

});
