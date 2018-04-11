const buf=Buffer.from('好久哦那个');
const StringDecoder=require('string_decoder').StringDecoder;
const decoder=new StringDecoder('utf8')
for (let  i = 0; i < buf.length; i+=5) {
	const b=Buffer.allocUnsafe(5);
	buf.copy(b,0,i);
	console.log(b.toString());
}

for (let  i = 0; i < buf.length; i+=5) {
	const b=Buffer.allocUnsafe(5);
	buf.copy(b,0,i);
	console.log(decoder.write(b));
}
