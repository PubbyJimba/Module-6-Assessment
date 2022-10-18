const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {
        const testArray = shuffleArray([1, 2, 3, 4, 5]);
        expect(testArray).toBeInstanceOf(Array);
    });
    test('have all elements of original array', () => {
        const testArray = shuffleArray([1, 2, 3, 4, 5]);
        expect(testArray).toContain(1 && 2 && 3 && 4 && 5);
    })
})