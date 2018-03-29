const chalk = require('chalk');

const suite = (description, cb) => {
  console.log(
    '\n', chalk.blue(`${description.toUpperCase()}`), '\n'
  );

  return cb();
}

module.exports = suite;
