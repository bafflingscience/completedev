// let is the new var. It uses scope;

// const is constant. The variable doesn't change;
// ..but you can change the property of a const variable



const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

