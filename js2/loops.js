var todos = [
	"clean room",
	"brush teeth",
	"rob bank",
	"lill terrorist",
	"make love to supermodel",
	"accept awards",
	"karate"
];

var todosImportant = [
	"rob bank",
	"kill terrorist",
	"make love to supermodel",
	"motorcycle",
	"karate"
];

var todosLength = todos.length;

//for (var i=0; i < todosLength; i++) {
//	console.log(todos[i], i);
//}

//the above and below are two different ways to 
//perform the for loop 

//todos.forEach(function(todo, i) {
//	console.log(todo, i);
//})

function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

//var counterOne = 0;
//while (counterOne < 10) {
//	console.log(counterOne);
//	counterOne++;
//}
//1
//2
//3
//4
//5
//6
//7
//8
//9



//var counterOne = 10;
//while (counterOne > 0) {
//	console.log(counterOne);
//	counterOne--;
//}
//9
//8
//7
//6
//5
//4
//3
//2
//1

//var counterOne = 10
//while (counterOne > 10) {
//	console.log("while", counterOne);
//	counterOne--;
//};

//var counterTwo = 10
//do {
//	console.log("do while", counterTwo);
//	counterTwo--;
//} while (counterTwo > 0);

