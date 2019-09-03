const Iota = require('@iota/core');
const Converter = require('@iota/converter');

const iota = Iota.composeAPI({  
    provider: 'https://nodes.devnet.iota.org:443'
})
const seed = 'HWHFJNAWCVJSTBIBPMNIRCSRCAOUPBPBATKE9VJTHSLE9KICOWBUEOHMQZ9SYULRVVDCTINZSKSUEVCER';
const transfers = {
    'address': 'XNTFTRCKQNESKXVZEPKMLSOMVBWMPFLWYUQRVNTCVAKVYRYXTBRYSHJNSSNPGAEJSZ99PXXLZQAWWMDHC',
    'value': 0,
    'message': 'Hello, this is my first message',
    'tag': 'SENDABUNDLEOFTRANSACTIONS'
    };
const depth = 3 
const minWeightMagnitude = 14
iota.prepareTransfers(seed, transfers)
    .then(trytes => {    
        return iota.sendTrytes(trytes, depth, minWeightMagnitude)
    })
    .then(bundle => {
        console.log(`Published transaction with tail hash: ${bundle[0].hash}`)
        console.log(`Bundle: ${JSON.stringify(bundle, null, 1)}`)
    })
    