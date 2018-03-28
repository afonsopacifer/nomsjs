const emoji = require('node-emoji');
const colors = require('../helpers/consoleColors')();

const test = (description, cb) => {

  const assertResult = cb();

  if(assertResult) {
    console.log(colors.green, `${emoji.get('green_heart')}  ${description} - passed`)
    return true;
  } else {
    console.log(colors.red, `${emoji.get('shit')}  ${description} - failed`)
    return false;
  }

};

module.exports = test;
