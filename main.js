// defining field
const GameBoard = document.getElementById("board");
let board = ["", "", "", "", "", "", "", "", ""]; // 9 empty cells
let player1 = ("","x");
let player2 = ("", "o");
let currentPlayer;
const alertMsg = document.getElementById("Alert-msg");
let gameOver = false;


//button
const startBtn = document.getElementById("startBtn");
const player1Input = document.getElementById("player-one");
const player2Input = document.getElementById("player-two");
const GameScreen = document.querySelector(".Game-Screen");
const StartScreen = document.querySelector(".Start-Screen");
const player1ScoreName = document.getElementById("Score-player1-name");
const player2ScoreName = document.getElementById("Score-player2-name");
const Score1 = document.getElementById("Score1");
const Score2 = document.getElementById("Score2");
const newGameBtn = document.getElementById("new-game");

// recording collections of move to arrays
let player1move = [];
let player2move = [];
const winningSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ];

// let board1 = ["X", "X", "X", "", "", "", "", "", ""]
// player1move = [0, 1, 2, 6, 7]

    
// checking winner
function CheckWin(playerMove) {
    for (const winSet of winningSets) {
        const isWin = winSet.every((element) => playerMove.includes(element));
        if (isWin) {
            alertMsg.textContent = `We have a winner - ${currentPlayer.name}! Game Over!`;
            console.log(`We have a winner: ${currentPlayer.name}!`);
            gameOver = true;
            
        
            //update score
            currentPlayer.increaseScore();
            if (currentPlayer === player1) {
                Score1.textContent = `${player1.getScore()}`;
                Score2.textContent = `${player2.getScore()}`;
            } else {
                Score1.textContent = `${player1.getScore()}`;
                Score2.textContent = `${player2.getScore()}`;
            } 
            // Stop checking further
            return true;      
        }
    }
  // No winner found
  return false;

}

//check for draw

function checkDraw() {
    return board.every(cell => cell !== "");
}




// create players

function createPlayer(name, sign) {
    let score = 0;
    const getScore = () => score;
    const increaseScore = () => score++;
    return {name, sign, getScore, increaseScore};
}

// switch player function
function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    alertMsg.textContent = `It's ${currentPlayer.name}'s turn`;
}

// Create a board with 9 cells 
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i; // store index for later
    GameBoard.appendChild(cell);
// recording moves
    cell.addEventListener('click', () => {
        // ⛔ STOP EVERYTHING if game is over
        if (gameOver) return;
            if(board[i]==="") {
                board[i] = currentPlayer.sign;
                cell.textContent = currentPlayer.sign;

                if (currentPlayer.sign === "x") {
                    player1move.push(i);
                    if (CheckWin(player1move)) return;
                } else {
                    player2move.push(i);
                    if (CheckWin(player2move)) return;
                }
                //check Draw
                if (checkDraw()) {
                    alertMsg.textContent = "It's a draw!";
                    gameOver = true;
                    return;
                }
                // switch turns
                switchPlayer();
            } else {
                alertMsg.textContent = "Chosen cell, please choose again."
            };
        })
    }




// Start button

startBtn.addEventListener("click", () => {
    if (player1Input.value === "" || player2Input.value === "") {
        alert("Please enter that player's name")
    } else {
        player1 = createPlayer(player1Input.value, "x");
        player2 = createPlayer(player2Input.value, "o");
        currentPlayer = player1;
        player2ScoreName.textContent = `${player2.name}`;
        player1ScoreName.textContent = `${player1.name}`;
        alertMsg.textContent = `Welcome ${player1.name} and ${player2.name}. It's ${player1.name} turn`;
        StartScreen.style.display = "none";
        GameScreen.style.display = "grid";
    }
})

//New Game button

newGameBtn.addEventListener("click", () => {
    cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.textContent = "";
    });
    board.fill("");
    player1move = [];
    player2move = [];
    gameOver = false;
    switchPlayer();

})




