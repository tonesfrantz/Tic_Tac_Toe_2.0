export const buttonListener = (game) => {
    for (let i = 1; i <= game.gameSize * game.gameSize; i++) {
        const button = document.getElementById(i);
        const currentPLayerScreen = document.getElementById('currentPlayer');

        button.addEventListener('click', () => {
            // console.log(`This is button ${i}`);
            //player swap
            if (
                game.currentPlayer == game.player[2] ||
                game.currentPlayer == ''
            ) {
                button.innerHTML = game.player[1];
                game.currentPlayer = game.player[1];
                currentPLayerScreen.innerHTML = `Most Recent Move - Player: ${game.currentPlayer}`;
                storePlayerInput(game, i);
            } else {
                button.innerHTML = game.player[2];
                game.currentPlayer = game.player[2];
                currentPLayerScreen.innerHTML = `Most Recent Move - Player: ${game.currentPlayer}`;
                storePlayerInput(game, i);
            }
            game.currentPlayerToggle();
            // console.log(`Event listener Boolean ${game.playerBoolean}`);
            game.check_win();
            // console.log(game.playerInput);
            // console.log(`Current Player: ${game.currentPlayer}`);
        });
    }
};

//This function should be able to be re-factored as a loop so size does not matter.
export const storePlayerInput = (game, buttonID) => {
    const button = document.getElementById(buttonID);
    if (buttonID <= game.gameSize) {
        game.playerInput[0][buttonID - 1] = game.currentPlayer;
    } else if (buttonID > game.gameSize && buttonID <= game.gameSize * 2) {
        game.playerInput[1][buttonID - 1 - game.gameSize] = game.currentPlayer;
    } else if (buttonID > game.gameSize * 2 && buttonID <= game.gameSize * 3) {
        game.playerInput[2][buttonID - 1 - game.gameSize * 2] =
            game.currentPlayer;
    } else if (buttonID > game.gameSize * 3 && buttonID <= game.gameSize * 4) {
        game.playerInput[3][buttonID - 1 - game.gameSize * 3] =
            game.currentPlayer;
    } else if (buttonID > game.gameSize * 4 && buttonID <= game.gameSize * 5) {
        game.playerInput[4][buttonID - 1 - game.gameSize * 4] =
            game.currentPlayer;
    }
    // console.log(`Current player: ${game.currentPlayer}`);
    // console.log(`Player Input: ${game.playerInput}`);
};
