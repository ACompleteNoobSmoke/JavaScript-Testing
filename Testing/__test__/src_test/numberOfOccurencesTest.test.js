//const underTest = require('../../src/number_of_occurences');
import { numberOfOccurences } from '../../src/number_of_occurences.js';

describe('Number Of Occurences', () => {
    test('Can find correct number of occurences for a given number', () => {
        //Given
        const nums = [1, 2, 4, 4, 4, 7, 9];
        const searchNumber = 4;
        const expected = 3;
        //When
        let actual = numberOfOccurences(nums, searchNumber);
        //Then
        expect(actual).toBe(expected);
    })

    test('Can find correct number of occurences when not found', () => {
        //Given
        const nums = [1, 2, 4, 4, 4, 7, 9];
        const searchNumber = 10;
        const expected = 0;
        //When
        let actual = numberOfOccurences(nums, searchNumber);
        //Then
        expect(actual).toBe(expected);
    })

    test('Can find correct number of occurences when list is empty', () => {
        const nums = [];
        const searchNumber = 2;
        const expected = 0;

        const actual = numberOfOccurences(nums, searchNumber);

        expect(actual).toBe(expected);
    })

    test('Throws an error when not a number is passed', () => {
        const nums = [1, 2, 3, 3, 3, 4, 6, 8, 9, 9, 9];
        const searchString = "Hello";

        expect(() => numberOfOccurences(nums, searchString)).toThrow('Hello is not a number')

    })
})