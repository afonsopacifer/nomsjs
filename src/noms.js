import chalk from 'chalk';
import figlet from 'figlet';
import emoji from 'node-emoji';
import suite from './core/suite';
import test from './core/test';
import assert from './core/assert';
import normalizeString from './core/normalizeString';

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
    normalizeString,
  }

};

module.exports = noms();