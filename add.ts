const Iota = require('@iota/core');
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
});
const seed = 'RNPMXXIXTKOKOXIIGXEWVQRXWUEXNINBNHDYZQBOTPNEAYRNCYGFVPTPYQTRTDOFYS9UOKKARHIOVJJWM';
iota.getNewAddress(seed, { index: 0, security: 2 })
    .then((address) => console.log(address));
