import test from 'ava';
import escapeStringRegexp from '.';

test('main', t => {
	t.is(
		escapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ]'),
		'\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]'
	);
});
