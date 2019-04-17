/**
Escape RegExp special characters.

@example
```
import escapeStringRegexp = require('escape-string-regexp');

const escapedString = escapeStringRegexp('how much $ for a 🦄?');
//=> 'how much \\$ for a 🦄\\?'

new RegExp(escapedString);
```
*/
declare const escapeStringRegexp: (str: string) => string;

export = escapeStringRegexp;
