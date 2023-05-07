//Create the DOM for Module and Game

export const createGameButtons = (game) => {
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
        // Assigne PLayer Icon to Scoreboard.
        let playerIcon = '';
        if (j == 1) {
            playerIcon = game.player1;
        } else {
            playerIcon = game.player2;
        }

        playerDivHTML += `<div id="player${j}" class="player">Player ${j} - ${playerIcon} -  Score:</div>`;
    }
    playerDivHTML += `</br><div id="currentPlayer">Most Recent Move${game.currentPlayer}</div>`;
    players.innerHTML = playerDivHTML;
};

// Module which will disappear after players selected
export const createPlayerSelection = () => {
    const playerSelctionModule = document.getElementById('selectModule');
    const playerNo = 2;
    const moduleChilren = document.createElement('div');
    moduleChilren.setAttribute('id', 'selectModuleChild');
    playerSelctionModule.appendChild(moduleChilren);
    var selectModule = `<h1 id="moduleHeader">Tic Tac Toe</h1>`;
    // Select avatar buttons
    for (let i = 1; i <= playerNo; i++) {
        selectModule += `<div id="playerAvatar${i}" class="selectAvatar">Player ${i} Select Avatar</br>'click'</div>`;
    }
    // Start Play
    selectModule += `<div id="startPlay" class="selectAvatar">START PLAY</div>`;
    moduleChilren.innerHTML = selectModule;
    // Once select avatar function has been written.
    // Create button to place into GAME OBJECT and Populate storage.
    // Will also flick off the startmodule.
};

export const avatarButton = () => {
    let player1RandomAvatar = document.getElementById('playerAvatar1');
    let player2RandomAvatar = document.getElementById('playerAvatar2');
    player1RandomAvatar.addEventListener('click', () => {
        // Have to work on this AJAX request and the SYNTAX
        // $.ajax({
        //     method: 'GET',
        //     url:
        //         'https://api.api-ninjas.com/v1/emoji?group=' +
        //         'smileys_emotion',
        //     headers: {
        //         'X-Api-Key': '6LoRkifXuzmXIuc0RtZGhw==wnVpcK2n3MQxe1NI',
        //     },
        //     contentType: 'application/json',
        //     success: function (result) {
        //         console.log(result);
        //     },
        //     error: function ajaxError(jqXHR) {
        //         console.error('Error: ', jqXHR.responseText);
        //     },
        // });
        console.log(`Player 1 Avatar`);
    });
    player2RandomAvatar.addEventListener('click', () => {
        console.log(`Player 2 Avatar`);
    });
};

const populateStorage = () => {
    localStorage.setItem('gamesPlayed', 0);
    localStorage.setItem('player1_score', 0);
    localStorage.setItem('player2_score', 0);
};
populateStorage();

// const selectAvatar = () => {
//     const randomKeyword = [
//         'smileys_emotion',
//         'people_body',
//         'component',
//         'animals_nature',
//         'food_drink',
//         'travel_places',
//         'activities',
//         'objects',
//         'symbols',
//         'flags',
//     ];
//     let length = randomKeyword.length;
//     function getRndInteger(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     let group = randomKeyword[getRndInteger(0, length)];
//     $.ajax({
//         method: 'GET',
//         url: 'https://api.api-ninjas.com/v1/emoji?group=' + group,
//         headers: { 'X-Api-Key': '6LoRkifXuzmXIuc0RtZGhw==wnVpcK2n3MQxe1NI' },
//         contentType: 'application/json',
//         success: function (result) {
//             console.log(result);
//         },
//         error: function ajaxError(jqXHR) {
//             console.error('Error: ', jqXHR.responseText);
//         },
//     });
// };

export const playAgain = (game) => {
    const playAgainModule = document.getElementById('playAgain');
    const playerNo = 2;
    const moduleChilren = document.createElement('div');
    moduleChilren.setAttribute('id', 'playAgainChild');
    playAgainModule.appendChild(moduleChilren);
    var selectModule = `<h1 id="moduleHeader">Tic Tac Toe</h1>`;
    for (let i = 1; i <= playerNo; i++) {
        let playerIcon = '';
        let playerScore = '';
        if (i == 1) {
            playerIcon = game.player1;
            playerScore = game.multiGameStore.player1_score;
        } else {
            playerIcon = game.player2;
            playerScore = game.multiGameStore.player2_score;
        }

        selectModule += `<div id="player${i}" class="playerResults">Player ${i} - ${playerIcon} Score: ${playerScore}</div>`;
    }
    selectModule += `<div id="gamesPlayed" class="playerResults">Games Played: ${localStorage.getItem(
        'gamesPlayed'
    )}</div>`;
    selectModule += `<div id="resetGame" class="playerResults reset">Reset</div>`;
    selectModule += `<div id="playAgain" class="playerResults reset">Play Again</div>`;
    moduleChilren.innerHTML = selectModule;
};
