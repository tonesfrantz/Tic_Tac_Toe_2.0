console.log("Hi, I'm here. This is my Tic Tac Toe Logic!");

import {
    createGameButtons,
    createPlayerSelection,
    avatarButton,
    startGame,
} from './modules/create.js';
import { playAgain } from './modules/playAgain.js';
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
        score: {
            1: localStorage.getItem('player1_score'),
            2: localStorage.getItem('player2_score'),
        },
        player1: localStorage.getItem('player1'),
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
        let playAgainModule = document.getElementById('playAgain');
        for (let i = 0; i < allArrays.length; i++) {
            let winner = checkArraySame(allArrays[i]);
            if (winner == true) {
                console.log(`winner`);
                let gameCount = parseInt(this.multiGameStore.gamesPlayed);
                gameCount++;
                localStorage.setItem('gamesPlayed', gameCount);
                playAgain(game);
                playAgainModule.style.display = 'block';
                if (this.currentPlayer == this.player[1]) {
                    console.log(`player1 win`);
                    let player1Count = parseInt(this.multiGameStore.score[1]);
                    player1Count++;
                    localStorage.setItem('player1_score', player1Count);
                } else if (this.currentPlayer == this.player[2]) {
                    console.log(`Player 2 Win`);
                    let player2Count = parseInt(this.multiGameStore.score[2]);
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

avatarButton(game);
startGame(game);
