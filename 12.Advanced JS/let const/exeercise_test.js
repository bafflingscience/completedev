const person = {
  firstName :  "John",
  lastName  : "Doe",
  age 		: 10,
  eyeColor  : "blue",
  city		: "Wellston",
};

let { firstName, lastName, age, eyeColor, city } = person;

let a = 'test';
let	b = true;
let	c = 789;  

const okObj = { a, b, c };

//Template String
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer. Remember? We got busy in the Kohls parking lot in the back seat of my 2004 Toyota Avalon.`

function isValidAge(age) {
  return age;
}

let sym = Symbol('This is my first symbol');

sym;

const whereAmI = (username,location) => (username && location) ?
  	 "I am lost" : "Not Lost";
