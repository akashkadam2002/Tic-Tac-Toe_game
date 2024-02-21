let play = document.querySelectorAll(".box");
let resetgame = document.querySelector("#reset");
let head = document.querySelector("h1");

let turn_O = true;
let posval1;
let posval2;
let posval3;
let winning_call;
let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

function resetGame() {
    turn_O = true;
    enableButton();
    winning_call.remove();
}

play.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerText = "O";
            turn_O = false;
        }
        else {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;
        winner();
    });
});


function disableButton() {
    for (const box of play) {
        box.disabled = true;
    }
}

function enableButton() {
    for (const box of play) {
        box.disabled = false;
        box.innerText = "";
    }
}

function winner() {
    for (const pattern of winning) {
        posval1 = play[pattern[0]].innerText;
        posval2 = play[pattern[1]].innerText;
        posval3 = play[pattern[2]].innerText;

        if (posval1 != "" && posval1 != "" && posval1 != "") {
            if (posval1 == posval2 && posval1 == posval3) {
                showWinner();
            }
        }
    }
}

function showWinner(){
    winning_call = document.createElement("p");
    winning_call.innerText = "Congratulation, Winner is " + posval1;
    console.log(winning_call);
    head.append(winning_call);
    disableButton();
}

resetgame.addEventListener("click", resetGame);

