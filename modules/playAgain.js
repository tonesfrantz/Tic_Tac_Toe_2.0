export const playAgain = (game) => {
    game.multiGameStoreUpdate();
    const playAgainModule = document.getElementById('playAgain');
    const playerNo = 2;
    const moduleChilren = document.createElement('div');
    moduleChilren.setAttribute('id', 'playAgainChild');
    playAgainModule.appendChild(moduleChilren);
    let selectModule = `<h1 id="moduleHeader">Tic Tac Toe</h1>`;
    for (let i = 1; i <= playerNo; i++) {
        let playerIcon = '';
        let playerScore = [];
        if (i == 1) {
            playerIcon = game.multiGameStore.player[1];
        } else {
            playerIcon = game.multiGameStore.player[2];
        }

        selectModule += `<div id="player${i}" class="playerResults">Player ${i} - ${
            game.multiGameStore.player[i]
        } Score: ${localStorage.getItem(`player${[i]}_score`)}</div>`;
    }
    selectModule += `<div id="gamesPlayed" class="playerResults">Games Played: ${localStorage.getItem(
        'gamesPlayed'
    )}</div>`;
    selectModule += `<div id="winner" class="playerResults">Winner: ${localStorage.getItem(
        'winner'
    )}</div>`;
    selectModule += `<div id="playAgainButton" class="playerResults reset">Play Again</div>`;
    selectModule += `<div id="resetGameButton" class="playerResults reset">Reset</div>`;
    moduleChilren.innerHTML = selectModule;
};

export const playAgainButton = (game) => {
    game.multiGameStoreUpdate();
    const PAButton = document.getElementById('playAgainButton');

    PAButton.addEventListener('click', () => {
        const playAgainModule = document.getElementById('playAgain');

        playAgainModule.style.display = 'none';
        playAgainModule.innerHTML = '';
        game.player1Plus = 0;
        game.player2Plus = 0;
    });
};

export const resetGameButton = (game) => {
    game.multiGameStoreUpdate();
    const resetButton = document.getElementById('resetGameButton');
    const playAgainModule = document.getElementById('playAgain');
    const playerSelectionModule = document.getElementById('selectModule');
    resetButton.addEventListener('click', () => {
        fadeOut(playAgainModule);
        fadeIn(playerSelectionModule);
        resetGameComplete();
    });
};
function fadeOut(element) {
    let op = 1; // initial opacity
    let timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op -= op * 0.1;
    }, 60);
}
function fadeIn(element) {
    let op = 0.1; // initial opacity
    element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.1;
    }, 20);
    // if ((element.style.opacity = 0.9)) {
    //     resetGameComplete();
    // }
}

function resetGameComplete() {
    setTimeout(function () {
        window.location = window.location.href + '?eraseCache=true';
    }, 1050);
}
