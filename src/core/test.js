const emoji = require('node-emoji');
const chalk = require('chalk');

/**
 * Add test description and execute the test logic.
 * @module core/test
 */

/**
 * Handles the test logic.
 * @callback logicCallback
 * @returns {Boolean} Logic results.
 */

/**
 * @param {string} description - Test description.
 * @param {testCallback} cb - Handles the test logic.
 *
 * @returns {Boolean} Test results.
 */

const test = (description, cb) => {

  const assertResult = cb();

  if(!assertResult) {
    console.log(chalk.red(`${emoji.get('shit')}  ${description} - failed`));
    return false;
  } 

  console.log(chalk.green(`${emoji.get('green_heart')}  ${description} - passed`));
  return true;

};

module.exports = test;