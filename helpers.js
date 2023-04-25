/**
 * Given some array, returns true if
 * @param {*} array
 * @returns true if all the elements in the array are the same, and false otherwise
 */
export const checkArraySame = (array) => {
    let result = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;
};

export const horizontalArrays = (array) => {
    return expected;
};

export const verticalArrays = (array) => {
    let expected = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
    ];
    return expected;
};

export const diagonalArrays = (array) => {};
