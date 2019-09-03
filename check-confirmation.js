const Iota = require('@iota/core');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });
    iota.getNodeInfo()
// Convert the returned object to JSON to make the output more readable
.then(info => console.log(JSON.stringify(info, null, 1)))
.catch(err => {
    // Catch any errors
    console.log(err);
});

    iota.getLatestInclusion([''])
.then(states => console.log(states));

iota.getLatestInclusion(['JRLJANWQRGBNOSHCBRDPLPLFRQBENTESCFPYISOEQEGGZEYIWEQCHRAGPWYYRBBFUJEDZRYEWWGAND999'])
.then(states => console.log(states));