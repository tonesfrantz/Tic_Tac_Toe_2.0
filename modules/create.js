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
        // let playerIcon = '';
        // if (j == 1) {
        //     playerIcon = game.player1;
        // } else {
        //     playerIcon = game.player2;
        // }

        playerDivHTML += `<div id="player${j}" class="player">Player ${j} ${game.player[j]} -  Score: ${game.multiGameStore.score[j]}</div>`;
    }
    playerDivHTML += `</br><div id="currentPlayer">Most Recent Move${game.currentPlayer}</div>`;
    players.innerHTML = playerDivHTML;
};

// Module which will disappear after players selected
export const createPlayerSelection = (game) => {
    const playerSelctionModule = document.getElementById('selectModule');
    const playerNo = 2;
    const moduleChilren = document.createElement('div');
    moduleChilren.setAttribute('id', 'selectModuleChild');
    playerSelctionModule.appendChild(moduleChilren);
    var selectModule = `<h1 id="moduleHeader">Tic Tac Toe</h1>`;
    // Select avatar buttons
    for (let i = 1; i <= playerNo; i++) {
        selectModule += `<div id="playerAvatar${i}" class="selectAvatar">Player ${i} Select Avatar <br/>${game.player[i]}</div>`;
    }
    // Start Play
    selectModule += `<div id="startPlay" class="selectAvatar">START PLAY</div>`;
    moduleChilren.innerHTML = selectModule;
    // Once select avatar function has been written.
    // Create button to place into GAME OBJECT and Populate storage.
    // Will also flick off the startmodule.
};

// Select Emoji from the API
export const avatarButton = (game) => {
    let player1RandomAvatar = document.getElementById('playerAvatar1');
    let player2RandomAvatar = document.getElementById('playerAvatar2');
    player1RandomAvatar.addEventListener('click', () => {
        // Have to work on this AJAX request and the SYNTAX
        let requestGroup = 'smileys_emotion';
        let randomEmoji = Math.floor(Math.random() * 31);

        fetch(`https://api.api-ninjas.com/v1/emoji?group=${requestGroup}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': '6LoRkifXuzmXIuc0RtZGhw==wnVpcK2n3MQxe1NI',
            },
        })
            .then((response) => response.json())
            .then
            //(result) => console.log(result)
            //console.log((game.player[1] = result[randomEmoji].character))
            ()
            .then((result) =>
                console.log((game.player[1] = result[randomEmoji].character))
            )
            .catch((error) => console.error(error));
        setTimeout(applyPlayer1, 1000);
        function applyPlayer1() {
            player1RandomAvatar.innerHTML = `Player 1 Select Avatar <br/>${game.player[1]}`;
        }
    });

    player2RandomAvatar.addEventListener('click', () => {
        // Have to work on this AJAX request and the SYNTAX
        let requestGroup = 'animals_nature';
        let randomEmoji = Math.floor(Math.random() * 31);

        fetch(`https://api.api-ninjas.com/v1/emoji?group=${requestGroup}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': '6LoRkifXuzmXIuc0RtZGhw==wnVpcK2n3MQxe1NI',
            },
        })
            .then((response) => response.json())
            .then
            //(result) => console.log(result)
            //console.log((game.player[2] = result[randomEmoji].character))
            ()
            .then((result) =>
                console.log((game.player[2] = result[randomEmoji].character))
            )
            .catch((error) => console.error(error));
        setTimeout(applyPlayer2, 1000);
        function applyPlayer2() {
            player2RandomAvatar.innerHTML = `Player 2 Select Avatar <br/>${game.player[2]}`;
        }
    });
};

export const startGame = (game) => {
    let startButton = document.getElementById('startPlay');
    let moduleClass = document.getElementById('selectModule');
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');
    startButton.addEventListener('click', () => {
        player1.innerHTML = `Player 1 ${game.player[1]} Score: ${game.multiGameStore.score[1]}`;
        player2.innerHTML = `Player 2 ${game.player[2]} Score: ${game.multiGameStore.score[2]}`;
        moduleClass.style.display = 'none';
        console.log(game.multiGameStore.score);
    });
};
