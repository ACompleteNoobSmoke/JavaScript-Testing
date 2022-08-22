describe('Mock', () => {
    describe('Function', () => {
        test('jest.fn is undefined', () => {
            const mock = jest.fn();
            expect(mock()).toBeUndefined();
        })

        test('mock calls', () => {
            const mock = jest.fn();
            expect(mock()).toBeUndefined();
            mock();
            expect(mock).toHaveBeenCalledTimes(2);
        })

        test('jest.fn using mock property', () => {
            const myFunc = jest.fn();

            myFunc();
            myFunc();

            expect(myFunc.mock.results[0].value).toBeUndefined();
            expect(myFunc.mock.results[1].value).toBeUndefined();

            expect(myFunc.mock.calls.length).toBe(2);
        })

        test('jest.fn capturing arguments', () => {
            const myFunc = jest.fn();
            myFunc('hello');
            expect(myFunc).toHaveBeenCalledWith('hello');
            expect(myFunc).toHaveBeenCalledTimes(1);
        })

        test('jest.fn capturing arguments with mock property', () => {
            const myFunc = jest.fn();
            myFunc('hello', 'there');
            myFunc('world');

            expect(myFunc.mock.calls[0][0]).toBe('hello');
            expect(myFunc.mock.calls[0][1]).toBe('there');
            expect(myFunc.mock.calls[1][0]).toBe('world');
        })
    })

    describe.only('mock implementation', () => {
        test('with callback', () => {
            const mock = jest.fn(() => {
                return "I will become a software engineer";
            });
            expect(mock()).toBe('I will become a software engineer');
        })

        test('with callback 2', () => {
            const year = 2022;
            const mock = jest.fn((year) => {
                return `I will become a software engineer by ${year}`.toUpperCase();
            })

            expect(mock(year)).toBe('I WILL BECOME A SOFTWARE ENGINEER BY ' + year);
        })

        test('with callback .mockImplementation', () => {
            const year = 2022;
            const mock = jest.fn().mockImplementation((year) => {
                return `I will become a software engineer by ${year}`.toUpperCase();
            })

            expect(mock(year)).toBe('I WILL BECOME A SOFTWARE ENGINEER BY ' + year);
        })

        test('mock return values', () => {
            const myFunc = jest.fn();
            expect(myFunc()).toBeUndefined();
            
            myFunc.mockReturnValue('Hey There');
            expect(myFunc()).toBe('Hey There');
        })
    })
})