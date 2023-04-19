export const reset = {
    playerInput: {},
    newGame: function (gameSize) {
        let i = gameSize * gameSize;
        console.log(i);
        while (i > 0) {
            this.playerInput[i] = '-';
            i--;
        }
        console.log(this.playerInput);
    },
};
