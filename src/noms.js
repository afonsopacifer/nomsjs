const chalk = require('chalk');
const figlet = require('figlet');
const emoji = require('node-emoji');
const suite = require('./core/suite');
const test = require('./core/test');
const assert = require('./core/assert');

/**
 * Add N.O.M.s description and execute all suites tests.
 * 
 * @returns {object} - All methods for write you tests. 
 *
 */

const noms = () => {

  const welcome = figlet.textSync('N.O.M.s', { horizontalLayout: 'full'});
  console.log(chalk.yellow(welcome));
  console.log(chalk.gray(`${emoji.get('zap')}  Unit tests for witches.${emoji.get('zap')}`));

  return {
    suite,
    test,
    assert,
  }

};

module.exports = noms();