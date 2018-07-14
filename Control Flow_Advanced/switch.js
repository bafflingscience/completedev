
// Switch Statement
--------------------

function moveCommand(direction) {
	var whatHappens;
	switch (direction); {
		case "forward":
			whatHappens = "You encounter a monster";
			break;
		case "back":
			whatHappens = "You arrive at home";
			break;
		case "right":
			whatHappens = "You come upon a river";
			break;
		case "left":
			whatHappens = "You come upon a succubous";
			break;
		default:
			whatHappens = "Which direction will you choose?";
	}
	return whatHappens;
}