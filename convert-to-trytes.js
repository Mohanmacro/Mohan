const Converter = require('@iota/converter');


var data = "hello world";

var trytes = Converter.asciiToTrytes(data);

var trits = Converter.trytesToTrits(trytes);

var a=("RBTC9D9DCDEAFCCDFD9DSCFA")
var message = Converter.trytesToAscii('RBTC9D9DCDEAFCCDFD9DSCFA');

console.log(`${trytes} converted to trits: ${trits}`);

console.log(`${trytes} converted to trytes: ${data}`);

console.log(`${a} converted to trytes: ${message}`);
