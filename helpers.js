/**
 * Given some array, returns true if
 * @param {*} array
 * @returns true if all the elements in the array are the same, and false otherwise
 */
export const checkArraySame = (array) => {
    // True/False - how to define winner
    let resultSame = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] == undefined) {
            resultSame = false;
            break;
        } else if (array[i] === array[i + 1]) {
            resultSame = true;
        } else {
            resultSame = false;
            break;
        }
    }
    return resultSame;
};

export const horizontalArrays = (array) => {
    let copy = [];
    array.forEach((elem) => {
        if (Array.isArray(elem)) {
            copy.push([...elem]);
        } else {
            copy.push(elem);
        }
    });
    return copy;

    // Copy into a whole new structure
    // Deep copy array
};

export const verticalArrays = (array) => {
    let reshuffleVertile = [];
    for (let i = 0; i < array.length; i++) {
        reshuffleVertile.push([]);
        for (let j = 0; j < array.length; j++) {
            let value = array[j][i];
            reshuffleVertile[i].push(value);
        }
        console.log(reshuffleVertile);
    }
    return reshuffleVertile;
};

export const diagonalArrays = (array) => {
    let reshuffleDiagonal1 = [];
    let reshuffleDiagonal2 = [];
    for (let i = 0; i < array.length; i++) {
        let value = array[i][i];
        reshuffleDiagonal1.push(value);
    }
    for (let i = 0; i < array.length; i++) {
        let p = array.length - i - 1;
        let value = array[i][p];
        reshuffleDiagonal2.push(value);
    }
    let reshuffleDiagonal = [reshuffleDiagonal1, reshuffleDiagonal2];
    return reshuffleDiagonal;
};
// 2 Diagonals
// Loops length down to zero
// For problem solving write two seerate loops.
// Could write two funtions and test for each diagonal.
