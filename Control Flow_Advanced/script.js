const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();
 
/*Closures - a function ran. the function executed. 
It's never going to execute again 
but it's going to remember that there are references 
to those variables so the child scope 
always has access to the parent scope.

//Currying
*/

const multiply - (a,b) => a + b;
const curriedMultiply = (a) => (b) => a + b;
curriedMultiply(3);

// Compose - Put two functions together so the 
// returns a function that 