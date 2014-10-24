'use strict';
var assert = require('assert');
var escapeStringRegexp = require('../');

it('should escape RegExp special characters', function () {
	assert.strictEqual(escapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ]'), '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]');
});
