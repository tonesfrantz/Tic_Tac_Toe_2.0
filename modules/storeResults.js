export const reset = {
    playerInput: [],
    newGame: function (gameSize) {
        let i = gameSize * gameSize;
        console.log(i);
        while (i > 0) {
            this.playerInput[i] = '-';
            i--;
        }
        for(let i = 0; i < gameSize; i++) {
            playerInput[i] = [];
            for(let j = 0; i < gameSize; i++) {
                playerInput[i][j] = undefined;

            }
        }
        console.log(this.playerInput);
    },
};
