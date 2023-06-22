export const buttonListener = (game) => {
    for (let i = 0; i < game.gameSize; i++) {
        for (let j = 0; j < game.gameSize; j++) {
            const button = document.getElementById(j * game.gameSize + (i + 1));
            const currentPLayerScreen =
                document.getElementById('currentPlayer');

            button.addEventListener('click', () => {
                // console.log(`This is button ${i}`);
                //player swap
                if (game.playerInput[i][j] != undefined) {
                    return;
                } else if (
                    // game.playerBoolean == false
                    game.currentPlayer == game.player[2] ||
                    game.currentPlayer == ''
                ) {
                    button.innerHTML = game.player[1];
                    game.currentPlayer = game.player[1];
                    currentPLayerScreen.innerHTML = `Most Recent Move - Player: ${game.currentPlayer}`;
                    storePlayerInput(game, i, j);
                } else if (
                    // game.playerBoolean == true
                    game.currentPlayer == game.player[1] ||
                    game.currentPlayer == ''
                ) {
                    button.innerHTML = game.player[2];
                    game.currentPlayer = game.player[2];
                    currentPLayerScreen.innerHTML = `Most Recent Move - Player: ${game.currentPlayer}`;
                    storePlayerInput(game, i, j);
                }
                game.currentPlayerToggle();
                game.check_win();

                for (let i = 0; i < game.playerInput.length; i++) {
                    for (let j = 0; j < game.playerInput[i].length; j++) {
                        game.gameLog.push(game.playerInput[i][j]);
                        console.log(game.gameLog);
                    }
                }
                //***************************************************************************** */
                // **************** Trying to end game when all buttons selected by players *** //

                const checkUndefined = (gameLog) => {
                    const playAgainModule =
                        document.getElementById('playAgain');
                    if (gameLog != undefined) {
                        //gameLog.length 9 && This may be required
                        playAgainModule.style.display = 'block';
                    }
                };
                game.gameLog.every(checkUndefined);
                // console.log(game.playerInput[i][j]);
                // if (game.playerInput[i][j].includes(0)) {
                //     console.log(`Still undefined`);
                //     // playAgainModule.style.display = 'block';
                //     // return;
                // }
            });
        }
    }
};

//This function should be able to be re-factored as a loop so size does not matter.
export const storePlayerInput = (game, i, j) => {
    // const button = document.getElementById(buttonID);
    if (game.playerInput[i][j] != undefined) {
        return;
    } else {
        game.playerInput[i][j] = game.currentPlayer;
    }

    // if (buttonID <= game.gameSize) {
    //     game.playerInput[0][buttonID - 1] = game.currentPlayer;
    // } else if (buttonID > game.gameSize && buttonID <= game.gameSize * 2) {
    //     game.playerInput[1][buttonID - 1 - game.gameSize] = game.currentPlayer;
    // } else if (buttonID > game.gameSize * 2 && buttonID <= game.gameSize * 3) {
    //     game.playerInput[2][buttonID - 1 - game.gameSize * 2] =
    //         game.currentPlayer;
    // } else if (buttonID > game.gameSize * 3 && buttonID <= game.gameSize * 4) {
    //     game.playerInput[3][buttonID - 1 - game.gameSize * 3] =
    //         game.currentPlayer;
    // } else if (buttonID > game.gameSize * 4 && buttonID <= game.gameSize * 5) {
    //     game.playerInput[4][buttonID - 1 - game.gameSize * 4] =
    //         game.currentPlayer;
    // }
    // console.log(`Current player: ${game.currentPlayer}`);
    // console.log(`Player Input: ${game.playerInput}`);
};
