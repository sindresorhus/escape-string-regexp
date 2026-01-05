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

test('throws on non-string input', t => {
	t.throws(() => escapeStringRegexp(), {instanceOf: TypeError});
	t.throws(() => escapeStringRegexp(123), {instanceOf: TypeError});
	t.throws(() => escapeStringRegexp(null), {instanceOf: TypeError});
});

test('handles empty string', t => {
	t.is(escapeStringRegexp(''), '');
});

test('handles unicode and surrogate pairs', t => {
	t.is(escapeStringRegexp('😀-test'), '\\😀\\x2dtest');
});

