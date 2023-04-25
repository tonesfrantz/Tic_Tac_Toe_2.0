const createButtons = (gameSize) => {
    const body = document.getElementById('main');
    const players = document.getElementById('players');
    var buttonDivHTML = '';
    for (let i = 0; i < gameSize * gameSize; i++) {
        // Create id with name 'button' and number
        buttonDivHTML += `<div id="${i + 1}" class="button">&#11035;</div>`;
    }
    body.innerHTML = buttonDivHTML;
    var playerDivHTML = '';
    for (let j = 1; j <= 2; j++) {
        playerDivHTML += `<div id="player${j}" class="player">Player ${j}</div>`;
    }
    playerDivHTML += `</br><div id="currentPlayer" class="player1">Current Player: 1 'X'</div>`;
    players.innerHTML = playerDivHTML;
};

export { createButtons };
