const IOTA = require('iota.node.js')
const iota = new IOTA({ provider: 'https://nodes.testnet.iota.org:443' })

// Init State
let root = ''

// Initialise MAM State
let mamState = MAM.init(iota)

// Publish to tangle
const publish = async packet => {
    const trytes = iota.utils.toTrytes(JSON.stringify(packet))
    const message = MAM.create(mamState, trytes)
    mamState = message.state
    await MAM.attach(message.payload, message.address)
    return message.root
}

// Callback used to pass data out of the fetch
const logData = data => console.log(JSON.parse(iota.utils.fromTrytes(data)))

const execute = async () => {
    // Publish and save root.
    root = await publish({foo: 'bar-1'})
    // Publish but not save root
    await publish({foo: 'bar-2'})
    // Callback used to pass data + returns next_root
    const resp = await MAM.fetch(root, 'public', null, logData)
    console.log(resp)
}

execute()

// const fetch = async (root) => {
//     const resp = await MAM.fetch(root, 'public', null, logData)
//     console.log(resp)
// }
