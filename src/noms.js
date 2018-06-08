import chalk from 'chalk';
import figlet from 'figlet';
import emoji from 'node-emoji';
import suite from './core/suite';
import test from './core/test';
import assert from './core/asserts/assert';
import fakeWindow from './core/mocks/fakeWindow';
import normalizeString from './core/helpers/normalizeString';

/**
 * Add N.O.M.s description and expose all features.
 * 
 * @returns {object} - All methods for write and assert your tests. 
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
    fakeWindow,
  }

};

module.exports = noms();