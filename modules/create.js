//Create the DOM for Module and Game
export const createGameButtons = (game) => {
    // game.multiGameStoreUpdate();
    const body = document.getElementById('main');
    const players = document.getElementById('players');
    let buttonDivHTML = '';
    for (let i = 0; i < game.gameSize * game.gameSize; i++) {
        // Create id with name 'button' and number
        buttonDivHTML += `<div id="tile - ${
            i + 1
        }" class="button">&#11035;</div>`;
    }
    body.innerHTML = buttonDivHTML;
    let playerDivHTML = '';
    for (let j = 1; j <= 2; j++) {
        playerDivHTML += `<div id="player${j}" class="player">Player ${j} ${game.multiGameStore.player[j]} -  Score: ${game.multiGameStore.score[j]}</div>`;
    }
    playerDivHTML += `</br><div id="currentPlayer">Most Recent Player${game.multiGameStore.currentPlayer}</div>`;
    players.innerHTML = playerDivHTML;
};

// Module which will disappear after players selected
export const createPlayerSelection = (game) => {
    const playerSelectionModule = document.getElementById('selectModule');
    const playerNo = 2;
    const moduleChilren = document.createElement('div');
    moduleChilren.setAttribute('id', 'selectModuleChild');
    playerSelectionModule.appendChild(moduleChilren);
    let selectModule = `<h1 id="moduleHeader">Tic Tac Toe</h1>`;
    // Select avatar buttons
    for (let i = 1; i <= playerNo; i++) {
        selectModule += `<div id="playerAvatar${i}" class="selectAvatar">Player ${i} Select Avatar <br/>${game.multiGameStore.player[i]}</div>`;
    }
    // Start Play
    selectModule += `<div id="startPlay" class="selectAvatar">START PLAY</div>`;
    moduleChilren.innerHTML = selectModule;
};

// Select Emoji from the API
export const avatarButton = (game) => {
    const player1RandomAvatar = document.getElementById('playerAvatar1');
    const player2RandomAvatar = document.getElementById('playerAvatar2');
    player1RandomAvatar.addEventListener('click', () => {
        emojiAPICall(game, 'smileys_emotion', 1, player1RandomAvatar);
    });
    player2RandomAvatar.addEventListener('click', () => {
        emojiAPICall(game, 'animals_nature', 2, player2RandomAvatar);
    });
};

const emojiAPICall = (game, requestGroup, gamePlayer, elementToChange) => {
    let randomEmoji = Math.floor(Math.random() * 31);
    fetch(`https://api.api-ninjas.com/v1/emoji?group=${requestGroup}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': '6LoRkifXuzmXIuc0RtZGhw==wnVpcK2n3MQxe1NI',
        },
    })
        .then((response) => response.json())
        // .then()

        .then((result) => {
            game.multiGameStore.player[gamePlayer] =
                result[randomEmoji].character;

            // console.log(game.multiGameStore);
            elementToChange.innerHTML = `Player ${gamePlayer} Select Avatar <br/>${game.multiGameStore.player[gamePlayer]}`;
            game.currentPlayerEmoji();
        })
        .catch((error) => console.error(error));
};

export const startGame = (game) => {
    const startButton = document.getElementById('startPlay');
    const moduleClass = document.getElementById('selectModule');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    startButton.addEventListener('click', () => {
        localStorage.setItem(
            'multiGameStore',
            JSON.stringify(game.multiGameStore)
        );
        // localStorage.setItem('player1_score', 0);
        // localStorage.setItem('player2_score', 0);
        // localStorage.setItem('player1', game.multiGameStore.player[1]);
        // localStorage.setItem('player2', game.multiGameStore.player[2]);
        // localStorage.setItem('gamesPlayed', 0);
        player1.innerHTML = `Player 1 ${game.multiGameStore.player[1]} Score: ${game.multiGameStore.score[1]}`;
        player2.innerHTML = `Player 2 ${game.multiGameStore.player[2]} Score: ${game.multiGameStore.score[2]}`;
        moduleClass.style.display = 'none';
        console.log(game.multiGameStore);
    });
};
