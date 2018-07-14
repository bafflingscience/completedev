//function sing(song) {
//    console.log(song);
//}

//sing("lalala");
//sing("doowop");
//sing("fuckyeah");


//function multiply(a, b) {
//    return a * b;
//}

//alert(multiply(3,4

//var age = prompt("What is your age?");

//if (Number(age) < 18) {
//	alert("Sorry, you are too yound to drive this car. Powering off");
//} else if (Number(age) > 18) {
//	alert("Powering On. Enjoy the ride!");
//} else if (Number(age) === 18) {
//	alert("Congratulations on your first year of driving. Enjoy the ride!");
//}



function checkDriverAge(age) {
var age = prompt("What is your age?");
if (Number(age) < 18) {
	return "NONONO!";
} else if (Number(age) > 18) {
	return"Drive on you old fuck!";
} else if (Number(age) === 18) {
	return"Year one is it. Move along.";
}

}


//1. Make the above code have a function called checkDriverAge(). 
//...Whenever you call this function, you will get prompted for age. 
//...Use Function Declaration to create this function.


var checkDriverAge2 = function() {
	console.log = age;
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
//BONUS: Instead of using the prompt. 
//Now, only use console.log and make the checkDriverAge() function accept an argument of age, 
//so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 

function checkDriverAge(age) {
    console.log = age;
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}