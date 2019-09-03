const Iota = require('@iota/core');

const Converter = require('@iota/converter');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });

    iota.getNodeInfo()

.then(info => console.log(JSON.stringify(info, null, 1)))
.catch(err => {
    
    console.log(err);
});

const address =
'OAUARWFGRKJXCKXSSPGVPBOBCRIZGIXAQRKNWPHOZBMBBQDBTRQFLYPRCTGPZVVGXUNW9LCATOBURFTLD';

const seed =
"BSEV9WFCIR9TVSGHFUQHNKNRLQUEZPKG9WLXFQTFUVEHHELCAWATJMTNGTNWFXTRIYQ9RWFHPKOPFGY9S";


const message = Converter.asciiToTrytes('Mohan');

const transfers = [
    {
        value: 0,
        address: address,
        message: message
    }
    ];

    iota.prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, 3/*depth*/, 9/*minimum weight magnitude*/)
    })
    .then(bundle => {
    console.log(`Bundle: ${JSON.stringify(bundle, null, 1)}`)
})
.catch(err => {
        // Catch any errors
    console.log(err);
});

