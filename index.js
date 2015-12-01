'use strict';
var intl = require('intl');
var isBrowser = require('is-browser');
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

	if (isBrowser) {
		global.Intl = global.Intl || intl;
		return new Intl.NumberFormat(locales, opts).format(val);
	}

	return new intl.NumberFormat(locales, opts).format(val);
};
