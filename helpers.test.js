import { checkArraySame, horizontalArrays } from './helpers';

describe('all_the_same_tests', () => {
    it('shoud return true id all elemenets are the same', () => {
        const result = checkArraySame([1, 1, 1]);
        expect(result).toBe(true);
    });
    it('shoud return false if all elemenets are NOT the same', () => {
        const result = checkArraySame([a, x, x]);
        expect(result).toBe(false);
    });
    it('shoud return false if all elemenets are NOT the same2', () => {
        const result = checkArraySame([a, x, x, x]);
        expect(result).toBe(false);
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
});
