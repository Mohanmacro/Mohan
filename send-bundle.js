const Iota = require('@iota/core');

const Converter = require('@iota/converter');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
   
   
    });

    const seed =
'BDRDM9HMBXJVCXYSQSYJBYSBJTYBTEWVSVORXTDPCJNYNOGCNRJOHTIGBHWZHZZW9NODBWHLHJFJGRCEZ';





let transfer1 = {
    'address': 'PIDSFOMJYLYMEXUEADOOG9WRYVIYG9RULTNSOPIDWAHO9DXU9BFZLPFRJAGNHJRYLAAAERWQUBORTMFFBDGCZOSPMC',
    'value': 0,
    'message': Converter.asciiToTrytes('Hello, this is my first message'),
    'tag': 'SENDABUNDLEOFTRANSACTIONS'
    };
    
   
    iota.prepareTransfers(seed, [transfer1])
.then(function(trytes){
    return iota.sendTrytes(trytes, 3, 9);
})

.then(results => console.log(JSON.stringify(results, ['hash', 'currentIndex', 'lastIndex', 'bundle', 'trunkTransaction', 'branchTransaction'], 2)));
