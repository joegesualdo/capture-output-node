## capture-output [![Build Status](https://travis-ci.org/joegesualdo/capture-output-node.svg?branch=master)](https://travis-ci.org/joegesualdo/capture-output-node)
> Capture console.log output. Useful for testing cli modules.

## Install
```
$ npm install --save @joegesualdo/capture-output-node 
```

## Usage
```javascript
import CaptureOutput from '@joegesualdo/capture-output-node';

var capturedOutput = new CaptureOutput();

console.log('Woowee')

capturedOutput.get()
.then((output) => {
  // output === 'Woowee'
})
```

## Test
```
$ npm test
```
## API

### `constructor()`
> Creates an intance of CaptureOutput 

Returns: `CapturedOutput`, instance of CaptureOutput 

```javascript
import CaptureOutput from '@joegesualdo/capture-output-node';

var capturedOutput = new CaptureOutput();
```

### `get()`
> Gets the output that was captured from the time you created the CaptureOutput instance. 

Returns: `Promise`, The promise passes a string (utf8) that represent everything that was printed to the output since the instance of CatpureOuput was initialized.

```javascript
import CaptureOutput from '@joegesualdo/capture-output-node';

var capturedOutput = new CaptureOutput();

console.log('Woowee')

capturedOutput.get()
.then((output) => {
  // output === 'Woowee'
})
```
## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
