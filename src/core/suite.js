import chalk from 'chalk';

/**
 * Add suite description and execute all unit tests.
 * @module core/suite
 */

/**
 * The unit test.
 * @callback testCallback
 * @param {string} description - Test description.
 * @param {logicCallback} cb - The callback that handles the test logic.
 */

/**
 * @param {string} description - Suite description.
 * @param {testCallback} test - The unit test.
 *
 * @returns {testCallback} The unit test.
 */

const suite = (description, test) => {
  console.log('\n', chalk.blue(`${description.toUpperCase()}`), '\n');
  return test();
}

export default suite;