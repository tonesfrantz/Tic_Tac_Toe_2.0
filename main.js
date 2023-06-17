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
        console.log(
            `Games Played BEFORE UPDATE ${this.multiGameStore.gamesPlayed}`
        );
        (this.multiGameStore.gamesPlayed = !localStorage.getItem('gamesPlayed')
            ? 0
            : parseInt(localStorage.getItem('gamesPlayed'))),
            console.log(
                `Games Played AFTER UPDATE ${this.multiGameStore.gamesPlayed}`
            );
        console.log(`P1 BEFORE update ${this.multiGameStore.score[1]}`);
        (this.multiGameStore.score[1] = !localStorage.getItem('player1_score')
            ? 0
            : parseInt(localStorage.getItem('player1_score'))),
            console.log(`P1 AFTER update ${this.multiGameStore.score[1]}`);
        console.log(`P2 BEFORE update ${this.multiGameStore.score[2]}`);
        (this.multiGameStore.score[2] = !localStorage.getItem('player2_score')
            ? 0
            : parseInt(localStorage.getItem('player2_score'))),
            console.log(`P2 BEfore update ${this.multiGameStore.score[2]}`);
        console.log(`P1_ICON BEFORE update ${this.multiGameStore.player1}`);
        // (this.multiGameStore.player1 = !localStorage.getItem('player1')
        //     ? this.player1
        //     : localStorage.getItem('player1')),
        //     console.log(`P1_ICON AFTER update ${this.multiGameStore.player1}`);
        // console.log(`P2_ICON BEFORE update ${this.multiGameStore.player2}`);
        // this.multiGameStore.player2 = !localStorage.getItem('player2')
        //     ? this.player2
        //     : localStorage.getItem('player2');
        // console.log(`P2_ICON AFTER update ${this.multiGameStore.player2}`);
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
        // console.log(this.multiGameStore);
        let playAgainModule = document.getElementById('playAgain');
        for (let i = 0; i < allArrays.length; i++) {
            let winner = checkArraySame(allArrays[i]);
            //Removing Undefined value by restating here.
            this.player1Plus = 0;
            this.player2Plus = 0;
            if (winner == true) {
                if (this.playerBoolean === false) {
                    this.player2Plus++;
                    console.log(`PLayer2PLus:${this.player2Plus}`);
                    console.log(`PLayer1PLus:${this.player1Plus}`);
                    localStorageIncrease(game);
                }
                if (this.playerBoolean === true) {
                    this.player1Plus++;
                    console.log(`PLayer1PLus:${this.player1Plus}`);
                    console.log(`PLayer2PLus:${this.player2Plus}`);
                    localStorageIncrease(game);
                }
                //
                // console.log(`Gamecount BEFORE applying win ${gameCount}`);

                // console.log(`Gamecount AFTER applying win ${gameCount}`);
                // console.log(game.multiGameStore);
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
    game.multiGameStoreUpdate();
    let player1Count = parseInt(localStorage.getItem('player1_score'));
    let player2Count = parseInt(localStorage.getItem('player1_score'));
    let gamesPlayed = parseInt(localStorage.getItem('gamesPlayed'));
    console.log('Read before assign storage');
    console.log(parseInt(localStorage.getItem('player1_score')));
    console.log(parseInt(localStorage.getItem('player2_score')));
    console.log(parseInt(localStorage.getItem('gamesPlayed')));
    console.log(`MultiGameStore BEFORE storage `);
    console.log(game.multiGameStore);
    console.log(
        `Local storage Before function: Gamesplayed: ${gamesPlayed}, Player 1: ${player1Count}, Player 2: ${player2Count}.`
    );
    // //Assign Score
    if (game.player1Plus > 0) {
        gamesPlayed++;
        player1Count = player1Count + game.player1Plus;
        localStorage.setItem('player1_score', player1Count);
        localStorage.setItem('player2_score', player2Count);
        localStorage.setItem('gamesPlayed', gamesPlayed);
        return;
    }
    if (game.player2Plus > 0) {
        gamesPlayed++;
        player2Count = player2Count + game.player2Plus;
        localStorage.setItem('player1_score', player1Count);
        localStorage.setItem('player2_score', player2Count);
        localStorage.setItem('gamesPlayed', gamesPlayed);
        return;
    }

    console.log(
        `Local storage After function: Gamesplayed: ${gamesPlayed}, Player 1: ${player1Count}, Player 2: ${player2Count}.`
    );
    // //Assign Storage

    console.log('Read after assign storage');
    console.log(parseInt(localStorage.getItem('player1_score')));
    console.log(parseInt(localStorage.getItem('player2_score')));
    console.log(parseInt(localStorage.getItem('gamesPlayed')));
    // game.multiGameStoreUpdate();
    console.log(`MultiGameStore AFTER storage`);
    console.log(game.multiGameStore);
};

// Rest the boolean and currentPlayer
const resetPlayAgain = (game) => {
    game.playerBoolean = false;
    game.currentPlayer = '';
    game.player1Plus = 0;
    game.player2Plus = 0;
};
