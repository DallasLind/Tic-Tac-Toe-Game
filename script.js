console.log("Hello game!");

let playerOne = 1;
const reset = document.querySelector("button");
let board = document.getElementById("board");
board.addEventListener("click", boardClick);
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

let winningMoves = [

  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 3, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3]

];





for(let i = 0; i<squares.length; i++){
	squares[i].addEventListener("click", playerMove);

	function playerMove(evt){
		evt.preventDefault();
		if(playerOne === 1){

		}
	}


