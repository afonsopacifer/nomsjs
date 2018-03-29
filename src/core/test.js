const emoji = require('node-emoji');
const chalk = require('chalk');

const test = (description, cb) => {
  const assertResult = cb();

  if(!assertResult) {
    console.log(
      chalk.red(`${emoji.get('shit')}  ${description} - failed`)
    );
    return false;
  } 

  console.log(
    chalk.green(`${emoji.get('green_heart')}  ${description} - passed`)
  );

  return true;

};

module.exports = test;
