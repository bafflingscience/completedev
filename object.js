
///the object user with the array of spells and the 
///function of shout, which is a method of user/
var user = {
	name = "Dave",
	age = 22,
	hobby = "marathons",
	isMarried = true,
	spells: ["zoop", "zabradaba", "booboo"],
	shout: function() {
		console.log("AHHHH!");
	}
};

/////add item///
user.favoriteFood = "pizza";

/////
var list = [
	{
		username: "andy",
		password: "123"
	},
	{
		username: "jess",
		password: "234"
	}
];

///////access items/////
user.spells
user.spells[1];

list[0].password;
