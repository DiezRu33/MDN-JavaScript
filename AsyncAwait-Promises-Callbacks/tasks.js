const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
	async taskOne() {
		await sleep(4000) //mls
		return '... 4, 5, 6...';
	},

	async taskTwo(){
		await sleep(2000);
		return '... 2, 3, 4...';
	}
};
