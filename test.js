import test from 'ava';
import intlCurrency from './';

test(t => {
	t.is(intlCurrency(1, {
		currency: 'USD',
		locales: 'en-US'
	}), '$1.00');

	t.is(intlCurrency('1', {
		currency: 'USD',
		locales: 'en-US',
		minimumFractionDigits: 1,
		maximumFractionDigits: 1
	}), '$1.0');

	t.is(intlCurrency('1', {
		currency: 'USD',
		locales: 'en-US',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}), '$1');
});
