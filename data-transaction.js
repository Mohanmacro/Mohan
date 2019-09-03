const Iota = require('@iota/core');
const Converter = require('@iota/converter');
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });
    const address =
'XNTFTRCKQNESKXVZEPKMLSOMVBWMPFLWYUQRVNTCVAKVYRYXTBRYSHJNSSNPGAEJSZ99PXXLZQAWWMDHC';
const seed =
'Q9FXRO9UZCBVVFVNIMIOCGBOQQXIOSPNKRC9LZJGUANY9EVYANCNTDDYFEKHMOSAVCRURHCGALTRJQ9CE';
const message = Converter.asciiToTrytes('Hello World!');
const transfers = [
    {
        value: 0,
        address: address,
        message: message
    }
    
    ];
    iota.prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, 3, 9)
    })
    .then(bundle => {
    console.log(`Bundle: ${JSON.stringify(bundle, null, 1)}`)
})
.catch(err => {
        // Catch any errors
    console.log(err);
});