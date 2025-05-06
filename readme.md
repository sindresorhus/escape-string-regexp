# escape-string-regexp

> Escape RegExp special characters

> [!TIP]
> This is now available natively as [`RegExp.escape()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape).

## Install

```sh
npm install escape-string-regexp
```

## Usage

```js
import escapeStringRegexp from 'escape-string-regexp';

const escapedString = escapeStringRegexp('How much $ for a 🦄?');
//=> 'How much \\$ for a 🦄\\?'

new RegExp(escapedString);
```

You can also use this to escape a string that is inserted into the middle of a regex, for example, into a character class.

Only the minimal amount of escaping is done, and developers are expected to insert escaped strings at safe positions in a `RegExp`. This keeps the output simple and gives you the best results in most cases. For edge case placements of escaped strings (such as immediately following `\0` or `\c`), the escaped value can change the meaning of the preceding or following token. If fully context-aware escaping is needed, consider interpolating a string using the [`regex`](https://github.com/slevithan/regex#interpolating-escaped-strings) package.
