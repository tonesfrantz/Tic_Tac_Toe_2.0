// setup the board
// store the player data
// do the event listeners

import { diagonalArrays, horizontalArrays } from "./helpers";

checkWhoWon();


const getAllCombinations = () => {
    const vArrays = verticalArrays(); // [[x, o, x], [o, -, x], [-, o, -]]
    const hArrays = horizontalArrays(); // [[x, o, -], [o, -, o], ...]
    const dArrays = diagonalArrays();
    return [...vArrays, ...hArrays, ...dArrays];
}

/**
 * data: [
 *    [x, o, x],
 *    [o, -, x],
 *    [-, o, -]
 * ]
 *  */
const checkWhoWon = (data) => {
    // Job 1: [x, o, x], [o, -, x], [-, o, -], [x, o, -]
    const combinations = getAllCombinations(data);

    let isAnyWinner = false;
    for(let combinations of combinations) {
        const isWinner = checkArraySame(combination);
        isAnyWinner = true;
    }

    // WINNER

}