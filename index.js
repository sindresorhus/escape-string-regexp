(function () {

	function escapeStringRegExpFactory() {
		'use strict';

		var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

		return function escapeStringRegExp(str) {
			if (typeof str !== 'string') {
				throw new TypeError('Expected a string');
			}

			return str.replace(matchOperatorsRe,  '\\$&');
		};
	};


	(function (root, factory) {
		if (typeof exports === 'object') {
			// Node. Does not work with strict CommonJS, but
			// only CommonJS-like enviroments that support module.exports,
			// like Node.
			module.exports = factory();
		} else {
			// Browser globals
			root.escapeStringRegExp = factory();
		}
	})(this, escapeStringRegExpFactory);

})();
