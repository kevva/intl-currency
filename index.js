'use strict';
var intl = require('intl');
var objectAssign = require('object-assign');

module.exports = function (val, opts) {
	if (!opts.locales || !opts.locales.length) {
		throw new Error('Locales is required');
	}

	opts = objectAssign({style: 'currency'}, opts);

	if (!opts.currency && opts.style === 'currency') {
		throw new Error('Currency is required');
	}

	var locales = opts.locales;
	delete opts.locales;

	return new intl.NumberFormat(locales, opts).format(val);
};
