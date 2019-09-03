const Iota = require('@iota/core');
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.thetangle.org:443'
});

const address = 'XNTFTRCKQNESKXVZEPKMLSOMVBWMPFLWYUQRVNTCVAKVYRYXTBRYSHJNSSNPGAEJSZ99PXXLZQAWWMDHC';
iota
    .findTransactionObjects({ addresses: [address] })
    .then(response => {
    console.log(response);
})
    .catch(err => {
    console.error(err);
});