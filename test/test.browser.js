describe('escapeStringRegExp', function () {
	it('should escape RegExp special characters', function () {
		expect( escapeStringRegExp('\\ ^ $ * + ? . ( ) | { } [ ]') )
			.to.be('\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]');
	});
});
