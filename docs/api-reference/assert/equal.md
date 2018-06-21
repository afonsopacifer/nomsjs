# assert.equal()

## Description
Assertion between two primitive values.

## Syntax

JSDocs

```js
/**
 * @param expected - The expected value for assertion.
 * @param result - The result value for assertion.
 *
 * @returns {Boolean} Assert results.
 */
```

Example

```js
const { assert } = require('nomsjs');

assert.equal(42, 42); // True

assert.equal(42, 40); // false
```

## Real example

```js
const { suite, test, assert } = require('nomsjs');

suite('Suite description', () => {

  test('Test 1 description', () => {
    return assert.equal(42, 42);
  });

  test('Test 2 description', () => {
    return assert.equal(42, 40);
  });

});
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)
