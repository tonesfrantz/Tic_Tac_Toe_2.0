export const buttonListener = (game) => {
    for (let i = 0; i < game.gameSize; i++) {
        for (let j = 0; j < game.gameSize; j++) {
            const button = document.getElementById(j * game.gameSize + (i + 1));
            const currentPLayerScreen =
                document.getElementById('currentPlayer');

            button.addEventListener('click', () => {
                console.log(game.multiGameStore);
                if (game.playerInput[i][j] != undefined) {
                    return;
                } else if (
                    game.currentPlayer == game.player[2] ||
                    game.currentPlayer == ''
                ) {
                    button.innerHTML = game.player[1];
                    game.currentPlayer = game.player[1];
                    currentPLayerScreen.innerHTML = `Most Recent Player: ${game.currentPlayer}`;
                    storePlayerInput(game, i, j);
                } else if (
                    game.currentPlayer == game.player[1] ||
                    game.currentPlayer == ''
                ) {
                    button.innerHTML = game.player[2];
                    game.currentPlayer = game.player[2];
                    currentPLayerScreen.innerHTML = `Most Recent Player: ${game.currentPlayer}`;
                    storePlayerInput(game, i, j);
                }
                game.currentPlayerToggle();
                game.check_win();

                for (let i = 0; i < game.playerInput.length; i++) {
                    for (let j = 0; j < game.playerInput[i].length; j++) {
                        game.gameLog.push(game.playerInput[i][j]);
                        // console.log(game.gameLog);
                    }
                }
                //***************************************************************************** */
                // **************** Trying to end game when all buttons selected by players *** //

                const checkUndefined = (gameLog) => {
                    const playAgainModule =
                        document.getElementById('playAgain');
                    if (gameLog != undefined) {
                        // playAgainModule.style.display = 'block';
                    }
                };
                game.gameLog.every(checkUndefined);
            });
        }
    }
};

//This function should be able to be re-factored as a loop so size does not matter.
export const storePlayerInput = (game, i, j) => {
    if (game.playerInput[i][j] != undefined) {
        return;
    } else {
        game.playerInput[i][j] = game.currentPlayer;
    }
};
