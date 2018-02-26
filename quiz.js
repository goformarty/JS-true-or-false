let q1 = document.getElementById("q1");
let answer = document.getElementById("answer");

let condition1 = {};


function checkAnswer(bool) {
	let answer = document.getElementById("a1");
	if (bool === isItTrue() ) {
		a1.innerText = "Correct! :>";
	} else {
		a1.innerText = "Wrong! :<";
	}
}

function isItTrue() {
	if (condition1) {
		return true;
	}
	return false;
}
