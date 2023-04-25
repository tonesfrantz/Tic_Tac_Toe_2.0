export const buttonListener = (game) => {
    for (let i = 1; i <= game.gameSize * game.gameSize; i++) {
        const button = document.getElementById(i);
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
                console.log(game.currentPlayer);
            } else {
                button.innerHTML = game.player2;
                game.currentPlayer = game.player2;
                console.log(game.currentPlayer);
            }
        });
    }
};
