// callstack

console.log('1');
setTimeout(() => {
	console.log('2');
}, 2000)
console.log('3');

// if time is changed from 2000 to 0, 
// it will output 1, 3, 2
// this is because the whatever is in 
// memory is first, then the web api is called 
// while we wait for the callback queue, which is 
// running asyncronous in the background.
//...this prevents the page from slowing down while
// waiting for the next function 

//callstack

//web api

//callback queue

//event loop