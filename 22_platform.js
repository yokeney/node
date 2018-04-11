const {
	sep,
	delimiter,
	win32,
	posix
}=require('path');
console.log('win32:',win32.sep );
console.log('PATH:',process.env.PATH );
console.log('delimiter:',delimiter );
console.log('sep:',sep );
