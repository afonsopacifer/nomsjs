# assert.isTrue()

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

assert.isTrue(1); // True

assert.isTrue(0); // False
```

## Real example

```js
const { suite, test, assert } = require('nomsjs');

suite('Suite description', () => {

  test('Test 1 description', () => {
    assert.isTrue('hello'); // true
  });

});
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)
