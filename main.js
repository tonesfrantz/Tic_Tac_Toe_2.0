console.log("Hi, I'm here. This is my Tic Tac Toe Logic!");

import {
    createGameButtons,
    createPlayerSelection,
    avatarButton,
    startGame,
} from './modules/create.js';
import { playAgain, playAgainButton } from './modules/playAgain.js';
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
    // Write function to call updated local storage.
    multiGameStore: {
        gamesPlayed: 0,
        // !localStorage.getItem('gamesPlayed')
        //     ? 0
        //     : parseInt(localStorage.getItem('gamesPlayed')),
        score: {
            1: 0,
            // !localStorage.getItem('player1_score')
            //     ? 0
            //     : parseInt(localStorage.getItem('player1_score')),
            2: 0,
            // !localStorage.getItem('player2_score')
            //     ? 0
            //     : parseInt(localStorage.getItem('player2_score')),
        },
        player1: '',
        player2: '',
    },
    multiGameStoreUpdate: function () {
        (this.multiGameStore.gamesPlayed = !localStorage.getItem('gamesPlayed')
            ? 0
            : parseInt(localStorage.getItem('gamesPlayed'))),
            (this.multiGameStore.score[1] = !localStorage.getItem(
                'player1_score'
            )
                ? 0
                : parseInt(localStorage.getItem('player1_score'))),
            (this.multiGameStore.score[2] = !localStorage.getItem(
                'player2_score'
            )
                ? 0
                : parseInt(localStorage.getItem('player2_score'))),
            (this.multiGameStore.player1 = !localStorage.getItem('player1')
                ? this.player1
                : localStorage.getItem('player1')),
            (this.multiGameStore.player2 = !localStorage.getItem('player2')
                ? this.player2
                : localStorage.getItem('player2'));
    },

    gameSize: 3,
    player: {
        1: 'click1',
        2: 'click2',
    },

    currentPlayer: currentPlayer,
    playerBoolean: false,
    player1Plus: 0,
    player1Plus: 0,
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
        console.log(this.multiGameStore);
        let playAgainModule = document.getElementById('playAgain');
        for (let i = 0; i < allArrays.length; i++) {
            let winner = checkArraySame(allArrays[i]);
            if (winner == true) {
                if (this.playerBoolean === false) {
                    this.player2Plus++;
                }
                if (this.playerBoolean === true) {
                    this.player1Plus++;
                }
                //
                // console.log(`Gamecount BEFORE applying win ${gameCount}`);
                localStorageIncrease(game);

                // console.log(`Gamecount AFTER applying win ${gameCount}`);
                console.log(game.multiGameStore);

                createGameButtons(game);
                buttonListener(game);
                gameStore.newGame(game);
                playAgain(game);
                resetPlayAgain(game);
                playAgainModule.style.display = 'block';
                // console.log(`After win: ${this.playerBoolean}`);
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
playAgainButton(game);

const localStorageIncrease = (game) => {
    // // Get stored Data

    let player1Count = parseInt(localStorage.getItem('player1_score'));
    let player2Count = parseInt(localStorage.getItem('player1_score'));
    let gamesPlayed = parseInt(localStorage.getItem('gamesPlayed'));
    console.log(
        `Local storage Before function: Gamesplayed: ${gamesPlayed}, Player 1: ${player1Count}, Player 2: ${player2Count}.`
    );
    // //Assign Score
    if (game.player1Plus > 0) {
        player1Count = player1Count + game.player1Plus;
    }
    if (game.player2Plus > 0) {
        player2Count = player2Count + game.player2Plus;
    }
    gamesPlayed++;
    console.log(
        `Local storage After function: Gamesplayed: ${gamesPlayed}, Player 1: ${player1Count}, Player 2: ${player2Count}.`
    );
    // //Assign Storage
    localStorage.setItem('player1_score', player1Count);
    localStorage.setItem('player2_score', player2Count);
    localStorage.setItem('gamesPlayed', gamesPlayed);
    game.multiGameStoreUpdate();
    console.log(`MultiGameStore ${game.multiGameStore}`);
};

// Rest the boolean and currentPlayer
const resetPlayAgain = (game) => {
    game.playerBoolean = false;
    game.currentPlayer = '';
    game.player1Plus = 0;
    game.player2Plus = 0;
};
