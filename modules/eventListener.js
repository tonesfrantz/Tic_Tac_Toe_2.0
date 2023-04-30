export const buttonListener = (game) => {
    for (let i = 1; i <= game.gameSize * game.gameSize; i++) {
        const button = document.getElementById(i);
        const currentPLayerScreen = document.getElementById('currentPlayer');
        //Create button id with the word button.
        // let playerClass = document.getElementById('currentPlayer');
        button.addEventListener('click', () => {
            console.log(`This is button ${i}`);
            //player swap
            if (
                game.currentPlayer == game.player2 ||
                game.currentPlayer == ''
            ) {
                button.innerHTML = game.player1;
                game.currentPlayer = game.player1;
                currentPLayerScreen.innerHTML = `Current player: ${game.currentPlayer}`;
                storePlayerInput(game, i);
            } else {
                button.innerHTML = game.player2;
                game.currentPlayer = game.player2;
                currentPLayerScreen.innerHTML = `Current player: ${game.currentPlayer}`;
                storePlayerInput(game, i);
            }
            game.check_win();
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
    console.log(`Current player: ${game.currentPlayer}`);
    console.log(`Player Input: ${game.playerInput}`);
};
