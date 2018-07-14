var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);

/// function array ///

var functionList = [function apple() {
	console.log("apple");
}]

// mixed //

var mixedList = ["apples", 3, undefined, true, function apple() {
	console.log("apples")
}];

////array in an array/////
var list = [
["tiger", "cat", "bear", "bird"]
];
/////1//////
console.log(list);
/////2////
console.log(list[0][2]);


var list = ["tiger", "cat", "bear", "bird"];
list
>(4)[---]
list.shift();
>"tiger"
list.pop();
>(2) ["cat","bear"]
list.concat();
>(3)[]