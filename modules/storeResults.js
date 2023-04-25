export const game = {
    playerInput: [],
    newGame: function (gameSize) {
        let i = gameSize * gameSize;
        console.log(i);
        while (i > 0) {
            this.playerInput[i] = '-';
            i--;
        }
        for (let i = 0; i < gameSize; i++) {
            playerInput[i] = [];
            for (let j = 0; i < gameSize; i++) {
                playerInput[i][j] = undefined;
            }
        }
        console.log(this.playerInput);
    },
};

//Current Player Variable
// Store Game results
// Store PLayer Emoji
// Store variables in the Game Object
// THink of new game function.
// Think of state via previous game.
// Store score over multiple games.

// Keep building the Helpers test.
