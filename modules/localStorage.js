export const localStorageIncrease = (game) => {
    game.multiGameStore.gamesPlayed++;
    if (game.player1Plus > 0) {
        game.multiGameStore.score[1] += game.player1Plus;
        game.multiGameStore.winner = game.multiGameStore.player[1];
        localStorage.setItem(
            'multiGameStore',
            JSON.stringify(game.multiGameStore)
        );
    }
    if (game.player2Plus > 0) {
        game.multiGameStore.score[2] += game.player2Plus;
        game.multiGameStore.winner = game.multiGameStore.player[2];
        localStorage.setItem(
            'multiGameStore',
            JSON.stringify(game.multiGameStore)
        );
    }
};
