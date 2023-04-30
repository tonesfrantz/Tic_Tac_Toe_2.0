import {
    checkArraySame,
    horizontalArrays,
    verticalArrays,
    diagonalArrays,
} from './helpers';

describe('all_the_same_tests', () => {
    it('shoud return true id all elemenets are the same', () => {
        const result = checkArraySame([1, 1, 1]);
        expect(result).toBe(true);
    });
    it('shoud return false if all elemenets are undefined', () => {
        const result = checkArraySame([
            undefined,
            undefined,
            undefined,
            undefined,
        ]);
        expect(result).toBe(false);
    });
    it('shoud return false if all elemenets are NOT the same', () => {
        const result = checkArraySame([1, 2, 1]);
        expect(result).toBe(false);
    });
    it('shoud return false if all elemenets are NOT the same2', () => {
        const result = checkArraySame([0, 1, 1, 1]);
        expect(result).toBe(false);
    });

    it('shoud return false if all elemenets are NOT the same3', () => {
        const result = checkArraySame([2, 2, 2, 1]);
        expect(result).toBe(false);
    });

    it('shoud return false if all elemenets are NOT the same4', () => {
        const result = checkArraySame([1, 2, 2, 1]);
        expect(result).toBe(false);
    });

    it('shoud return false if all elemenets are NOT the same with null value', () => {
        expect(checkArraySame([2, 2, 2, null])).toBe(false);
        expect(checkArraySame([null, 2, 2])).toBe(false);
    });

    it('shoud return true for empty array', () => {
        expect(checkArraySame([])).toBe(true);
    });
});

describe('spilt horizontal arrays correctly', () => {
    it('should return all horizontal arrays', () => {
        const result = horizontalArrays([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
        const expected = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(result).toEqual(expected);
    });
    it('should return all horizontal arrays', () => {
        const result = horizontalArrays([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]);
        const expected = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        expect(result).toEqual(expected);
    });
    it('should return a deep copy', () => {
        let originalArray = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        let result = horizontalArrays(originalArray);

        // Want the origianl Array not to point to result array
        expect(originalArray).not.toBe(result);
        for (let i = 0; i < originalArray.length; i++) {
            expect(originalArray[i]).not.toBe(result[i]);
            // If this test is wrong, make a case why.
        }
    });
});

describe('spilt vertical arrays correctly', () => {
    it('should return all vertical arrays', () => {
        const result = verticalArrays([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
        const expected = [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
        ];
        expect(result).toEqual(expected);
    });
    it('should return all vertical arrays', () => {
        const result = verticalArrays([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]);
        const expected = [
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [4, 8, 12, 16],
        ];
        expect(result).toEqual(expected);
    });

    it('should not modify original array', () => {
        let originalArray = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        verticalArrays(originalArray);
        const expected = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];

        expect(originalArray).toEqual(expected);
    });
});

describe('spilt diagonal arrays correctly', () => {
    it('should return all diagonal arrays', () => {
        const result = diagonalArrays([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
        const expected = [
            [1, 5, 9],
            [3, 5, 7],
        ];
        expect(result).toEqual(expected);
    });
    it('should return all diagonal arrays', () => {
        const result = diagonalArrays([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]);
        const expected = [
            [1, 6, 11, 16],
            [4, 7, 10, 13],
        ];
        expect(result).toEqual(expected);
    });
});

// Use % opperator.Use
