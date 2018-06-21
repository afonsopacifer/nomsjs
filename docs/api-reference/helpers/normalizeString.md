# normalizeString()

## Description
Normalize (remove white spaces and break lines) strings.

## Syntax

JSDocs

```js
/**
 * @param {string} string - The string for normalize.
 *
 * @returns {string} A normalized string (Removed white spaces and break lines).
 */
```

Example

```js
const { normalizeString } = require('nomsjs');

normalizeString('ex  ample Test'); // exampleTest
```

## Real example

```js
const { suite, test, assert, normalizeString } = require('nomsjs');

suite('Suite description', () => {

  test('Test 1 description', () => {

    const cleanString = normalizeString('demo tes t');

    return assert.equal('demotest', cleanString); // true

  });

});
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)