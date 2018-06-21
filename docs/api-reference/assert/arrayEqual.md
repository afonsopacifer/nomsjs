# assert.arrayEqual()

## Description
Assertion between two arrays.

## Syntax

JSDocs

```js
/**
 * @param expected - The expected array for assertion.
 * @param result - The result array for assertion.
 *
 * @returns {Boolean} Assert results.
 */
```

Example

```js
const { assert } = require('nomsjs');

assert.arrayEqual([1,2], [1,2]); // True

assert.arrayEqual(['a', 'b'], ['a', 'c']); // false
```

## Real example

```js
const { suite, test, assert } = require('nomsjs');

suite('Suite description', () => {

  test('Test 1 description', () => {

		const arr = ['a', 'b', 'd'];

		return assert.arrayEqual(['a', 'b', 'c'], arr);

  });

});
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)
