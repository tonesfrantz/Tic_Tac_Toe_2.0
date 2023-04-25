export const buttonListener = (gameSize) => {
    let p1 = '&#10060;';
    let p2 = '&#x2B55;';
    for (let i = 1; i <= gameSize * gameSize; i++) {
        const button = document.getElementById(i);
        //Create button id with the word button.
        let playerClass = document.getElementById('currentPlayer');
        button.addEventListener('click', () => {
            console.log(`This is button ${i}`);
            //player swap
            if (playerClass.classList.contains('player1')) {
                button.innerHTML = p1;
            } else {
                button.innerHTML = p2;
            }
            changePlayerClass();
        });
    }
};

// toggle?

export const changePlayerClass = () => {
    let playerClass = document.getElementById('currentPlayer');
    playerClass.classList.toggle('player2');
    playerClass.classList.toggle('player1');
    if (playerClass.classList.contains('player1')) {
        playerClass.innerHTML = `Current Player: 2 'O'`;
    } else {
        playerClass.innerHTML = `Current Player: 1 'X'`;
    }
};
