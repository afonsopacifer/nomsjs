const { suite, test, assert } = require('../src/index.js');

suite('All demo tests', () => {

  test('Should return a correct number', () => {
    return assert(22, 22); // passed
  });

  test('Should return a correct number', () => {
    return assert(22, 23); // failed
  });

});