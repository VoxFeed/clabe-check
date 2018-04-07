# clabe-check

![](https://img.shields.io/wercker/ci/wercker/docs.svg?style=flat)
![](https://img.shields.io/dub/l/vibe-d.svg?style=flat)

Lightweight validator for the CLABE banking standard for the numbering of bank accounts in Mexico.

## Install

```bash
npm install --save clabe-check
```

## Usage

1. Import the module.
2. Pass any CLABE as string and validate it.
3. It returns a `boolean` that indicates whether CLABE is valid or not.

Example:

```javascript
const clabeCheck = require('clabe-check');

const notAClabe = 'Not even a CLABE';
const notAString = 12345678901234567;
const invalidClabe = '01234567890123456';
const validClabe = '328000921510220225';

console.log(clabeCheck(notAClabe)); // false

console.log(clabeCheck(notAString)); // false

console.log(clabeCheck(invalidClabe)); // false

console.log(clabeCheck(validClabe)); // true
```

## License

MIT
