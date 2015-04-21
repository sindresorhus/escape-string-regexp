'use strict';
var assert = require('assert');
var escapeStringRegexp = require('./');

it('should escape RegExp special characters', function () {
        console.log('asshat');
        console.log(escapeStringRegexp('-'));
	assert.strictEqual(escapeStringRegexp('- \\ ^ $ * + ? . ( ) | { } [ ]'), '\\- \\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]');
});
