const underTest = require('../../src/number_of_occurences');

describe('Number Of Occurences', () => {
    test('Can find correct number of occurences for a given number', () => {
        //Given
        const nums = [1, 2, 4, 4, 4, 7, 9];
        //When
        let count = underTest.numberOfOccurences(nums, 4);
        //Then
        expect(count).toBe(3);
    })
})