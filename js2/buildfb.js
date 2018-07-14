var database = [
	{
		username: "dave",
		password: "123"
	},
	{
		username: "ken",
		password: "456"
	},
	{
		username: "patrice",
		password: "789"
	},
	{
		username:"laura",
		password: "147"
	},
	{
		username: "ron",
		password: "258"
	},
	{
		username: "cassandra",
		password: "369"
	},
	{
		username: "maia",
		password: "741"
	},
	{
		username: "derkey",
		password: "258"
	},
	{
		username: "maria",
		password: "369"
	},
	{
		username: "americo",
		password: "963"
	}
];

var newsFeed = [
	{
		username: "dave",
		timeline: "225 - AC not cooling"
	},
	{
		username: "dave",
		timeline: "317 Marshall: stayover, just give keys. "
	},
	{
		username: "ricky",
		timeline: "the most rickest"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	}
	return false;
};
	
function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("WRONG!");
	}
};

var userNamePrompt = prompt("What's Username?");
var passwordPrompt = prompt("What's Password?");

function signIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("WRONG!");

	}
};

signIn(userNamePrompt, passwordPrompt);
