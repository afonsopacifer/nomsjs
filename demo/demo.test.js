const { suite, test, assert, normalizeString } = require('../src/index.js');

suite('All demo tests', () => {

  test('Should return a correct number', () => {
    return assert(22, 22); // passed
  });

  test('Should return a correct number', () => {
    return assert(22, 23); // failed
  });

  test('Should return a correct string', () => {

    const expect = `TextForDemoTest`;

    const text = `
      Text For
      Demo Test
    `;

    const result = normalizeString(text);

    return assert(expect, result); // passed

  });

});