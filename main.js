console.log("Hi, I'm here. This is my Tic Tac Toe Logic!");

import {
    createGameButtons,
    createPlayerSelection,
    playAgain,
    avatarButton,
} from './modules/create.js';
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

const game = {
    multiGameStore: {
        gamesPlayed: localStorage.getItem('gamesPlayed'),
        player1_score: localStorage.getItem('player1_score'),
        player2_score: localStorage.getItem('player2_score'),
        player1: localStorage.getItem('plaer1'),
        player2: localStorage.getItem('player2'),
    },

    gameSize: 3,
    player: {
        1: 'click1',
        2: 'click2',
    },
    // player1: 'click',
    // player2: 'click',
    currentPlayer: currentPlayer,
    playerInput: [],
    check_win: function () {
        let horizontal = horizontalArrays(this.playerInput);
        let vertical = verticalArrays(this.playerInput);
        let diagonal = diagonalArrays(this.playerInput);
        let allArrays = [...horizontal, ...vertical, ...diagonal];
        console.log(this.multiGameStore);
        for (let i = 0; i < allArrays.length; i++) {
            let winner = checkArraySame(allArrays[i]);
            if (winner == true) {
                console.log(`winner`);
                let gameCount = parseInt(this.multiGameStore.gamesPlayed);
                gameCount++;
                localStorage.setItem('gamesPlayed', gameCount);

                if (this.currentPlayer == this.player[1]) {
                    console.log(`plater1 win`);
                    let player1Count = parseInt(
                        this.multiGameStore.player1_score
                    );
                    player1Count++;
                    localStorage.setItem('player1_score', player1Count);
                } else if (this.currentPlayer == this.player[2]) {
                    console.log(`Player 2 Win`);
                    let player2Count = parseInt(
                        this.multiGameStore.player2_score
                    );
                    player2Count++;
                    localStorage.setItem('player2_score', player2Count);
                }
            }
        }
    },
};

createGameButtons(game);
createPlayerSelection(game);
gameStore.newGame(game);
buttonListener(game);
playAgain(game);
avatarButton(game);
