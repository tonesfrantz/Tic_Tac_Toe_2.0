console.log("Hi, I'm here. This is my Tic Tac Toe Logic!");

import { createGameButtons, createPlayerSelection } from './modules/create.js';
import { gameStore } from './modules/storeResults.js';
import { buttonListener } from './modules/eventListener.js';
// Store GameSize, Player, Multi-Game-Score, Current Game player Turn.

let currentPlayer = '';
const multiGameScore = {
    gamesPlayed: 0,
    player1: 0,
    player2: 0,
};
const game = {
    gameSize: 3,
    player1: 'X',
    player2: 'O',
    currentPlayer: currentPlayer,
    playerInput: [],
};

// // IDEA 1:

let ticTacToe = {
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

createGameButtons(game);
createPlayerSelection(multiGameScore);
gameStore.newGame(game);
buttonListener(game);
