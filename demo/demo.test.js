const noms = require('noms')();

noms.suite('All demo tests', () => {

  noms.test('Should return a correct number', () => {
    return noms.assert(22, 22);
  });

  noms.test('Should return a correct number', () => {
    return noms.assert(22, 23);
  });

})
