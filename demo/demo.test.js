const { suite, test, assert, normalizeString } = require('../src/index.js');

suite('All demo tests', () => {

  test('Should return a correct number', () => {
    return assert.equal(22, 22); // passed
  });

  test('Should return a correct number', () => {
    return assert.equal(22, 23); // failed
  });

  test('Should return a correct string', () => {

    const expect = `TextForDemoTest`;

    const text = `
      Text For
      Demo Test
    `;

    const result = normalizeString(text);

    return assert.equal(expect, result); // passed

  });

  test('Should return a true value', () => {

    const result = 1;

    return assert.isTrue(result); // passed

  });

  test('Should return a false value', () => {

    const result = 0;

    return assert.isFalse(result); // passed

  });

  // test('Should return a correct array', () => {

  //   const expect = ['a','b',3,'e'];
  //   const result = ['a','b',3,'e'];

  //   return assert.arrayEqual(expect, result); // passed

  // });

  // test('Should return a correct array', () => {

  //   const expect = ['a','b',3,'d'];
  //   const result = ['a','b',3,'e'];

  //   return assert.arrayEqual(expect, result); // failed

  // });

  // test('Should return a deep correct array', () => {

  //   const expect = ['a',[1,2,3],'b'];
    
  //   const result = ['a',[1,2,3],'b'];

  //   return assert.arrayEqual(expect, result); // failed

  // });

});