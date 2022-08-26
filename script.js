let btn = document.getElementById("btn");
let turn = document.getElementById("turn");
let winner = document.getElementById("winner");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");

let xCount = 0;
let oCount = 0;

class TikTac {
    constructor(tiles) {
        this.tiles = tiles;
        this.currentPlayer = "x";
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.combination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    }

    reset() {
        btn.addEventListener("click", () => {
            this.currentPlayer = "x";
            this.board = ["", "", "", "", "", "", "", "", ""];
            this.tiles.forEach((tile) => (tile.innerHTML = ""));
            winner.innerHTML = "winner is";
            turn.innerHTML = "turn is";
        });
    }
    changePlayer() {
        this.currentPlayer = this.currentPlayer === "x" ? "0" : "x";
        turn.innerHTML = "turn is " + this.currentPlayer;
    }
    validateGame() {
        this.combination.forEach((elem) => {
            let a = this.board[elem[0]];
            let b = this.board[elem[1]];
            let c = this.board[elem[2]];
            if (a !== "" && a === b && b === c) {
                winner.innerHTML = "winner is " + this.currentPlayer;
                if (this.currentPlayer === "x") {
                    xCount++;
                    player1.innerHTML = xCount;
                } else if (this.currentPlayer === "0") {
                    oCount++;
                    player2.innerHTML = oCount;
                }
            }
            this.reset();
        });
    }

    step(tile, index) {
        if (tile.innerHTML) return;
        tile.innerHTML = this.currentPlayer;
        this.board[index] = this.currentPlayer;
        this.validateGame();
        this.changePlayer();
    }
}

const tiles = Array.from(document.querySelectorAll(".tile"));
const game = new TikTac(tiles);
tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
        game.step(tile, index);
    });
});