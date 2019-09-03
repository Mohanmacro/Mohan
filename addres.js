var Iota = require('@iota/core');
var iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
});
var seed = 'LFSWWVTQEPEVQLOTKYOEXZQIDPKUIVYONNRRSVKMLKFWKANQXOHNOEYHZMDSWLYPJWTNCYYPWAJTRBOK9';
iota.getNewAddress(seed, { index: 0, security: 2 })
    .then(function (address) { return console.log(address); 
    var value = address;
    });

