export const gameStoreArray = {
    newGame: function (game) {
        for (let i = 0; i < game.gameSize; i++) {
            game.playerInput[i] = [];
            // console.log(`Console Log: i${i}`);
        }
        for (let i = 0; i < game.gameSize; i++) {
            game.playerInput[i] = [];
            for (let j = 0; j < game.gameSize; j++) {
                game.playerInput[i][j] = undefined;
                // console.log(`Console Log: i & j:${i}, ${j}`);
            }
        }
        // console.log(game.playerInput);
        // console.log(`Current Player: ${game.currentPlayer}`);
    },
};
