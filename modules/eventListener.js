export const buttonListener = (gameSize) => {
    let p1 = '&#10060;';
    let p2 = '&#x2B55;';
    for (let i = 1; i <= gameSize * gameSize; i++) {
        const button = document.getElementById(i);
        let playerClass = document.getElementById('currentPlayer');
        button.addEventListener('click', () => {
            console.log(`This is button ${i}`);
            changePlayerClass();
            //player swap
            if (playerClass.classList.contains('player2')) {
                button.innerHTML = p1;
            } else {
                button.innerHTML = p2;
            }
        });
    }
};

// toggle?

export const changePlayerClass = () => {
    let playerClass = document.getElementById('currentPlayer');
    playerClass.classList.toggle('player2');
    if (playerClass.innerHTML == `Current Player: 1 'X'`) {
        playerClass.innerHTML = `Current Player: 2 'O'`;
    } else {
        playerClass.innerHTML = `Current Player: 1 'X'`;
    }
};
