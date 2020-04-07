import test from 'ava';
import escapeStringRegexp from '.';

test('main', t => {
	t.is(
		escapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ]'),
		'\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]'
	);
});

test('escapes `-`', t => {
	t.is(
		escapeStringRegexp('foo - bar'),
		'foo \\u002d bar'
	);
});

test('escapes `-` in a way compatible with the Unicode flag', t => {
	t.regex(
		'-',
		new RegExp(escapeStringRegexp('-'), 'u')
	);
});
