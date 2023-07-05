import {
    createGameButtons,
    createPlayerSelection,
    avatarButton,
    startGame,
} from './create.js';
import { localStorageIncrease } from './localStorage.js';
import { playAgain, playAgainButton, resetGameButton } from './playAgain.js';
import { gameStoreArray } from './newEmptyGameStorage.js';
import { buttonListener } from './eventListener.js';
import {
    checkArraySame,
    horizontalArrays,
    verticalArrays,
    diagonalArrays,
} from './helpers.js';

// let currentPlayer = '';

const game = {
    multiGameStore: {
        gamesPlayed: 0,
        currentPlayer: '',
        score: {
            1: 0,
            2: 0,
        },
        player: {
            1: '',
            2: '',
        },
        winner: '',
    },
    multiGameScoreCopy: {
        gamesPlayed: 0,
        currentPlayer: '',
        score: {
            1: 0,
            2: 0,
        },
        player: {
            1: '',
            2: '',
        },
        winner: '',
    },
    multiGameStoreUpdate: function () {
        this.multiGameStore = !localStorage.getItem('multiGameStore')
            ? this.multiGameScoreCopy
            : JSON.parse(localStorage.getItem('multiGameStore'));
        // (this.multiGameStore.gamesPlayed = !localStorage.getItem('gamesPlayed')
        //     ? 0
        //     : parseInt(localStorage.getItem('gamesPlayed'))),
        //     (this.multiGameStore.score[1] = !localStorage.getItem(
        //         'player1_score'
        //     )
        //         ? 0
        //         : parseInt(localStorage.getItem('player1_score'))),
        //     (this.multiGameStore.score[2] = !localStorage.getItem(
        //         'player2_score'
        //     )
        //         ? 0
        //         : parseInt(localStorage.getItem('player2_score'))),
        //     (this.multiGameStore.player[1] = !localStorage.getItem('player1')
        //         ? 0
        //         : localStorage.getItem('player1'));
        // this.multiGameStore.player[2] = !localStorage.getItem('player2')
        //     ? 0
        //     : localStorage.getItem('player2');
        // this.multiGameStore.winner = !localStorage.getItem('winner')
        //     ? 0
        //     : localStorage.getItem('winner');
    },

    gameSize: 3,
    currentPlayerEmoji: function () {
        return this.playerBoolean === false
            ? (this.multiGameStore.currentPlayer =
                  this.multiGameStore.player[1])
            : (this.multiGameStore.currentPlayer =
                  this.multiGameStore.player[2]);
    },
    playerBoolean: false,
    player1Plus: 0,
    player2Plus: 0,
    gameLog: [],
    currentPlayerToggle: function () {
        this.playerBoolean = !this.playerBoolean;
    },

    playerInput: [],
    checkWin: function () {
        console.log(`BOOLEAN Before win: ${this.playerBoolean}`);
        let horizontal = horizontalArrays(this.playerInput);
        let vertical = verticalArrays(this.playerInput);
        let diagonal = diagonalArrays(this.playerInput);
        let allArrays = [...horizontal, ...vertical, ...diagonal];
        let playAgainModule = document.getElementById('playAgain');
        this.player1Plus = 0;
        this.player2Plus = 0;
        for (let i = 0; i < allArrays.length; i++) {
            let winner = checkArraySame(allArrays[i]);
            if (winner === true) {
                if (this.playerBoolean === true) {
                    this.player2Plus++;
                    console.log(this.playerInput);
                    // console.log(
                    //     `Player 2 winner: ${(this.multiGameStore.winner =
                    //         this.multiGameStore.player[2])}`
                    // );
                    // console.log(`Player2:${this.multiGameStore.player[2]}`);
                    // console.log(`Winner${this.multiGameStore.winner}`);
                }
                if (this.playerBoolean === false) {
                    this.player1Plus++;
                    console.log(this.playerInput);
                    // console.log(
                    //     `Player 1 winner: ${(this.multiGameStore.winner =
                    //         this.multiGameStore.player[1])}`
                    // );
                    // console.log(`Player1:${this.multiGameStore.player[1]}`);
                    // console.log(`Winner${this.multiGameStore.winner}`);
                }
                localStorageIncrease(game);
                gameStoreArray.newGame(game);
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
gameStoreArray.newGame(game);
buttonListener(game);
avatarButton(game);
startGame(game);

// Reset the boolean and currentPlayer
const resetPlayAgain = (game) => {
    game.playerBoolean = true;
    game.multiGameStore.currentPlayer = game.multiGameStore.player[1];
    game.player1Plus = 0;
    game.player2Plus = 0;
};
