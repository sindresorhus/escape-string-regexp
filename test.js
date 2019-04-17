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
		'foo \\- bar'
	);
});
