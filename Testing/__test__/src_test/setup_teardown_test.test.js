beforeEach(() => {
    console.log('populating db....');
})

afterEach(() => {
    console.log('deleting db....');
})

describe('Setup & Teardown', () => {
    test('one', () => {
        expect(1+1).toBe(2);
    })

    test('two', () => {
        expect(2+2).toBe(4);
    })

    test('three', () => {
        expect(3+3).toBe(6);
    })
})