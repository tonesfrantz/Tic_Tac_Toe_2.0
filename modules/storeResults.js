export const gameStore = {
    newGame: function (game) {
        for (let i = 0; i < game.gameSize; i++) {
            game.playerInput[i] = [];
        }
        for (let i = 0; i < game.gameSize; i++) {
            game.playerInput[i] = [];
            for (let j = 0; j < game.gameSize; j++) {
                game.playerInput[i][j] = undefined;
            }
        }
        console.log(game.playerInput);

        console.log(`Current Player: ${game.currentPlayer}`);
    },
};

//Current Player Variable           -           // Complete.
// Store Game results
// Store PLayer Emoji
// Store variables in the Game Object
// THink of new game function.
// Think of state via previous game.
// Store score over multiple games.

// Keep building the Helpers test.   -          // Complete
