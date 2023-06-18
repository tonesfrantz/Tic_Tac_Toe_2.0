export const localStorageIncrease = (game) => {
    // // Get stored Data
    // game.multiGameStoreUpdate();
    let player1Count = parseInt(localStorage.getItem('player1_score'));
    let player2Count = parseInt(localStorage.getItem('player2_score'));
    let gamesPlayed = parseInt(localStorage.getItem('gamesPlayed'));
    // console.log('Read before assign storage');
    // console.log(parseInt(localStorage.getItem('player1_score')));
    // console.log(parseInt(localStorage.getItem('player2_score')));
    // console.log(parseInt(localStorage.getItem('gamesPlayed')));
    // console.log(`MultiGameStore BEFORE storage `);
    // console.log(game.multiGameStore);
    // console.log(
    //     `Local storage Before function: Gamesplayed: ${gamesPlayed}, Player 1: ${player1Count}, Player 2: ${player2Count}.`
    // );
    // //Assign Score
    console.log(`LocalStorageOUTSIDEIFBE-FOREIncrease P1: ${player1Count}`);
    console.log(`LocalStorageOUTSIDEIFBE-FOREIncrease P2: ${player2Count}`);
    if (game.player1Plus > 0) {
        gamesPlayed++;
        player1Count = player1Count + game.player1Plus;
        console.log(`LocalStorageINSIDEIFIncrease P1: ${player1Count}`);
        localStorage.setItem('player1_score', player1Count);
        // localStorage.setItem('player2_score', player2Count);
        localStorage.setItem('gamesPlayed', gamesPlayed);
    }
    if (game.player2Plus > 0) {
        gamesPlayed++;
        player2Count = player2Count + game.player2Plus;
        console.log(`LocalStorageINSIDEIFIncrease P2: ${player2Count}`);
        // localStorage.setItem('player1_score', player1Count);
        localStorage.setItem('player2_score', player2Count);
        localStorage.setItem('gamesPlayed', gamesPlayed);
    }
    player1Count = 0;
    player2Count = 0;
    gamesPlayed = 0;
    game.player1Plus = 0;
    game.player2Plus = 0;
    console.log(
        `LocalStorageOUTSIDEIFAFTERIncrease P1: ${(player1Count =
            player1Count + game.player1Plus)}`
    );
    console.log(
        `LocalStorageOUTSIDEIFAFTERIncrease P2: ${(player2Count =
            player2Count + game.player2Plus)}`
    );
    console.log(
        `Local storage After function: Gamesplayed: ${gamesPlayed}, Player 1: ${player1Count}, Player 2: ${player2Count}.`
    );

    // //Assign Storage

    // console.log('Read after assign storage');
    // console.log(parseInt(localStorage.getItem('player1_score')));
    // console.log(parseInt(localStorage.getItem('player2_score')));
    // console.log(parseInt(localStorage.getItem('gamesPlayed')));
    // game.multiGameStoreUpdate();
    // console.log(`MultiGameStore AFTER storage`);
    // console.log(game.multiGameStore);
};
