console.log("Hi, I'm here. This is my Tic Tac Toe Logic!");

import {
    createGameButtons,
    createPlayerSelection,
    avatarButton,
    startGame,
} from './modules/create.js';
import { localStorageIncrease } from './modules/localStorage.js';
import {
    playAgain,
    playAgainButton,
    resetGameButton,
} from './modules/playAgain.js';
import { gameStore } from './modules/storeResults.js';
import { buttonListener } from './modules/eventListener.js';
import {
    checkArraySame,
    horizontalArrays,
    verticalArrays,
    diagonalArrays,
} from './helpers.js';

let currentPlayer = '';

const game = {
    multiGameStore: {
        gamesPlayed: 0,

        score: {
            1: 0,
            2: 0,
        },
        player1: '',
        player2: '',
        winner: '',
    },
    multiGameStoreUpdate: function () {
        // console.log(
        //     `Games Played BEFORE UPDATE ${this.multiGameStore.gamesPlayed}`
        // );
        // console.log(
        //     `Games Played Local storage BEFORE update ${localStorage.getItem(
        //         'gamesPlayed'
        //     )}`
        // );
        (this.multiGameStore.gamesPlayed = !localStorage.getItem('gamesPlayed')
            ? 0
            : parseInt(localStorage.getItem('gamesPlayed'))),
            // console.log(
            //     `Games Played AFTER UPDATE ${this.multiGameStore.gamesPlayed}`
            // );

            //     console.log(`P1 BEFORE update ${this.multiGameStore.score[1]}`);
            // console.log(
            //     `P1 Local storage BEFORE update ${localStorage.getItem(
            //         'player1_score'
            //     )}`
            // );

            (this.multiGameStore.score[1] = !localStorage.getItem(
                'player1_score'
            )
                ? 0
                : parseInt(localStorage.getItem('player1_score'))),
            //     console.log(`P1 AFTER update ${this.multiGameStore.score[1]}`);
            // `P1 Local storage AFTER update ${localStorage.getItem(
            //     'player1_score'
            // )}`;
            // console.log(`P2 Score BEFORE update ${this.multiGameStore.score[2]}`);
            // console.log(
            //     `P2 Local storage BEFORE update ${localStorage.getItem(
            //         'player2_score'
            //     )}`
            // );
            (this.multiGameStore.score[2] = !localStorage.getItem(
                'player2_score'
            )
                ? 0
                : parseInt(localStorage.getItem('player2_score'))),
            // console.log(`P2 AFTER update ${this.multiGameStore.score[2]}`);
            // console.log(
            //     `P2 Local storage AFTER update ${localStorage.getItem(
            //         'player2_score'
            //     )}`
            // );
            (this.multiGameStore.player1 = !localStorage.getItem('player1')
                ? 0
                : localStorage.getItem('player1'));
        this.multiGameStore.player2 = !localStorage.getItem('player2')
            ? 0
            : localStorage.getItem('player2');
        this.multiGameStore.winner = !localStorage.getItem('winner')
            ? 0
            : localStorage.getItem('winner');
    },

    gameSize: 3,
    player: {
        1: '',
        2: '',
    },

    currentPlayer: currentPlayer,
    playerBoolean: false,
    player1Plus: 0,
    player1Plus: 0,
    gameLog: [],
    currentPlayerToggle: function () {
        (this.playerBoolean = !this.playerBoolean) ? false : true;
    },

    playerInput: [],
    check_win: function () {
        console.log(`Before win: ${this.playerBoolean}`);
        let horizontal = horizontalArrays(this.playerInput);
        let vertical = verticalArrays(this.playerInput);
        let diagonal = diagonalArrays(this.playerInput);
        let allArrays = [...horizontal, ...vertical, ...diagonal];
        let playAgainModule = document.getElementById('playAgain');
        this.player1Plus = 0;
        this.player2Plus = 0;
        console.log(`CHECKWIN Game Player 1: ${this.player1Plus}`);
        console.log(`CHECKWIN Game Player 2: ${this.player2Plus}`);
        for (let i = 0; i < allArrays.length; i++) {
            let winner = checkArraySame(allArrays[i]);
            if (winner == true) {
                if (this.playerBoolean === false) {
                    this.player2Plus++;
                    this.multiGameStore.winner = this.multiGameStore.player2;
                    console.log(`PLayer2PLus:${this.player2Plus}`);
                    console.log(`PLayer1PLus:${this.player1Plus}`);
                    // localStorageIncrease(game);
                }
                if (this.playerBoolean === true) {
                    this.player1Plus++;
                    this.multiGameStore.winner = this.multiGameStore.player1;
                    console.log(`PLayer1PLus:${this.player1Plus}`);
                    console.log(`PLayer2PLus:${this.player2Plus}`);
                    // localStorageIncrease(game);
                }
                localStorageIncrease(game);
                gameStore.newGame(game);
                resetPlayAgain(game);
                createGameButtons(game);
                playAgain(game);
                buttonListener(game);
                playAgainModule.style.display = 'block';
                playAgainButton(game);
                resetGameButton(game);
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

// Reset the boolean and currentPlayer
const resetPlayAgain = (game) => {
    game.playerBoolean = false;
    game.currentPlayer = '';
    game.player1Plus = 0;
    game.player2Plus = 0;
};
