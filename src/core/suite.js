const colors = require('../helpers/consoleColors')();

const suite = (description, cb) => {
  console.log(colors.blue, `\n${description.toUpperCase()}\n`);
  return cb();
}

module.exports = suite;
