console.log('this is the model');
const TESTVAR=100;
function test(){
	console.log(TESTVAR);
}
module.exports.TESTVAR=TESTVAR;
module.exports.testFn=test;
