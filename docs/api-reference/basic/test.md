# test()

## Description
Add test description and execute the test logic.

## Syntax

JSDocs

```js
/**
 * @param {string} description - Test description.
 * @param {testCallback} cb - Handles the test logic.
 *
 * @returns {Boolean} Test results.
 */
```

Example

```js
const { test } = require('nomsjs');

test('Test description', () => {
  // Test logic
});
```

## Real example

```js
const { test, assert } = require('nomsjs');

test('Test description', () => {

  const sum = (x, y) => x + y;

  assert.equal(42, sum(40, 1));

});
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)
