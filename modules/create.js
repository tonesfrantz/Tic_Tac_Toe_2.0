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
        playerDivHTML += `<div id="player${j}" class="player">Player ${j} ${game.player[j]} -  Score: ${game.multiGameStore.score[j]}</div>`;
    }
    playerDivHTML += `</br><div id="currentPlayer">Most Recent Move${game.currentPlayer}</div>`;
    players.innerHTML = playerDivHTML;
    // console.log(`playerboolean - createFunction ${game.playerBoolean}`);
    // game.multiGameStoreUpdate();
};

// Module which will disappear after players selected
export const createPlayerSelection = (game) => {
    const playerSelectionModule = document.getElementById('selectModule');
    const playerNo = 2;
    const moduleChilren = document.createElement('div');
    moduleChilren.setAttribute('id', 'selectModuleChild');
    playerSelectionModule.appendChild(moduleChilren);
    var selectModule = `<h1 id="moduleHeader">Tic Tac Toe</h1>`;
    // Select avatar buttons
    for (let i = 1; i <= playerNo; i++) {
        selectModule += `<div id="playerAvatar${i}" class="selectAvatar">Player ${i} Select Avatar <br/>${game.player[i]}</div>`;
    }
    // Start Play
    selectModule += `<div id="startPlay" class="selectAvatar">START PLAY</div>`;
    moduleChilren.innerHTML = selectModule;
};

// Select Emoji from the API
export const avatarButton = (game) => {
    let player1RandomAvatar = document.getElementById('playerAvatar1');
    let player2RandomAvatar = document.getElementById('playerAvatar2');
    player1RandomAvatar.addEventListener('click', () => {
        emojiAPICall(game, 'smileys_emotion', 1, player1RandomAvatar);
    });
    player2RandomAvatar.addEventListener('click', () => {
        emojiAPICall(game, 'animals_nature', 2, player2RandomAvatar);
    });
};

const emojiAPICall = (game, requestGroup, gamePlayer, elementToChange) => {
    // Have to work on this AJAX request and the SYNTAX
    // let requestGroup = 'smileys_emotion';
    let randomEmoji = Math.floor(Math.random() * 31);
    fetch(`https://api.api-ninjas.com/v1/emoji?group=${requestGroup}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': '6LoRkifXuzmXIuc0RtZGhw==wnVpcK2n3MQxe1NI',
        },
    })
        .then((response) => response.json())
        .then()
        // Alyways use curly brackets in arrow function
        .then((result) => {
            console.log(
                (game.player[gamePlayer] = result[randomEmoji].character)
            );
            elementToChange.innerHTML = `Player ${gamePlayer} Select Avatar <br/>${game.player[gamePlayer]}`;
        })
        .catch((error) => console.error(error));
    // setTimeout(applyPlayer1, 1500);
    // function applyPlayer1() {
    //     elementToChange.innerHTML = `Player ${gamePlayer} Select Avatar <br/>${game.player[gamePlayer]}`;
    // }
};

//Notes for Functionality:
// Writie

// Do you have to clear local storage before setting?
// The setting of local storage and retreiving may need to be put in a function that can be called.
export const startGame = (game) => {
    let startButton = document.getElementById('startPlay');
    let moduleClass = document.getElementById('selectModule');
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');
    startButton.addEventListener('click', () => {
        localStorage.setItem('player1_score', 0);
        localStorage.setItem('player2_score', 0);
        localStorage.setItem('player1', game.player[1]);
        localStorage.setItem('player2', game.player[2]);
        localStorage.setItem('gamesPlayed', 0);
        player1.innerHTML = `Player 1 ${game.player[1]} Score: ${game.multiGameStore.score[1]}`;
        player2.innerHTML = `Player 2 ${game.player[2]} Score: ${game.multiGameStore.score[2]}`;
        moduleClass.style.display = 'none';
        console.log(game.multiGameStore);
    });
};
