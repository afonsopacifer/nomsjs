# N.O.M.s

> Unit tests for witches.

## How to install

Verify if you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

### Command Line

```sh
$ yarn global add nomsjs
```

### Module

```sh
$ yarn add nomsjs
```

<hr>

## Command Line Usage

*Create your test file*

```js
// demo.test.js

suite('All demo tests', () => {

  test('Should return a correct number', () => {
    return assert(22, 22);
  });


  test('Should return a correct number', () => {
    return assert(22, 23);
  });

})
```

*Run your unit tests*

```sh
$ noms demo.test.js
```

*Result:*

![Test Results](demo/cli-demo.gif)

## Module Usage

*Create you test file*

```js
// demo.test.js

const noms = require('noms')();

noms.suite('All demo tests', () => {

  noms.test('Should return a correct number', () => {
    return noms.assert(22, 22);
  });

  noms.test('Should return a correct number', () => {
    return noms.assert(22, 23);
  });

})
```

*Run you unit tests*

```sh
$ node demo.test.js
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/afonsopacifer/nomsjs/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/nomsjs/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/afonsopacifer/nomsjs/releases) for detailed changelog.

## License

[MIT License](https://github.com/afonsopacifer/nomsjs/blob/master/LICENSE.md) © [Afonso Pacifer](https://afonsopacifer.github.io/)
