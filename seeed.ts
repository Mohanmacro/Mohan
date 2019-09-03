const generateSeed = require('iota-seed-generator');

 async function seed() {
	try {
		const seed =  await generateSeed();
		console.log(seed);	
	}catch (err) {
		console.log(err);
	}
}

seed();
