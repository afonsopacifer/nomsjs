# assert.objectEqual()

## Description
Assertion between two objects.

## Syntax

JSDocs

```js
/**
 * @param expected - The expected object for assertion.
 * @param result - The result object for assertion.
 *
 * @returns {Boolean} Assert results.
 */
```

Example

```js
const { assert } = require('nomsjs');

assert.objectEqual({a: 1, b: 2}, {a: 1, b: 2}); // True

assert.objectEqual({a: 1, b: 2}, {a: 1, b: 3}); // false
```

## Real example

```js
const { suite, test, assert } = require('nomsjs');

suite('Suite description', () => {

  test('Test 1 description', () => {

    const obj = {a: 1, b: 2};

    assert.objectEqual({a: 1, b: 2}, obj); // True

  });

});
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)
