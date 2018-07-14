var name = "Bill";
 
 if (name === "Bill") {
	alert("Hey Bill");
} else if (name === "Susy") {
	alert("Hi Susy"); 
} else {
	alert("Get outta here!");
}
///////////// ||or|| ///////////////
if (name === "Bill" || name ==="Susy") {
	alert("Hi Bill...or Fluzy...I mean Susy");
}
///////////// &&And&& ////////////
var firstName = "Bob";
var lastName = "Smith";

if (firstName === "Bob" && lastName === "Smith") {
	alert("Hi Bob Smith!")
}
///////// !Not Equal To ////////////
var name = "Billy";

if (!(name === "Bob")) {
	alert("HI BOB!");
} else {
	alert("HI Bill!");
}

