'use strict';
var intl = require('intl');
var isBrowser = require('is-browser');
var objectAssign = require('object-assign');

module.exports = function (val, opts) {
	if (!opts.locales || !opts.locales.length) {
		throw new Error('Locales is required');
	}

	if (!opts.currency) {
		throw new Error('Currency is required');
	}

	opts = objectAssign(opts, {style: 'currency'});

	var locales = opts.locales;
	delete opts.locales;

	if (isBrowser) {
		global.Intl = global.Intl || intl;
		return new Intl.NumberFormat(locales, opts).format(val);
	}

	return new intl.NumberFormat(locales, opts).format(val);
};
