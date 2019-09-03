const Iota = require('@iota/core');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });

    // Replace this seed with one that owns an address with free Devnet tokens 
const seed =
'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

const receivingAddress = iota.getNewAddress(seed, {
    index: 1,
    total: 1
});

const transfers = [
    {
      value: 500,
      address: receivingAddress[0],
      tag: 'MYFIRSTVALUETRANSACTION'
    }
    ]

    