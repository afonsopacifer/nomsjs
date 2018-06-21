# assert.isFalse()

## Description
Verify false boolean value.

## Syntax

JSDocs

```js
/**
 * @param result - The result value for assertion.
 *
 * @returns {Boolean} Assert results.
 */
```

Example

```js
const { assert } = require('nomsjs');

assert.isFalse(1); // False

assert.isFalse(0); // True
```

## Real example

```js
const { suite, test, assert } = require('nomsjs');

suite('Suite description', () => {

  test('Test 1 description', () => {
    return assert.isFalse(null); // true
  });

});
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)
