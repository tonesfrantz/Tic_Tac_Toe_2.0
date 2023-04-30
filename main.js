console.log("Hi, I'm here. This is my Tic Tac Toe Logic!");

import { createGameButtons, createPlayerSelection } from './modules/create.js';
import { gameStore } from './modules/storeResults.js';
import { buttonListener } from './modules/eventListener.js';
import {
    checkArraySame,
    horizontalArrays,
    verticalArrays,
    diagonalArrays,
} from './helpers.js';
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
    check_win: function () {
        let horizontal = horizontalArrays(this.playerInput);
        let vertical = verticalArrays(this.playerInput);
        let diagonal = diagonalArrays(this.playerInput);
        let allArrays = [...horizontal, ...vertical, ...diagonal];

        for (let i = 0; i < allArrays.length; i++) {
            let winner = checkArraySame(allArrays[i]);
            if (winner == true) {
                console.log(`Winner is: ${game.currentPlayer}`);
            }
        }
    },
};

createGameButtons(game);
createPlayerSelection(multiGameScore);
gameStore.newGame(game);
buttonListener(game);
