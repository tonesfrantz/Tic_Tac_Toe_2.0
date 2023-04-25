//Create the DOM for Module and Game

const createGameButtons = (game) => {
    const body = document.getElementById('main');
    const players = document.getElementById('players');

    var buttonDivHTML = '';
    for (let i = 0; i < game.gameSize * game.gameSize; i++) {
        // Create id with name 'button' and number
        buttonDivHTML += `<div id="${i + 1}" class="button">&#11035;</div>`;
    }
    body.innerHTML = buttonDivHTML;
    var playerDivHTML = '';
    for (let j = 1; j <= 2; j++) {
        playerDivHTML += `<div id="player${j}" class="player">Player ${j} Score:</div>`;
    }
    playerDivHTML += `</br><div id="currentPlayer">Current Player: ${game.currentPlayer}</div>`;
    players.innerHTML = playerDivHTML;
};

// Module which will disapear after players selected
const createPlayerSelection = (multiGameScore) => {
    const playerSelctionModule = document.getElementById('selectModule');
    const playerNo = 2;
    const moduleChilren = document.createElement('div');
    moduleChilren.setAttribute('id', 'selectModuleChild');
    playerSelctionModule.appendChild(moduleChilren);
    var selectModule = `<h1 id="moduleHeader">Tic Tac Toe</h1>`;
    for (let i = 1; i <= playerNo; i++) {
        selectModule += `<div id="player${i}" class="playerSelect">Player ${i} Select Avatar</div>`;
    }

    //Above creates start screen to choose avatar.
    //May need to put this in another function to crate another module to replay.
    //Below is to see score and reset or play again... (Refactor into new function)
    selectModule += `<div id="gamesPlayed" class="playerScore">Games Played: ${multiGameScore.gamesPlayed}</div>`;
    selectModule += `<div id="player_1_Score" class="playerScore">Player 1 Score: ${multiGameScore.player1}</div>`;
    selectModule += `<div id="player_2_Score" class="playerScore">Player 2 Score: ${multiGameScore.player1}</div>`;
    selectModule += `<div id="reset" class="playerScore restoreGame">Reset Game</div>`;
    selectModule += `<div id="play" class="playerScore restoreGame">Play</div>`;
    moduleChilren.innerHTML = selectModule;
};

export { createGameButtons, createPlayerSelection };
