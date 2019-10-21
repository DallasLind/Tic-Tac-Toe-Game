console.log("Hello game!");

//What I'm defining for my board as far as players and squares go
let player = document.querySelector('#player');
const reset = document.querySelector("button");
const squares = document.querySelectorAll(".square");

const sq1 = document.querySelector("#square1");
const sq2 = document.querySelector("#square2");
const sq3 = document.querySelector("#square3");
const sq4 = document.querySelector("#square4");
const sq5 = document.querySelector("#square5");
const sq6 = document.querySelector("#square6");
const sq7 = document.querySelector("#square7");
const sq8 = document.querySelector("#square8");
const sq9 = document.querySelector("#square9");

//What players need to hit in order to win

let winningMoves = [

  ["sq1", "sq2", "sq3"],
  ["sq4", "sq5", "sq6"],
  ["sq7", "sq8", "sq9"],
  ["sq1", "sq4", "sq7"],
  ["sq2", "sq3", "sq8"],
  ["sq3", "sq6", "sq9"],
  ["sq1", "sq5", "sq9"],
  ["sq7", "sq5", "sq3"]

];

//Starting the game functionality

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
        e.preventDefault();
        if (squares[i].style.backgroundColor !== 'red' && squares[i].style.backgroundColor !== 'blue') {
            if (player.classList.contains('red')) {
                squares[i].style.backgroundColor = 'red';
                player.classList.toggle('red');
                player.classList.toggle('blue');
                player.innerHTML = 'Go Blue';
                winLogic();
            } else {
                squares[i].style.backgroundColor = 'blue';
                player.classList.toggle('blue');
                player.classList.toggle('red');
                player.innerHTML = 'Go Red';
                winLogic();
            }
        };
}

function winLogic(){
	if (sq1.style.backgroundColor == "red" && sq2.style.backgroundColor == "red" && sq3.style.backgroundColor == "red"){
		console.log("Red");
	} else if (sq4.style.backgroundColor == "red" && sq5.style.backgroundColor == "red" && sq6.style.backgroundColor == "red"){
		console.log("Red");
	} else if (sq7.style.backgroundColor == "red" && sq8.style.backgroundColor == "red" && sq9.style.backgroundColor == "red"){
		console.log("Red");
	} else if (sq1.style.backgroundColor == "red" && sq4.style.backgroundColor == "red" && sq7.style.backgroundColor == "red"){
		console.log("Red");
	} else if (sq2.style.backgroundColor == "red" && sq5.style.backgroundColor == "red" && sq8.style.backgroundColor == "red"){
		console.log("Red");
	} else if (sq3.style.backgroundColor == "red" && sq6.style.backgroundColor == "red" && sq9.style.backgroundColor == "red"){
		console.log("Red");
	} else if (sq1.style.backgroundColor == "red" && sq5.style.backgroundColor == "red" && sq9.style.backgroundColor == "red"){
		console.log("Red");
	} else if (sq3.style.backgroundColor == "red" && sq5.style.backgroundColor == "red" && sq7.style.backgroundColor == "red"){
		console.log("Red");
	} else {
		console.log("Hello again game!");
	}
};


