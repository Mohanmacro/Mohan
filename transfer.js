const Iota = require('@iota/core');

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
})

const seed = 'BDRDM9MBXJVCXYSQSYJBYSBJTYBTEWVSVORXTDPCJNYNOGCNRJOHTIGBHWZHZZW9NODBWHLHJFJGRCEZYVY';

const transfers = [
  {
    address: ' 9FPUY9FTOYXTIMSIUYLGOKGIXXREAOGSHMGHAMUYLCDRDJWEQPPJOCGVT9FHOEULJUPAHVRE',
    value: '0', 
    tag: '', 
    message: "hi",
  }
]
const depth = 3

const minWeightMagnitude =14

iota.prepareTransfers(seed, transfers)
.then(trytes => {
  return iota.sendTrytes(trytes,depth,minweightMaginitude)
})
.then(bundle => {
  console.log(`Published transaction with tail hash: ${bundle[0].hash}`)
  console.log(`Bundle: ${bundle}`)
})



