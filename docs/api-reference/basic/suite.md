# suite()

## Description
Add suite description and execute all unit tests.

## Syntax

JSDocs

```js
/**
 * @param {string} description - Suite description.
 * @param {testCallback} test - The unit test.
 *
 * @returns {testCallback} The unit test.
 */
```

Example

```js
const { suite } = require('nomsjs');

suite('Suite description', () => {
  // All unit tests
});
```

## Real example

```js
const { suite, test, assert } = require('nomsjs');

suite('Suite description', () => {

  test('Test 1 description', () => {
    assert.equal(42, 42);
  });

  test('Test 2 description', () => {
    assert.equal(42, 40);
  });

});
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)
