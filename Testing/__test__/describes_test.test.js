describe('testing additions', () => {
    describe('testing positives additions', () => {
        test('it should add 1 + 1', () => {
            expect(1 + 1).toBe(2);
        })
        it('it should add 2 + 2', () => {
            expect(2 + 2).toBe(4);
        })
    }) 

    describe('testing negatives additions', () => {
        test('it should add -4 + 2', () => {
            expect(-4 + 2).toBe(-2)
        })

        test('it should add -10 + 8', () => {
            expect(-10 + 8).toBe(-2)
        })
    })
})