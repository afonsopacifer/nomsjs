# fakeWindow

## Description

A fake DOM (mock window object).

## Table of contents

- [Syntax](#Syntax)
- [API](#API)
  - [document.createElement](#document.createElement)
  - [element.nodeName](#element.nodeName)
  - [element.classList.add](#element.classList.add)
  - [element.className](#element.className)
  - [element.style.cssText](#element.style.cssText)
- [Real example](#Real-example)

## Syntax

Example

```js
const { fakeWindow } = require('nomsjs');

const div = fakeWindow.document.createElement('div'); // Fake DIV element
```

## API

#### document.createElement()

```js
const element = fakeWindow.document.createElement('div'); // Fake DIV element
```

#### element.nodeName

```js
element.nodeName // DIV
```

#### element.classList.add()

```js
element.classList.add('fancy') // Add new class
```

#### element.className

```js
element.className // Return an Array with all class
```

#### element.style.cssText

```js
element.style.cssText // Return the correct CSS inline styles text
```

## Real example

```js
const { test, assert, fakeWindow } = require('nomsjs');

  test('Test 1 description', () => {

    const createElement = (name, context) => {
      return context.document.createElement(name);
    }

    return assert.equal('P', createElement('p', fakeWindow)); // true

  });
```

[<-- Back](https://github.com/afonsopacifer/nomsjs/blob/master/README.md)