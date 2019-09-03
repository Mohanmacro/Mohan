import { composeAPI } from '@iota/core';
const iota = composeAPI({provider: 'https://permanode.thetangle.business:443?Authorization=YOUR_API_CREDENTIAL'});
iota.findTransactions({bundles: ['ZAO9JCCKXFGYBKDDLOBVIUAFZPRRGUPHDVSIRFRCQHCXVIL9KRSGGJUTXLPHQLUYJZO9ZQBUFKRGGUVKA']})
  .then(hashes => console.log(hashes));