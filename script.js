console.log("Hello game!");

//What I'm defining for my board as far as players and squares go
let currentPlayer = document.querySelector('#current-player');
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

  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 3, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3]

];

//Starting the game functionality

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        if (squares[i].style.backgroundColor !== 'red' && squares[i].style.backgroundColor !== 'blue') {
            if (player.classList.contains('red')) {
                squares[i].style.backgroundColor = 'red';
                player.classList.toggle('red');
                player.classList.toggle('blue');
                player.innerHTML = 'Go blue!';
                winLogic();
            } else {
                squares[i].style.backgroundColor = 'blue';
                player.classList.toggle('blue');
                player.classList.toggle('red');
                player.innerHTML = 'Go red!';
                winLogic();
            }
        } else {
            alert('Oops, try an unclicked square!');
        }
    });
}

function winLogic(){
	if (squares[0].style.backgroundColor == "red" && squares[1].style.backgroundColor == "red" && squares[2].style.backgroundColor == "red"){
		alert('Red Wins!');
	} else if (squares[3].style.backgroundColor == "red" && squares[4].style.backgroundColor == "red" && squares[5].style.backgroundColor == "red"){
		alert("Red Wins!");
	} else if (squares[6].style.backgroundColor == "red" && squares[7].style.backgroundColor == "red" && squares[8].style.backgroundColor == "red"){
		alert("Red Wins!");
	} else if (squares[0].style.backgroundColor == "red" && squares[3].style.backgroundColor == "red" && squares[6].style.backgroundColor == "red"){
		alert("Red Wins!");
	} else if (squares[2].style.backgroundColor == "red" && squares[5].style.backgroundColor == "red" && squares[8].style.backgroundColor == "red"){
		alert("Red Wins!");
	} else if (squares[0].style.backgroundColor == "red" && squares[4].style.backgroundColor == "red" && squares[8].style.backgroundColor == "red"){
		alert("Red Wins!");
	} else if (squares[2].style.backgroundColor == "red" && squares[4].style.backgroundColor == "red" && squares[6].style.backgroundColor == "red"){
		alert("Red Wins!");
	//Below is the conditional for Blue Wins. Will have to figure out how to shorten this if with switch statements or not
	} else if (squares[0].style.backgroundColor == "blue" && squares[1].style.backgroundColor == "blue" && squares[2].style.backgroundColor == "blue"){
		alert('Blue Wins!');
	} else if (squares[3].style.backgroundColor == "blue" && squares[4].style.backgroundColor == "blue" && squares[5].style.backgroundColor == "blue"){
		alert('Blue Wins!');
	} else if (squares[6].style.backgroundColor == "blue" && squares[7].style.backgroundColor == "blue" && squares[8].style.backgroundColor == "blue"){
		alert('Blue Wins!');
	} else if (squares[0].style.backgroundColor == "blue" && squares[3].style.backgroundColor == "blue" && squares[6].style.backgroundColor == "blue"){
		alert('Blue Wins!');
	} else if (squares[2].style.backgroundColor == "blue" && squares[5].style.backgroundColor == "blue" && squares[8].style.backgroundColor == "blue"){
		alert('Blue Wins!');
	} else if (squares[0].style.backgroundColor == "blue" && squares[4].style.backgroundColor == "blue" && squares[8].style.backgroundColor == "blue"){
		alert('Blue Wins!');
	} else if (squares[2].style.backgroundColor == "blue" && squares[4].style.backgroundColor == "blue" && squares[6].style.backgroundColor == "blue"){
		alert('Blue Wins!');
	}else if (squares[0].style.backgroundColor !== '' && squares[1].style.backgroundColor !== '' && squares[2].style.backgroundColor !== '' && squares[3].style.backgroundColor !== '' && squares[4].style.backgroundColor !== '' && squares[5].style.backgroundColor !== '' && squares[6].style.backgroundColor !== '' && squares[7].style.backgroundColor !== '' && squares[8].style.backgroundColor !== ''){
		alert("It's a Tie!");
	}};

	reset.addEventListener('click', function(evt){
		location.reload();
	})
		




