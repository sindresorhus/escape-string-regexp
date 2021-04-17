import test from 'ava';
import escapeStringRegexp from './index.js';

test('main', t => {
	t.is(
		escapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ]'),
		'\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]'
	);
});

test('escapes `-` in a way compatible with PCRE', t => {
	t.is(
		escapeStringRegexp('foo - bar'),
		'foo \\x2d bar'
	);
});

test('escapes `-` in a way compatible with the Unicode flag', t => {
	t.regex(
		'-',
		new RegExp(escapeStringRegexp('-'), 'u')
	);
});
