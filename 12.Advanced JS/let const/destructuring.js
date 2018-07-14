
const obj = {
	player: "bobby",
	experience: 100,
	wizardLevel: false
}


const { player, experience } = obj;
let { wizardLevel } = obj;

//Object Properties

const a = 'john snow';
const b = true;
const c = {};

const obj = {a,b,c}

//Template Strings

const name = "Sally";
const age = 30;
const pet = "horse";

//Symbol

let symbol1 = Symbol();
let symbol2 = Symbol('foo');
let symbol3 = Symbol('bar');


//Arrow Function

//old way//
function add(a, b) {
	return a + b;
}
//new way//
const add = (a,b) => a + b;
//const greeting = `Hello ${name} you seem to be ${age-10}. Nice ${pet}.`;

//// Template String ///
function greet(name='', age=30, pet='cat') {
	return `Hello ${name} you seem to be ${age-10}. Nice ${pet}.`;
}
//Output is as follows:
>>greet("bill", 50, "tiger");
<-"Hello bill you seem to be 40. Nice Tiger."