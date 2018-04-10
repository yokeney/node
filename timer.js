setImmediate(()=>{
	console.log('setImmediate');
})
setTimeout(()=>{
	console.log("setTimeout");
},0)
process.nextTick(()=>{
	console.log('nextTick');
})

//nextTick>setTimeout>setImmediate
