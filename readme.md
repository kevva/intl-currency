# intl-currency [![Build Status](https://travis-ci.org/kevva/intl-currency.svg?branch=master)](https://travis-ci.org/kevva/intl-currency)

> Convert numbers to currencies


## Install

```
$ npm install --save intl-currency
```


## Usage

```js
var intlCurrency = require('intl-currency');

intlCurrency(129, {
	currency: 'USD',
	locales: 'en-US'
});
//=> $129.00

intlCurrency(129, {
	currency: 'SEK',
	locales: 'sv-SE',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0
});
//=> 129 kr
```


## API

### intlCurrency(value, [options])

#### value

Type: `number`, `string`

The value to convert.

#### options

See this [link](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) for all possible options.

##### currency

*Required*  
Type: `string` 

The currency to use in formatting. Possible values are the ISO 4217 currency codes, such as `USD` for the US dollar or `EUR` for the euro. See the [currency code list](http://www.currency-iso.org/en/home/tables/table-a1.html) for all possible values.

##### locales

*Required*  
Type: `array`, `string`  

A string with a BCP 47 language tag, or an array of such strings.


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
