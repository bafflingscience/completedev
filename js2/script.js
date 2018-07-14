"Hi There! " + "It\'s \"sunny\" out"
// Hi There! It's "sunny" out" 

//if else if else
name = prompt("What You\'re is?");

if (name === "billy") {
    alert("BILL!");
} else if (name === "willy") {
    alert("WILL!");
} else {
    alert("WHO THE FUCK ARE YOU!");
}

//if or
name = prompt("What Your Name");

if (name === "BILL" || name === "WILL") {
    alert("WILL or BILL");
}

//if and else
name = prompt("What Your Name");
if (name === "BILL" && name === "WILL") {
    alert("WILL and BILL!");
} else {
    alert("NOOOO!");
}

//if not alert
name = prompt("YOU ARE");
if (!(name === "BOB")) {
    alert("BOB!");
}

//if < alert; else if === alert; else alert;
age = prompt("HOW OLD YOU IS?");

if (age < "18") {
    alert("NONONONO!");
} else if (age === "18") {
    alert("Tight Bro");
} else {
    alert("Rock on old timer");
}
