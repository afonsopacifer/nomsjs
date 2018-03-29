const suite = require('./core/suite');
const test = require('./core/test');
const assert = require('./core/assert');

const noms = {
  suite,
  test,
  assert,
};

module.exports = noms;
