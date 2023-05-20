export const playAgain = (game) => {
    const playAgainModule = document.getElementById('playAgain');
    const playerNo = 2;
    const moduleChilren = document.createElement('div');
    moduleChilren.setAttribute('id', 'playAgainChild');
    playAgainModule.appendChild(moduleChilren);
    var selectModule = `<h1 id="moduleHeader">Tic Tac Toe</h1>`;
    for (let i = 1; i <= playerNo; i++) {
        let playerIcon = '';
        // let playerScore = '';
        if (i == 1) {
            playerIcon = game.player[1];
            // playerScore = game.multiGameStore.score[1];
        } else {
            playerIcon = game.player[2];
            // playerScore = game.multiGameStore.score[2];
        }

        selectModule += `<div id="player${i}" class="playerResults">Player ${i} - ${game.player[i]} Score: ${game.multiGameStore.score[i]}</div>`;
    }
    selectModule += `<div id="gamesPlayed" class="playerResults">Games Played: ${localStorage.getItem(
        'gamesPlayed'
    )}</div>`;
    selectModule += `<div id="resetGame" class="playerResults reset">Reset</div>`;
    selectModule += `<div id="playAgain" class="playerResults reset">Play Again</div>`;
    moduleChilren.innerHTML = selectModule;
};

export const playAgainButton = (game) => {
    let PAButton = document.getElementById('playAgain');
    PAButton.addEventListener('click', () => {});
};
