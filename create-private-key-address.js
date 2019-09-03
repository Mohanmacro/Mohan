const Iota = require('@iota/core');
const Sign = require('@iota/signing');
const Converter = require('@iota/converter');

const seed = "BDRDM9MBXJVCXYSQSYJBYSBJTYBTEWVSVORXTDPCJNYNOGCNRJOHTIGBHWZHZZW9NODBWHLHJFJGRCEZ";

var subseed = Sign.subseed(Converter.trytesToTrits(seed), 0 /*index*/);

var privateKey1 = Sign.key(subseed, 1 /*security level*/);

console.log('Private key length for security level 1: ' + Converter.tritsToTrytes(privateKey1).length);

var privateKey2 = Sign.key(subseed, 2 /*security level*/);

console.log('Private key length for security level 2: ' + Converter.tritsToTrytes(privateKey2).length);

var privateKey3 = Sign.key(subseed, 3 /*security level*/);

console.log('Private key length for security level 3: ' + Converter.tritsToTrytes(privateKey3).length);


var privateKey1Digests = Sign.digests(privateKey1);

console.log(`Total key digests for security level 1: ` + Converter.tritsToTrytes(privateKey1Digests).length/81);

var privateKey2Digests = Sign.digests(privateKey2);

console.log(`Total key digests for security level 2: ` + Converter.tritsToTrytes(privateKey2Digests).length/81);

var privateKey3Digests = Sign.digests(privateKey3);

console.log(`Total key digests for security level 3: ` + Converter.tritsToTrytes(privateKey3Digests).length/81);

var privateKey1Address = Sign.address(privateKey1Digests);

console.log('Address with security level 1: ' + Converter.tritsToTrytes(privateKey1Address));

var privateKey2Address = Sign.address(privateKey2Digests);

console.log('Address with security level 2: ' + Converter.tritsToTrytes(privateKey2Address));

var privateKey3Address = Sign.address(privateKey3Digests);

console.log('Address with security level 3: ' + Converter.tritsToTrytes(privateKey3Address));

console.log(Iota.generateAddress(seed, 0 /*index*/, 1 /*security level*/));
console.log(Iota.generateAddress(seed, 0 /*index*/, 2 /*security level*/));
console.log(Iota.generateAddress(seed, 0 /*index*/, 3 /*security level*/));
