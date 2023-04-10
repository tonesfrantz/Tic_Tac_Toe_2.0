console.log("Hi, I'm here. This is my Tic Tac Toe Logic!");

// // IDEA 1:

const x = 'x';
const o = 'o';
const y = null;
let gameSize = 3;

let ticTacToe = {
    playerInput: {},
    createGame: function (gameSize) {
        let i = gameSize * gameSize;
        console.log(i);
        while (i > 0) {
            this.playerInput[i] = '-';
            i--;
        }
    },
    checkWin: function (playerInput) {
        if ((gameSize = 3)) {
            // Row 1
            if (
                this.playerInput[1] == this.playerInput[2] &&
                this.playerInput[3] == this.playerInput[2]
            ) {
                console.log('WIN1');
            }
            // Row 2
            else if (
                this.playerInput[4] == this.playerInput[5] &&
                this.playerInput[6] == this.playerInput[5]
            ) {
                console.log('WIN2');
            }
            //Row 3
            else if (
                this.playerInput[7] == this.playerInput[8] &&
                this.playerInput[9] == this.playerInput[8]
            ) {
                console.log('WIN3');
            }
            // Diagonal Top left Bottom Left
            else if (
                this.playerInput[1] == this.playerInput[5] &&
                this.playerInput[9] == this.playerInput[5]
            ) {
                console.log('WIN4');
            }
            // Diagonal Top Right
            else if (
                this.playerInput[3] == this.playerInput[5] &&
                this.playerInput[7] == this.playerInput[5]
            ) {
                console.log('WIN5');
            }
            // Column 1
            else if (
                this.playerInput[1] == this.playerInput[4] &&
                this.playerInput[7] == this.playerInput[4]
            ) {
                console.log('WIN6');
            }
            // Column 2
            else if (
                this.playerInput[2] == this.playerInput[5] &&
                this.playerInput[8] == this.playerInput[5]
            ) {
                console.log('WIN7');
            }
            // Column 3
            else if (
                this.playerInput[3] == this.playerInput[6] &&
                this.playerInput[9] == this.playerInput[6]
            ) {
                console.log('WIN8');
            }
        }
    },
};

console.log(ticTacToe.createGame(gameSize));
console.log(ticTacToe.playerInput);

// checkWin: function (a) {
//     let i = 9;
//     if (this.playerInput[1] == this.playerInput[2]) {
//         console.log(`Win`);
//     }
//     console.log(this.playerInput[1]);
// while (i > 0) {
//     if (
//         (this.playerInput[1] == this.playerInput[2]) ==
//         this.playerInput[3]
//     ) {
//         console.log('WIN');
//     }
//     console.log(`This is position ${i}: ${this.playerInput[i]}`);
//     i--;
// }

// console.log(ticTacToe.checkWin(this.playerInput));
// console.log(ticTacToe.playerInput);
// console.log(ticTacToe.createGame(gameSize));

// // IDEA 2:

// let gameSize = 3;
// let gameInput = [];

// let createGame = function (gameSize) {
//     for (i = 0; i < gameSize; i++) {
//         gameInput[i] = gameInput.from(gameSize);
//         console.log(gameInput);
//         // for (j = 1; j < gameSize; j++) {
//         //     gameInput[i].push('-');
//         // }
//     }
// };

// createGame(gameSize);
// console.log(gameInput);

export { gameSize };
