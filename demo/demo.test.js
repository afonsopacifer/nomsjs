const { suite, test, assert } = require('../src/noms.js');

suite('All demo tests', () => {

  test('Should return a correct number', () => {
    return assert(22, 22);
  });

  test('Should return a correct number', () => {
    return assert(22, 23);
  });

});