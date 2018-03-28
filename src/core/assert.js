const assert = (expected, value) => {
  if (expected === value) {
    return true;
  } else {
    return false;
  }
};

module.exports = assert;
