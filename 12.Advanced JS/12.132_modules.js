---- IIFE ---- 
Immediately Invoked Function Execution
// js1 first file load
var myApp = {}

// j2
(function() {
	myApp.add = function(a, b) {
		return a + b;
			}
})();


----CommonJS + Browserify----

//js1
module.exports = function add(a, b) {
	return a + b;
}

//js2
var add = require("/add");

//module bundler -- reads through all the files before page loads
// will combine all files into one page
// 'bundle.js'

------ES6 + Webpack2-----
//js1
export const add = (a, b) => a + b;
//or
export default function add() {
	return a + b;
}

//js2
import { add } from './add';
//or
import add from './add';
