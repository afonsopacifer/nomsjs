const suite = require('./core/suite');
const test = require('./core/test');
const assert = require('./core/assert');

const noms = () => {
  return {
    suite: suite,
    test: test,
    assert: assert,
  }
}

module.exports = noms;
