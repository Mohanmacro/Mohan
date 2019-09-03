const Iota = require('@iota/core');

const mainnet ='https://nodes.thetangle.org:443';
   
const devnet ='https://nodes.devnet.iota.org:443';
const iota = Iota.composeAPI({
    provider: devnet
    });

    const seed =
'GLRPV9RB9MINMSLZYZKARUX9ENDZYRMFAHQRWSVRYLDXNWLMDCUKGCEIIESCYAGZPF9VADE9IEWKIGLIZ';

iota.getNewAddress(seed, {index: 0, security:2,checksum:true})
.then(address => console.log(address));